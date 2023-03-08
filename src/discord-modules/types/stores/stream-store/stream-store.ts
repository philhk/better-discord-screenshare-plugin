export type StreamStore = StreamStore_ & {
  __proto__: StreamStore_;
};

export interface StreamStore_ {
  initialize: (...args: any[]) => any;
  isSelfStreamHidden: (...args: any[]) => any;
  getLastActiveStream: (...args: any[]) => any;
  getAllActiveStreams: (...args: any[]) => any;
  getAllActiveStreamsForChannel: (...args: any[]) => any;
  getActiveStreamForStreamKey: (...args: any[]) => any;
  getActiveStreamForApplicationStream: (...args: any[]) => any;
  getCurrentUserActiveStream: () => Stream;
  getActiveStreamForUser: (...args: any[]) => any;
  getStreamerActiveStreamMetadata: (...args: any[]) => any;
  getAnyStreamForUser: (...args: any[]) => any;
  getStreamForUser: (...args: any[]) => any;
  getRTCStream: (...args: any[]) => any;
  getAllApplicationStreams: (...args: any[]) => any;
  getAllApplicationStreamsForChannel: (...args: any[]) => any;
  getViewerIds: (...args: any[]) => any;
  getState: (...args: any[]) => any;
  __getLocalVars: (...args: any[]) => any;
}

export interface Stream {
  streamType: string;
  channelId: string;
  ownerId: string;
  guildId?: string;
  state: string;
}
