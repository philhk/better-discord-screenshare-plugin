import { Patcher, Utils } from 'dium';
import React from 'react';
import deepmerge from 'ts-deepmerge';
import { StreamQualitySection } from '../components';
import {
  Location,
  dispatcher,
  mediaEngineStore,
  streamStore,
  utils as discordUtils,
} from '../discord-modules';
import { Emitter } from '../emitter';
import {
  DefaultScreenshareConfig,
  defaultScreenshareConfig,
  ScreenshareConfig,
  usePluginStore,
} from '../stores';
import { kbitToBit } from '../utils';

export class Screenshare {
  private static mediaEngineStore = mediaEngineStore;
  private static mediaEngine = this.mediaEngineStore.getMediaEngine();
  private static replacedStreamQualityComponent = (<StreamQualitySection />);
  private static unpatchFunctions: (() => void)[] = [];

  public static patch(): void {
    this.unpatch();

    const unpatchQualityModifer = Emitter.addListener(
      this.mediaEngine.emitter,
      'on',
      'connection',
      (connection) => {
        if (connection.context !== 'stream') return;

        const overwriteQuality = () => {
          const {
            getAudioCodec,
            getAudioSource,
            getKeyframeInterval,
            getVideoCodec,
            encode,
            capture,
            bitrate,
          } = deepmerge(
            defaultScreenshareConfig as any,
            usePluginStore.getState().screenshare as any
          ) as any as DefaultScreenshareConfig & ScreenshareConfig;

          connection.setCodecs(getAudioCodec(), getVideoCodec(), 'stream');

          // const desktopSourceId = connection.desktopSourceId;
          // connection.setDesktopSource(desktopSourceId || '', {
          //   useVideoHook: this.mediaEngineStore.getVideoHook(),
          //   useGraphicsCapture: true,
          //   useQuartzCapturer: true,
          //   allowScreenCaptureKit: true,
          //   hdrCaptureMode: 'always',
          //   fps: 69,
          //   height: 111,
          //   width: 423,
          // });

          connection.setDesktopEncodingOptions(
            encode.getWidth(),
            encode.getHeight(),
            encode.getFramerate()
          );

          connection.overwriteQualityForTesting({
            encode: {
              framerate: encode.getFramerate(),
              width: encode.getWidth(),
              height: encode.getHeight(),
            },
            capture: {
              framerate: capture.getFramerate(),
              width: capture.getWidth(),
              height: capture.getHeight(),
            },
            bitrateMax: kbitToBit(bitrate.getMaximum()),
            bitrateMin: kbitToBit(bitrate.getMinimum()),
            bitrateTarget: kbitToBit(bitrate.getTarget()),
          });

          const audioSource = getAudioSource();
          if (audioSource === 'none') {
            connection.setSoundshareSource(0, false);
          } else if (audioSource && audioSource !== 'default') {
            const pid = discordUtils.getPidFromDesktopSource(audioSource);

            if (pid) {
              connection.setSoundshareSource(
                pid,
                // this.mediaEngineStore.getExperimentalSoundshare()
                true
              );
            }
          }

          const keyframeInterval = getKeyframeInterval();
          if (keyframeInterval)
            connection.setKeyframeInterval(keyframeInterval);
        };

        connection.on('connected', overwriteQuality);
      }
    );

    const unpatchModalReplacer = Patcher.after(
      Location.prototype,
      'render',
      (data) => {
        if (data.context.props.page !== 'Go Live Modal') return;
        const oldChildren = data.result.props.children;
        const modal =
          data.result._owner.return.return.return.return.return.return.return
            .memoizedProps;
        const modalKey = modal.modalKey;
        const closeModal = modal.closeModal;

        data.result.props.children = (props: any) => {
          const oldChildrenResult = oldChildren(props);

          const submitBtn: any = Utils.queryTree(
            oldChildrenResult,
            (arg) => arg?.props?.type === 'submit'
          );

          /* This function exists because there needs to be a way to update the quality so I prevent the default event and emit the connected event */
          if (submitBtn?.props)
            submitBtn.props.onClick = (e: any) => {
              this.mediaEngine.eachConnection((connection) => {
                if (
                  connection.context === 'stream' &&
                  connection.connectionState === 'CONNECTED'
                ) {
                  this.mediaEngine.setDesktopSource({ id: null });

                  const currentStream =
                    streamStore.getCurrentUserActiveStream();
                  dispatcher.dispatch({
                    type: 'STREAM_STOP',
                    streamKey: `${currentStream.streamType}:${
                      currentStream.guildId ? `${currentStream.guildId}:` : ''
                    }${currentStream.channelId}:${currentStream.ownerId}`,
                  });

                  closeModal(modalKey);
                }
              });
            };

          switch (oldChildrenResult.props.value.location.section) {
            case 'Stream Settings':
              const streamSettingsModalContent =
                oldChildrenResult.props.children;

              streamSettingsModalContent.props.title = 'Stream Settings';
              streamSettingsModalContent.props.children.props.children =
                this.replacedStreamQualityComponent;
              break;
            default:
              break;
          }

          return oldChildrenResult;
        };
      }
    );

    this.unpatchFunctions.push(unpatchQualityModifer, unpatchModalReplacer);
  }

  public static unpatch(): void {
    this.unpatchFunctions.forEach((fn) => fn());
    this.unpatchFunctions = [];
  }
}
