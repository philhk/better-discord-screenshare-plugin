import { Patcher, setMeta } from 'dium';
import { betterDiscordConfig } from '../betterdiscord.config';
import { Plugin } from './bd';
import { Emitter } from './emitter';
import { Debug, Screenshare } from './patchers';

module.exports = class extends Plugin {
  constructor() {
    super();
    setMeta(betterDiscordConfig);
  }

  protected async start(): Promise<void> {
    Screenshare.patch();
  }

  protected stop(): void {
    Patcher.unpatchAll();
    Debug.unpatch();
    Screenshare.unpatch();
    Emitter.removeAllListeners();
  }
};
