import { mediaEngineStore } from '../discord-modules/stores';
import { Emitter } from '../emitter';
import { debugFunctionsInObj } from '../utils';

export class Debug {
  private static mediaEngineStore = mediaEngineStore;
  private static mediaEngine = this.mediaEngineStore.getMediaEngine();
  private static unpatchFunctions: (() => void)[] = [];

  public static patch(
    options: {
      mediaEngineStore?: boolean;
      mediaEngine?: boolean;
      connections?: boolean;
    } = {}
  ) {
    options.mediaEngineStore &&
      this.unpatchFunctions.push(
        ...debugFunctionsInObj(this.mediaEngineStore, {
          searchProtos: true,
          name: 'MediaEngineStore',
          filter: ([key, value]) =>
            ![
              'isSelfDeaf',
              'isSelfMute',
              'isSupported',
              'isDeaf',
              'isEnabled',
              'supports',
              'supportsInApp',
              'getInputDetected',
              'isMute',
              'isHardwareMute',
              'getOpenH264',
            ].includes(key),
        })
      );

    options.mediaEngine &&
      this.unpatchFunctions.push(
        ...debugFunctionsInObj(this.mediaEngine, {
          searchProtos: true,
          name: 'MediaEngine',
          filter: ([key, value]) =>
            !['emit', 'supports', 'supported', 'eachConnection'].includes(key),
        })
      );

    options.connections &&
      this.unpatchFunctions.push(
        Emitter.addListener(
          this.mediaEngine.emitter,
          'on',
          'connection',
          (connection) => {
            this.unpatchFunctions.push(
              ...debugFunctionsInObj(connection, {
                searchProtos: true,
                name: 'Connection',
                filter: ([key, value]) =>
                  ![
                    'emit',
                    'handleStats',
                    'getStats',
                    'emitStats',
                    'getStreamParameters',
                    'setHasActiveVideoOutputSink',
                    'getActiveOutputSinkTrackingEnabled',
                  ].includes(key),
              })
            );
          }
        )
      );
  }

  public static unpatch() {
    this.unpatchFunctions.forEach((fn) => fn());
    this.unpatchFunctions = [];
  }
}
