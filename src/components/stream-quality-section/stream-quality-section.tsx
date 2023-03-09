import React, { useEffect, useState } from 'react';
import { mediaEngineStore, text } from '../../discord-modules';
import {
  CodecCapabilities,
  WindowPreview,
} from '../../discord-modules/types/modules';
import { usePluginStore } from '../../stores';
import { checkIfNumberOrBlank } from '../../utils';
import { Dropdown } from '../dropdown';
import { TextInput } from '../text-input';

const { h5 } = text;
const mediaEngine = mediaEngineStore.getMediaEngine();

export interface StreamQualitySectionSettingsGroupProps {
  title: string;
  settingElements: JSX.Element[];
}

export const StreamQualitySectionSettingsGroup: React.FC<
  StreamQualitySectionSettingsGroupProps
> = (props) => {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <h1
        style={{
          marginTop: '12px',
          marginBottom: '8px',
        }}
        className={[h5].join(' ')}
      >
        {props.title}
      </h1>
      <div
        style={{
          width: '100%',
          display: 'flex',
          gap: '6px',
        }}
      >
        {...props.settingElements.map((el) => (
          <div
            style={{
              flex: '1 1 0',
            }}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export const StreamQualitySection: React.FC = () => {
  const {
    audioSource,
    audioCodec,
    videoCodec,
    bitrate,
    capture,
    encode,
    keyframeInterval,
    setAudioCodec,
    setVideoCodec,
    setAudioSource,
    setKeyframeInterval,
  } = usePluginStore((state) => state.screenshare);

  const [codecs, setCodecs] = useState<CodecCapabilities[] | undefined>();
  const [windowPreviews, setWindowPreviews] = useState<
    WindowPreview[] | undefined
  >();

  useEffect(() => {
    const interval = setInterval(async () => {
      setWindowPreviews(await mediaEngine.getWindowPreviews(1, 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    (async () => {
      const stringifiedCodecs: CodecCapabilities[] = JSON.parse(
        await new Promise((res) => mediaEngine.getCodecCapabilities(res))
      );

      setCodecs(stringifiedCodecs);
      setWindowPreviews(await mediaEngine.getWindowPreviews(1, 1));
    })();
  }, []);

  useEffect(() => {
    if (windowPreviews)
      if (
        !windowPreviews.some(
          (preview) =>
            !audioSource ||
            [preview.id, 'none', 'default'].includes(audioSource)
        )
      ) {
        setAudioSource(undefined);
      }
  }, [windowPreviews]);

  const captureProps: StreamQualitySectionSettingsGroupProps = {
    title: 'Capture',
    settingElements: [
      <TextInput
        placeholder="Width"
        type="number"
        value={capture.width}
        onChange={(changedValue) =>
          checkIfNumberOrBlank(changedValue, capture.setWidth)
        }
      />,
      <TextInput
        placeholder="Height"
        type="number"
        value={capture.height}
        onChange={(changedValue) =>
          checkIfNumberOrBlank(changedValue, capture.setHeight)
        }
      />,
      <TextInput
        placeholder="Framerate"
        type="number"
        value={capture.framerate}
        onChange={(changedValue) =>
          checkIfNumberOrBlank(changedValue, capture.setFramerate)
        }
      />,
    ],
  };

  const encodeProps: StreamQualitySectionSettingsGroupProps = {
    title: 'Encode',
    settingElements: [
      <TextInput
        placeholder="Width"
        type="number"
        value={encode.width}
        onChange={(changedValue) =>
          checkIfNumberOrBlank(changedValue, encode.setWidth)
        }
      />,
      <TextInput
        placeholder="Height"
        type="number"
        value={encode.height}
        onChange={(changedValue) =>
          checkIfNumberOrBlank(changedValue, encode.setHeight)
        }
      />,
      <TextInput
        placeholder="Framerate"
        type="number"
        value={encode.framerate}
        onChange={(changedValue) =>
          checkIfNumberOrBlank(changedValue, encode.setFramerate)
        }
      />,
    ],
  };

  const bitrateProps: StreamQualitySectionSettingsGroupProps = {
    title: 'Bitrate (kbit/s)',
    settingElements: [
      <TextInput
        placeholder="Minimum"
        type="number"
        value={bitrate.minimum}
        onChange={(changedValue) =>
          checkIfNumberOrBlank(changedValue, bitrate.setMinimum)
        }
      />,
      <TextInput
        placeholder="Target"
        type="number"
        value={bitrate.target}
        onChange={(changedValue) =>
          checkIfNumberOrBlank(changedValue, bitrate.setTarget)
        }
      />,
      <TextInput
        placeholder="Maximum"
        type="number"
        value={bitrate.maximum}
        onChange={(changedValue) =>
          checkIfNumberOrBlank(changedValue, bitrate.setMaximum)
        }
      />,
    ],
  };

  const keyframeIntervalProps: StreamQualitySectionSettingsGroupProps = {
    title: 'Keyframe Interval',
    settingElements: [
      <TextInput
        placeholder="Interval"
        type="number"
        value={keyframeInterval}
        onChange={(changedValue) =>
          checkIfNumberOrBlank(changedValue, setKeyframeInterval)
        }
      />,
    ],
  };

  const videoCodecProps: StreamQualitySectionSettingsGroupProps = {
    title: 'Video Codec',
    settingElements: [
      <Dropdown
        options={[
          ...(codecs
            ? codecs.map((codec) => ({
                label: `${codec.codec}${codec.encode ? '' : ' (Unsupported)'}`,
                value: codec.codec,
              }))
            : []),
        ]}
        onChange={(state) => setVideoCodec(state)}
        value={videoCodec || 'H264'}
      />,
    ],
  };

  const audioCodecProps: StreamQualitySectionSettingsGroupProps = {
    title: 'Audio Codec',
    settingElements: [
      <Dropdown
        options={[
          {
            label: 'OPUS',
            value: 'OPUS',
          },
        ]}
        onChange={(state) => setAudioCodec(state)}
        value={audioCodec || 'OPUS'}
      />,
    ],
  };

  const audioSrcProps: StreamQualitySectionSettingsGroupProps = {
    title: 'Audio Source',
    settingElements: [
      <Dropdown
        options={[
          {
            label: 'Default',
            value: 'default',
          },
          {
            label: 'None',
            value: 'none',
          },
          ...(windowPreviews
            ? windowPreviews.map(({ id, name }) => ({ label: name, value: id }))
            : []),
        ]}
        onChange={(state) => setAudioSource(state)}
        value={audioSource || 'default'}
      />,
    ],
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
      }}
    >
      <StreamQualitySectionSettingsGroup {...captureProps} />
      <StreamQualitySectionSettingsGroup {...encodeProps} />
      <StreamQualitySectionSettingsGroup {...bitrateProps} />
      <div
        style={{
          display: 'flex',
          gap: '6px',
        }}
      >
        <StreamQualitySectionSettingsGroup {...audioCodecProps} />
        <StreamQualitySectionSettingsGroup {...videoCodecProps} />
        <StreamQualitySectionSettingsGroup {...keyframeIntervalProps} />
      </div>
      <StreamQualitySectionSettingsGroup {...audioSrcProps} />
    </div>
  );
};
