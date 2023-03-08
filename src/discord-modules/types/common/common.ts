export interface DiscordEventEmitter {
  on: (...args: any[]) => any;
  off: (...args: any[]) => any;
  once: (...args: any[]) => any;
  addListener: (...args: any[]) => any;
  removeListener: (...args: any[]) => any;
  removeAllListeners: (...args: any[]) => any;
  emit: (...args: any[]) => any;
  emitUnsafe: (...args: any[]) => any;
  listenerCount: (...args: any[]) => any;
}
