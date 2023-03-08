import deepmerge from 'ts-deepmerge';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { StateCreator } from 'zustand/vanilla';
import { databaseStorage } from '../../storage';
import { DeepPartial } from '../../types';
import { parseIntWithUndefined } from '../../utils';

export interface ScreenshareConfig {
  encode: {
    getFramerate: () => number;
    getWidth: () => number;
    getHeight: () => number;
    setFramerate: (framerate: number | string | undefined) => void;
    setWidth: (width: number | string | undefined) => void;
    setHeight: (height: number | string | undefined) => void;
    width?: number | string;
    height?: number | string;
    framerate?: number | string;
  };
  capture: {
    getFramerate: () => number;
    getWidth: () => number;
    getHeight: () => number;
    setFramerate: (framerate: number | string | undefined) => void;
    setWidth: (width: number | string | undefined) => void;
    setHeight: (height: number | string | undefined) => void;
    width?: number | string;
    height?: number | string;
    framerate?: number | string;
  };
  bitrate: {
    getMinimum: () => number;
    getTarget: () => number;
    getMaximum: () => number;
    setMinimum: (bitrate: number | string | undefined) => void;
    setTarget: (bitrate: number | string | undefined) => void;
    setMaximum: (bitrate: number | string | undefined) => void;
    minimum?: number | string;
    target?: number | string;
    maximum?: number | string;
  };
  videoCodec?: string;
  audioCodec?: string;
  audioSource?: string;
  keyframeInterval?: number | string;
  getVideoCodec: () => string;
  getAudioCodec: () => string;
  getAudioSource: () => string | undefined;
  getKeyframeInterval: () => number | undefined;
  setVideoCodec: (codec: string | undefined) => void;
  setAudioCodec: (codec: string | undefined) => void;
  setAudioSource: (audioSource: string | undefined) => void;
  setKeyframeInterval: (keyframeInterval: number | string | undefined) => void;
}

export interface PluginConfig {
  screenshare: ScreenshareConfig;
  customSet: (
    callback: (state: PluginConfig) => DeepPartial<PluginConfig> | void
  ) => void;
}

export const defaultScreenshareConfig = {
  bitrate: {
    minimum: 1000,
    target: 2500,
    maximum: 5000,
  },
  encode: {
    framerate: 60,
    height: 1080,
    width: 1920,
  },
  capture: {
    framerate: 60,
    height: 1080,
    width: 1920,
  },
  audioCodec: 'OPUS',
  videoCodec: 'H264',
};
export type DefaultScreenshareConfig = typeof defaultScreenshareConfig;

export const createPluginStore: StateCreator<PluginConfig> = (set, get) => ({
  screenshare: {
    bitrate: {
      getMaximum: () =>
        parseIntWithUndefined(get().screenshare.bitrate.maximum) ||
        defaultScreenshareConfig.bitrate.maximum,
      getMinimum: () =>
        parseIntWithUndefined(get().screenshare.bitrate.minimum) ||
        defaultScreenshareConfig.bitrate.minimum,
      getTarget: () =>
        parseIntWithUndefined(get().screenshare.bitrate.target) ||
        defaultScreenshareConfig.bitrate.target,
      setMaximum: (bitrate) =>
        get().customSet((state) => {
          state.screenshare.bitrate.maximum = bitrate;
          return state;
        }),
      setMinimum: (bitrate) =>
        get().customSet((state) => {
          state.screenshare.bitrate.minimum = bitrate;
          return state;
        }),
      setTarget: (bitrate) =>
        get().customSet((state) => {
          state.screenshare.bitrate.target = bitrate;
          return state;
        }),
    },
    encode: {
      getFramerate: () =>
        parseIntWithUndefined(get().screenshare.encode.framerate) ||
        defaultScreenshareConfig.encode.framerate,
      getWidth: () =>
        parseIntWithUndefined(get().screenshare.encode.width) ||
        defaultScreenshareConfig.encode.width,
      getHeight: () =>
        parseIntWithUndefined(get().screenshare.encode.height) ||
        defaultScreenshareConfig.encode.height,
      setFramerate: (framerate) =>
        get().customSet((state) => {
          state.screenshare.encode.framerate = framerate;
          return state;
        }),
      setWidth: (width) =>
        get().customSet((state) => {
          state.screenshare.encode.width = width;
          return state;
        }),
      setHeight: (height) =>
        get().customSet((state) => {
          state.screenshare.encode.height = height;
          return state;
        }),
    },
    capture: {
      getFramerate: () =>
        parseIntWithUndefined(get().screenshare.capture.framerate) ||
        defaultScreenshareConfig.capture.framerate,
      getWidth: () =>
        parseIntWithUndefined(get().screenshare.capture.width) ||
        defaultScreenshareConfig.capture.width,
      getHeight: () =>
        parseIntWithUndefined(get().screenshare.capture.height) ||
        defaultScreenshareConfig.capture.height,
      setFramerate: (framerate) =>
        get().customSet((state) => {
          state.screenshare.capture.framerate = framerate;
          return state;
        }),
      setWidth: (width) =>
        get().customSet((state) => {
          state.screenshare.capture.width = width;
          return state;
        }),
      setHeight: (height) =>
        get().customSet((state) => {
          state.screenshare.capture.height = height;
          return state;
        }),
    },
    setAudioCodec: (audioCodec) =>
      get().customSet((state) => {
        state.screenshare.audioCodec = audioCodec;
        return state;
      }),
    setVideoCodec: (videoCodec) =>
      get().customSet((state) => {
        state.screenshare.videoCodec = videoCodec;
        return state;
      }),
    setAudioSource: (audioSource) =>
      get().customSet((state) => {
        state.screenshare.audioSource = audioSource;
        return state;
      }),
    setKeyframeInterval: (keyframeInterval) =>
      get().customSet((state) => {
        state.screenshare.keyframeInterval = keyframeInterval;
        return state;
      }),
    getAudioCodec: () =>
      get().screenshare.audioCodec || defaultScreenshareConfig.audioCodec,
    getVideoCodec: () =>
      get().screenshare.videoCodec || defaultScreenshareConfig.videoCodec,
    getKeyframeInterval: () =>
      parseIntWithUndefined(get().screenshare.keyframeInterval),
    getAudioSource: () => get().screenshare.audioSource,
  },
  customSet: (
    callback: (state: PluginConfig) => DeepPartial<PluginConfig> | void
  ) => {
    set((currentState) =>
      deepmerge(currentState, (callback(currentState) as any) || currentState)
    );
  },
});

export const usePluginStore = create(
  persist<PluginConfig>(createPluginStore, {
    name: 'BetterScreensharePlugin',
    storage: createJSONStorage(() => databaseStorage),
    merge: (persistedState: any, currentState) =>
      deepmerge<PluginConfig[]>(currentState, persistedState),
  })
);
