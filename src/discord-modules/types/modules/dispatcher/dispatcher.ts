export const DispatchEvent = {
  CONNECTION_OPEN: 'CONNECTION_OPEN',
  CONNECTION_CLOSED: 'CONNECTION_CLOSED',
  STREAM_START: 'STREAM_START',
  STREAM_DELETE: 'STREAM_DELETE',
  STREAM_STOP: 'STREAM_STOP',
  RUNNING_GAMES_CHANGE: 'RUNNING_GAMES_CHANGE',
  MEDIA_ENGINE_VIDEO_STATE_CHANGED: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
  MEDIA_ENGINE_SET_DESKTOP_SOURCE: 'MEDIA_ENGINE_SET_DESKTOP_SOURCE',
  RTC_CONNECTION_STATE: 'RTC_CONNECTION_STATE',
  LOGOUT: 'LOGOUT',
  RTC_CONNECTION_VIDEO: 'RTC_CONNECTION_VIDEO',
  USER_SETTINGS_PROTO_UPDATE: 'USER_SETTINGS_PROTO_UPDATE',
  MEDIA_ENGINE_PERMISSION: 'MEDIA_ENGINE_PERMISSION',
  AUDIO_SET_MODE: 'AUDIO_SET_MODE',
  VOICE_CHANNEL_SELECT: 'VOICE_CHANNEL_SELECT',
  START_SESSION: 'START_SESSION',
  CALL_CREATE: 'CALL_CREATE',
  CALL_UPDATE: 'CALL_UPDATE',
  CALL_DELETE: 'CALL_DELETE',
  CHANNEL_DELETE: 'CHANNEL_DELETE',
  VOICE_STATE_UPDATES: 'VOICE_STATE_UPDATES',
  AUDIO_TOGGLE_SELF_MUTE: 'AUDIO_TOGGLE_SELF_MUTE',
  AUDIO_TOGGLE_SELF_DEAF: 'AUDIO_TOGGLE_SELF_DEAF',
  AUDIO_TOGGLE_LOCAL_MUTE: 'AUDIO_TOGGLE_LOCAL_MUTE',
  AUDIO_SET_LOCAL_VIDEO_DISABLED: 'AUDIO_SET_LOCAL_VIDEO_DISABLED',
  WINDOW_FOCUS: 'WINDOW_FOCUS',
  APP_STATE_UPDATE: 'APP_STATE_UPDATE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  MESSAGE_CREATE: 'MESSAGE_CREATE',
  MESSAGE_UPDATE: 'MESSAGE_UPDATE',
  MESSAGE_DELETE: 'MESSAGE_DELETE',
  SPEAKING: 'SPEAKING',
  OAUTH2_TOKEN_REVOKE: 'OAUTH2_TOKEN_REVOKE',
  GUILD_CREATE: 'GUILD_CREATE',
  CHANNEL_CREATE: 'CHANNEL_CREATE',
  RPC_NOTIFICATION_CREATE: 'RPC_NOTIFICATION_CREATE',
  ACTIVITY_JOIN: 'ACTIVITY_JOIN',
  ACTIVITY_PIP_MODE_UPDATE: 'ACTIVITY_PIP_MODE_UPDATE',
  THERMAL_STATE_CHANGE: 'THERMAL_STATE_CHANGE',
  ACTIVITY_SCREEN_ORIENTATION_UPDATE: 'ACTIVITY_SCREEN_ORIENTATION_UPDATE',
  RELATIONSHIP_ADD: 'RELATIONSHIP_ADD',
  RELATIONSHIP_REMOVE: 'RELATIONSHIP_REMOVE',
  PRESENCE_UPDATES: 'PRESENCE_UPDATES',
  PRESENCES_REPLACE: 'PRESENCES_REPLACE',
  LOBBY_UPDATE: 'LOBBY_UPDATE',
  LOBBY_DELETE: 'LOBBY_DELETE',
  LOBBY_MEMBER_CONNECT: 'LOBBY_MEMBER_CONNECT',
  LOBBY_MEMBER_UPDATE: 'LOBBY_MEMBER_UPDATE',
  LOBBY_MEMBER_DISCONNECT: 'LOBBY_MEMBER_DISCONNECT',
  LOBBY_MESSAGE: 'LOBBY_MESSAGE',
  ENTITLEMENT_CREATE: 'ENTITLEMENT_CREATE',
  ENTITLEMENT_DELETE: 'ENTITLEMENT_DELETE',
  USER_ACHIEVEMENT_UPDATE: 'USER_ACHIEVEMENT_UPDATE',
  UNVERIFIED_GAME_UPDATE: 'UNVERIFIED_GAME_UPDATE',
  GAME_ICON_UPDATE: 'GAME_ICON_UPDATE',
  IDLE: 'IDLE',
  CHECK_LAUNCHABLE_GAME: 'CHECK_LAUNCHABLE_GAME',
  PREMIUM_PAYMENT_MODAL_CLOSE: 'PREMIUM_PAYMENT_MODAL_CLOSE',
  MESSAGE_LENGTH_UPSELL: 'MESSAGE_LENGTH_UPSELL',
  POST_CONNECTION_OPEN: 'POST_CONNECTION_OPEN',
  ACCESSIBILITY_SUPPORT_CHANGED: 'ACCESSIBILITY_SUPPORT_CHANGED',
  ACCESSIBILITY_COLORBLIND_TOGGLE: 'ACCESSIBILITY_COLORBLIND_TOGGLE',
  ACCESSIBILITY_SET_SATURATION: 'ACCESSIBILITY_SET_SATURATION',
  CHANNEL_SELECT: 'CHANNEL_SELECT',
  AGE_GATE_MODAL_OPEN: 'AGE_GATE_MODAL_OPEN',
  AGE_GATE_MODAL_CLOSE: 'AGE_GATE_MODAL_CLOSE',
  AGE_GATE_SUCCESS_MODAL_OPEN: 'AGE_GATE_SUCCESS_MODAL_OPEN',
  AGE_GATE_FAILURE_MODAL_OPEN: 'AGE_GATE_FAILURE_MODAL_OPEN',
  PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL:
    'PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL',
  CHANNEL_CALL_POPOUT_WINDOW_OPEN: 'CHANNEL_CALL_POPOUT_WINDOW_OPEN',
  RTC_DEBUG_POPOUT_WINDOW_OPEN: 'RTC_DEBUG_POPOUT_WINDOW_OPEN',
  CURRENT_USER_UPDATE: 'CURRENT_USER_UPDATE',
  EMBEDDED_ACTIVITY_LAUNCH_FAIL: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
  EMBEDDED_ACTIVITY_OPEN: 'EMBEDDED_ACTIVITY_OPEN',
  EMBEDDED_ACTIVITY_CLOSE: 'EMBEDDED_ACTIVITY_CLOSE',
  EMBEDDED_ACTIVITY_INBOUND_UPDATE: 'EMBEDDED_ACTIVITY_INBOUND_UPDATE',
  EMBEDDED_ACTIVITY_DEFERRED_OPEN: 'EMBEDDED_ACTIVITY_DEFERRED_OPEN',
  RPC_APP_DISCONNECTED: 'RPC_APP_DISCONNECTED',
  MEDIA_SESSION_JOINED: 'MEDIA_SESSION_JOINED',
  STREAM_WATCH: 'STREAM_WATCH',
  STREAM_CREATE: 'STREAM_CREATE',
  STREAM_UPDATE: 'STREAM_UPDATE',
  STREAM_CLOSE: 'STREAM_CLOSE',
  CHANNEL_UPDATES: 'CHANNEL_UPDATES',
  ACTIVITY_INVITE_MODAL_OPEN: 'ACTIVITY_INVITE_MODAL_OPEN',
  ACTIVITY_INVITE_MODAL_CLOSE: 'ACTIVITY_INVITE_MODAL_CLOSE',
  SPEAK_TEXT: 'SPEAK_TEXT',
  SPEAK_MESSAGE: 'SPEAK_MESSAGE',
  STOP_SPEAKING: 'STOP_SPEAKING',
  I18N_LOAD_SUCCESS: 'I18N_LOAD_SUCCESS',
  PURCHASE_CONFIRMATION_MODAL_OPEN: 'PURCHASE_CONFIRMATION_MODAL_OPEN',
  PURCHASE_CONFIRMATION_MODAL_CLOSE: 'PURCHASE_CONFIRMATION_MODAL_CLOSE',
  OVERLAY_SET_INPUT_LOCKED: 'OVERLAY_SET_INPUT_LOCKED',
  PREMIUM_REQUIRED_MODAL_OPEN: 'PREMIUM_REQUIRED_MODAL_OPEN',
  PREMIUM_REQUIRED_MODAL_CLOSE: 'PREMIUM_REQUIRED_MODAL_CLOSE',
  USER_REQUIRED_ACTION_UPDATE: 'USER_REQUIRED_ACTION_UPDATE',
  USER_PROFILE_MODAL_OPEN: 'USER_PROFILE_MODAL_OPEN',
  USER_PROFILE_MODAL_CLOSE: 'USER_PROFILE_MODAL_CLOSE',
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE: 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE',
  USER_SETTINGS_PROTO_LOAD_IF_NECESSARY:
    'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY',
  INVITE_MODAL_OPEN: 'INVITE_MODAL_OPEN',
  INVITE_MODAL_CLOSE: 'INVITE_MODAL_CLOSE',
  SHARED_CANVAS_DRAW_LINE_POINT: 'SHARED_CANVAS_DRAW_LINE_POINT',
  VOICE_CHANNEL_EFFECT_SEND: 'VOICE_CHANNEL_EFFECT_SEND',
  TYPING_STOP: 'TYPING_STOP',
  TYPING_STOP_LOCAL: 'TYPING_STOP_LOCAL',
  POGGERMODE_SETTINGS_UPDATE: 'POGGERMODE_SETTINGS_UPDATE',
  POGGERMODE_TEMPORARILY_DISABLED: 'POGGERMODE_TEMPORARILY_DISABLED',
  CONNECTIONS_GRID_MODAL_SHOW: 'CONNECTIONS_GRID_MODAL_SHOW',
  CONNECTIONS_GRID_MODAL_HIDE: 'CONNECTIONS_GRID_MODAL_HIDE',
  SHOW_KEYBOARD_SHORTCUTS: 'SHOW_KEYBOARD_SHORTCUTS',
  HIDE_KEYBOARD_SHORTCUTS: 'HIDE_KEYBOARD_SHORTCUTS',
  QUICKSWITCHER_SHOW: 'QUICKSWITCHER_SHOW',
  QUICKSWITCHER_HIDE: 'QUICKSWITCHER_HIDE',
  DELETED_ENTITY_IDS: 'DELETED_ENTITY_IDS',
  OVERLAY_INITIALIZE: 'OVERLAY_INITIALIZE',
  THREAD_CREATE: 'THREAD_CREATE',
  THREAD_LIST_SYNC: 'THREAD_LIST_SYNC',
  CHANNEL_PRELOAD: 'CHANNEL_PRELOAD',
  THREAD_CREATE_LOCAL: 'THREAD_CREATE_LOCAL',
  MESSAGE_END_EDIT: 'MESSAGE_END_EDIT',
  LOAD_MESSAGES_SUCCESS: 'LOAD_MESSAGES_SUCCESS',
  UPLOAD_FAIL: 'UPLOAD_FAIL',
  THREAD_DELETE: 'THREAD_DELETE',
  CONNECTION_OPEN_SUPPLEMENTAL: 'CONNECTION_OPEN_SUPPLEMENTAL',
  GUILD_MEMBERS_CHUNK: 'GUILD_MEMBERS_CHUNK',
  GUILD_MEMBER_ADD: 'GUILD_MEMBER_ADD',
  GUILD_MEMBER_UPDATE: 'GUILD_MEMBER_UPDATE',
  RELATIONSHIP_UPDATE: 'RELATIONSHIP_UPDATE',
  CHANNEL_RECIPIENT_ADD: 'CHANNEL_RECIPIENT_ADD',
  PASSIVE_UPDATE_V1: 'PASSIVE_UPDATE_V1',
  WAIT_FOR_REMOTE_SESSION: 'WAIT_FOR_REMOTE_SESSION',
  SESSIONS_REPLACE: 'SESSIONS_REPLACE',
  CONSOLE_COMMAND_UPDATE: 'CONSOLE_COMMAND_UPDATE',
  REMOTE_SESSION_DISCONNECT: 'REMOTE_SESSION_DISCONNECT',
  STAGE_MUSIC_MUTE: 'STAGE_MUSIC_MUTE',
  AUDIO_SET_OUTPUT_VOLUME: 'AUDIO_SET_OUTPUT_VOLUME',
  GUILD_DELETE: 'GUILD_DELETE',
  AUDIO_SET_LOCAL_VOLUME: 'AUDIO_SET_LOCAL_VOLUME',
  CONNECTION_RESUMED: 'CONNECTION_RESUMED',
  GUILD_UNAVAILABLE: 'GUILD_UNAVAILABLE',
  INVITE_RESOLVE_SUCCESS: 'INVITE_RESOLVE_SUCCESS',
  LOAD_MESSAGES_AROUND_SUCCESS: 'LOAD_MESSAGES_AROUND_SUCCESS',
  LOAD_RECENT_MENTIONS_SUCCESS: 'LOAD_RECENT_MENTIONS_SUCCESS',
  LOAD_PINNED_MESSAGES_SUCCESS: 'LOAD_PINNED_MESSAGES_SUCCESS',
  SEARCH_FINISH: 'SEARCH_FINISH',
  GUILD_FEED_FETCH_SUCCESS: 'GUILD_FEED_FETCH_SUCCESS',
  CATEGORY_COLLAPSE: 'CATEGORY_COLLAPSE',
  CATEGORY_EXPAND: 'CATEGORY_EXPAND',
  CATEGORY_COLLAPSE_ALL: 'CATEGORY_COLLAPSE_ALL',
  CATEGORY_EXPAND_ALL: 'CATEGORY_EXPAND_ALL',
  USER_GUILD_SETTINGS_FULL_UPDATE: 'USER_GUILD_SETTINGS_FULL_UPDATE',
  VOICE_CHANNEL_SHOW_FEEDBACK: 'VOICE_CHANNEL_SHOW_FEEDBACK',
  VIDEO_BACKGROUND_SHOW_FEEDBACK: 'VIDEO_BACKGROUND_SHOW_FEEDBACK',
  IN_APP_REPORTS_SHOW_FEEDBACK: 'IN_APP_REPORTS_SHOW_FEEDBACK',
} as const;

export type DispatchEvent = typeof DispatchEvent;

export interface StreamStop {
  streamKey: string;
  appContext?: string;
}

export type DispatchEventParameters = {
  [DispatchEvent.STREAM_STOP]: StreamStop;
  [DispatchEvent.CONNECTION_OPEN]: { [key: string]: any };
  [DispatchEvent.CONNECTION_CLOSED]: { [key: string]: any };
  [DispatchEvent.STREAM_START]: { [key: string]: any };
  [DispatchEvent.STREAM_DELETE]: { [key: string]: any };
  [DispatchEvent.RUNNING_GAMES_CHANGE]: { [key: string]: any };
  [DispatchEvent.MEDIA_ENGINE_VIDEO_STATE_CHANGED]: { [key: string]: any };
  [DispatchEvent.MEDIA_ENGINE_SET_DESKTOP_SOURCE]: { [key: string]: any };
  [DispatchEvent.RTC_CONNECTION_STATE]: { [key: string]: any };
  [DispatchEvent.LOGOUT]: { [key: string]: any };
  [DispatchEvent.RTC_CONNECTION_VIDEO]: { [key: string]: any };
  [DispatchEvent.USER_SETTINGS_PROTO_UPDATE]: { [key: string]: any };
  [DispatchEvent.MEDIA_ENGINE_PERMISSION]: { [key: string]: any };
  [DispatchEvent.AUDIO_SET_MODE]: { [key: string]: any };
  [DispatchEvent.VOICE_CHANNEL_SELECT]: { [key: string]: any };
  [DispatchEvent.START_SESSION]: { [key: string]: any };
  [DispatchEvent.CALL_CREATE]: { [key: string]: any };
  [DispatchEvent.CALL_UPDATE]: { [key: string]: any };
  [DispatchEvent.CALL_DELETE]: { [key: string]: any };
  [DispatchEvent.CHANNEL_DELETE]: { [key: string]: any };
  [DispatchEvent.VOICE_STATE_UPDATES]: { [key: string]: any };
  [DispatchEvent.AUDIO_TOGGLE_SELF_MUTE]: { [key: string]: any };
  [DispatchEvent.AUDIO_TOGGLE_SELF_DEAF]: { [key: string]: any };
  [DispatchEvent.AUDIO_TOGGLE_LOCAL_MUTE]: { [key: string]: any };
  [DispatchEvent.AUDIO_SET_LOCAL_VIDEO_DISABLED]: { [key: string]: any };
  [DispatchEvent.WINDOW_FOCUS]: { [key: string]: any };
  [DispatchEvent.APP_STATE_UPDATE]: { [key: string]: any };
  [DispatchEvent.LOGIN_SUCCESS]: { [key: string]: any };
  [DispatchEvent.MESSAGE_CREATE]: { [key: string]: any };
  [DispatchEvent.MESSAGE_UPDATE]: { [key: string]: any };
  [DispatchEvent.MESSAGE_DELETE]: { [key: string]: any };
  [DispatchEvent.SPEAKING]: { [key: string]: any };
  [DispatchEvent.OAUTH2_TOKEN_REVOKE]: { [key: string]: any };
  [DispatchEvent.GUILD_CREATE]: { [key: string]: any };
  [DispatchEvent.CHANNEL_CREATE]: { [key: string]: any };
  [DispatchEvent.RPC_NOTIFICATION_CREATE]: { [key: string]: any };
  [DispatchEvent.ACTIVITY_JOIN]: { [key: string]: any };
  [DispatchEvent.ACTIVITY_PIP_MODE_UPDATE]: { [key: string]: any };
  [DispatchEvent.THERMAL_STATE_CHANGE]: { [key: string]: any };
  [DispatchEvent.ACTIVITY_SCREEN_ORIENTATION_UPDATE]: { [key: string]: any };
  [DispatchEvent.RELATIONSHIP_ADD]: { [key: string]: any };
  [DispatchEvent.RELATIONSHIP_REMOVE]: { [key: string]: any };
  [DispatchEvent.PRESENCE_UPDATES]: { [key: string]: any };
  [DispatchEvent.PRESENCES_REPLACE]: { [key: string]: any };
  [DispatchEvent.LOBBY_UPDATE]: { [key: string]: any };
  [DispatchEvent.LOBBY_DELETE]: { [key: string]: any };
  [DispatchEvent.LOBBY_MEMBER_CONNECT]: { [key: string]: any };
  [DispatchEvent.LOBBY_MEMBER_UPDATE]: { [key: string]: any };
  [DispatchEvent.LOBBY_MEMBER_DISCONNECT]: { [key: string]: any };
  [DispatchEvent.LOBBY_MESSAGE]: { [key: string]: any };
  [DispatchEvent.ENTITLEMENT_CREATE]: { [key: string]: any };
  [DispatchEvent.ENTITLEMENT_DELETE]: { [key: string]: any };
  [DispatchEvent.USER_ACHIEVEMENT_UPDATE]: { [key: string]: any };
  [DispatchEvent.UNVERIFIED_GAME_UPDATE]: { [key: string]: any };
  [DispatchEvent.GAME_ICON_UPDATE]: { [key: string]: any };
  [DispatchEvent.IDLE]: { [key: string]: any };
  [DispatchEvent.CHECK_LAUNCHABLE_GAME]: { [key: string]: any };
  [DispatchEvent.PREMIUM_PAYMENT_MODAL_CLOSE]: { [key: string]: any };
  [DispatchEvent.MESSAGE_LENGTH_UPSELL]: { [key: string]: any };
  [DispatchEvent.POST_CONNECTION_OPEN]: { [key: string]: any };
  [DispatchEvent.ACCESSIBILITY_SUPPORT_CHANGED]: { [key: string]: any };
  [DispatchEvent.ACCESSIBILITY_COLORBLIND_TOGGLE]: { [key: string]: any };
  [DispatchEvent.ACCESSIBILITY_SET_SATURATION]: { [key: string]: any };
  [DispatchEvent.CHANNEL_SELECT]: { [key: string]: any };
  [DispatchEvent.AGE_GATE_MODAL_OPEN]: { [key: string]: any };
  [DispatchEvent.AGE_GATE_MODAL_CLOSE]: { [key: string]: any };
  [DispatchEvent.AGE_GATE_SUCCESS_MODAL_OPEN]: { [key: string]: any };
  [DispatchEvent.AGE_GATE_FAILURE_MODAL_OPEN]: { [key: string]: any };
  [DispatchEvent.PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL]: {
    [key: string]: any;
  };
  [DispatchEvent.CHANNEL_CALL_POPOUT_WINDOW_OPEN]: { [key: string]: any };
  [DispatchEvent.RTC_DEBUG_POPOUT_WINDOW_OPEN]: { [key: string]: any };
  [DispatchEvent.CURRENT_USER_UPDATE]: { [key: string]: any };
  [DispatchEvent.EMBEDDED_ACTIVITY_LAUNCH_FAIL]: { [key: string]: any };
  [DispatchEvent.EMBEDDED_ACTIVITY_OPEN]: { [key: string]: any };
  [DispatchEvent.EMBEDDED_ACTIVITY_CLOSE]: { [key: string]: any };
  [DispatchEvent.EMBEDDED_ACTIVITY_INBOUND_UPDATE]: { [key: string]: any };
  [DispatchEvent.EMBEDDED_ACTIVITY_DEFERRED_OPEN]: { [key: string]: any };
  [DispatchEvent.RPC_APP_DISCONNECTED]: { [key: string]: any };
  [DispatchEvent.MEDIA_SESSION_JOINED]: { [key: string]: any };
  [DispatchEvent.STREAM_WATCH]: { [key: string]: any };
  [DispatchEvent.STREAM_CREATE]: { [key: string]: any };
  [DispatchEvent.STREAM_UPDATE]: { [key: string]: any };
  [DispatchEvent.STREAM_CLOSE]: { [key: string]: any };
  [DispatchEvent.CHANNEL_UPDATES]: { [key: string]: any };
  [DispatchEvent.ACTIVITY_INVITE_MODAL_OPEN]: { [key: string]: any };
  [DispatchEvent.ACTIVITY_INVITE_MODAL_CLOSE]: { [key: string]: any };
  [DispatchEvent.SPEAK_TEXT]: { [key: string]: any };
  [DispatchEvent.SPEAK_MESSAGE]: { [key: string]: any };
  [DispatchEvent.STOP_SPEAKING]: { [key: string]: any };
  [DispatchEvent.I18N_LOAD_SUCCESS]: { [key: string]: any };
  [DispatchEvent.PURCHASE_CONFIRMATION_MODAL_OPEN]: { [key: string]: any };
  [DispatchEvent.PURCHASE_CONFIRMATION_MODAL_CLOSE]: { [key: string]: any };
  [DispatchEvent.OVERLAY_SET_INPUT_LOCKED]: { [key: string]: any };
  [DispatchEvent.PREMIUM_REQUIRED_MODAL_OPEN]: { [key: string]: any };
  [DispatchEvent.PREMIUM_REQUIRED_MODAL_CLOSE]: { [key: string]: any };
  [DispatchEvent.USER_REQUIRED_ACTION_UPDATE]: { [key: string]: any };
  [DispatchEvent.USER_PROFILE_MODAL_OPEN]: { [key: string]: any };
  [DispatchEvent.USER_PROFILE_MODAL_CLOSE]: { [key: string]: any };
  [DispatchEvent.USER_SETTINGS_PROTO_ENQUEUE_UPDATE]: { [key: string]: any };
  [DispatchEvent.USER_SETTINGS_PROTO_LOAD_IF_NECESSARY]: { [key: string]: any };
  [DispatchEvent.INVITE_MODAL_OPEN]: { [key: string]: any };
  [DispatchEvent.INVITE_MODAL_CLOSE]: { [key: string]: any };
  [DispatchEvent.SHARED_CANVAS_DRAW_LINE_POINT]: { [key: string]: any };
  [DispatchEvent.VOICE_CHANNEL_EFFECT_SEND]: { [key: string]: any };
  [DispatchEvent.TYPING_STOP]: { [key: string]: any };
  [DispatchEvent.TYPING_STOP_LOCAL]: { [key: string]: any };
  [DispatchEvent.POGGERMODE_SETTINGS_UPDATE]: { [key: string]: any };
  [DispatchEvent.POGGERMODE_TEMPORARILY_DISABLED]: { [key: string]: any };
  [DispatchEvent.CONNECTIONS_GRID_MODAL_SHOW]: { [key: string]: any };
  [DispatchEvent.CONNECTIONS_GRID_MODAL_HIDE]: { [key: string]: any };
  [DispatchEvent.SHOW_KEYBOARD_SHORTCUTS]: { [key: string]: any };
  [DispatchEvent.HIDE_KEYBOARD_SHORTCUTS]: { [key: string]: any };
  [DispatchEvent.QUICKSWITCHER_SHOW]: { [key: string]: any };
  [DispatchEvent.QUICKSWITCHER_HIDE]: { [key: string]: any };
  [DispatchEvent.DELETED_ENTITY_IDS]: { [key: string]: any };
  [DispatchEvent.OVERLAY_INITIALIZE]: { [key: string]: any };
  [DispatchEvent.THREAD_CREATE]: { [key: string]: any };
  [DispatchEvent.THREAD_LIST_SYNC]: { [key: string]: any };
  [DispatchEvent.CHANNEL_PRELOAD]: { [key: string]: any };
  [DispatchEvent.THREAD_CREATE_LOCAL]: { [key: string]: any };
  [DispatchEvent.MESSAGE_END_EDIT]: { [key: string]: any };
  [DispatchEvent.LOAD_MESSAGES_SUCCESS]: { [key: string]: any };
  [DispatchEvent.UPLOAD_FAIL]: { [key: string]: any };
  [DispatchEvent.THREAD_DELETE]: { [key: string]: any };
  [DispatchEvent.CONNECTION_OPEN_SUPPLEMENTAL]: { [key: string]: any };
  [DispatchEvent.GUILD_MEMBERS_CHUNK]: { [key: string]: any };
  [DispatchEvent.GUILD_MEMBER_ADD]: { [key: string]: any };
  [DispatchEvent.GUILD_MEMBER_UPDATE]: { [key: string]: any };
  [DispatchEvent.RELATIONSHIP_UPDATE]: { [key: string]: any };
  [DispatchEvent.CHANNEL_RECIPIENT_ADD]: { [key: string]: any };
  [DispatchEvent.PASSIVE_UPDATE_V1]: { [key: string]: any };
  [DispatchEvent.WAIT_FOR_REMOTE_SESSION]: { [key: string]: any };
  [DispatchEvent.SESSIONS_REPLACE]: { [key: string]: any };
  [DispatchEvent.CONSOLE_COMMAND_UPDATE]: { [key: string]: any };
  [DispatchEvent.REMOTE_SESSION_DISCONNECT]: { [key: string]: any };
  [DispatchEvent.STAGE_MUSIC_MUTE]: { [key: string]: any };
  [DispatchEvent.AUDIO_SET_OUTPUT_VOLUME]: { [key: string]: any };
  [DispatchEvent.GUILD_DELETE]: { [key: string]: any };
  [DispatchEvent.AUDIO_SET_LOCAL_VOLUME]: { [key: string]: any };
  [DispatchEvent.CONNECTION_RESUMED]: { [key: string]: any };
  [DispatchEvent.GUILD_UNAVAILABLE]: { [key: string]: any };
  [DispatchEvent.INVITE_RESOLVE_SUCCESS]: { [key: string]: any };
  [DispatchEvent.LOAD_MESSAGES_AROUND_SUCCESS]: { [key: string]: any };
  [DispatchEvent.LOAD_RECENT_MENTIONS_SUCCESS]: { [key: string]: any };
  [DispatchEvent.LOAD_PINNED_MESSAGES_SUCCESS]: { [key: string]: any };
  [DispatchEvent.SEARCH_FINISH]: { [key: string]: any };
  [DispatchEvent.GUILD_FEED_FETCH_SUCCESS]: { [key: string]: any };
  [DispatchEvent.CATEGORY_COLLAPSE]: { [key: string]: any };
  [DispatchEvent.CATEGORY_EXPAND]: { [key: string]: any };
  [DispatchEvent.CATEGORY_COLLAPSE_ALL]: { [key: string]: any };
  [DispatchEvent.CATEGORY_EXPAND_ALL]: { [key: string]: any };
  [DispatchEvent.USER_GUILD_SETTINGS_FULL_UPDATE]: { [key: string]: any };
  [DispatchEvent.VOICE_CHANNEL_SHOW_FEEDBACK]: { [key: string]: any };
  [DispatchEvent.VIDEO_BACKGROUND_SHOW_FEEDBACK]: { [key: string]: any };
  [DispatchEvent.IN_APP_REPORTS_SHOW_FEEDBACK]: { [key: string]: any };
};

export type Dispatcher = Dispatcher_ & {
  __proto__: Dispatcher_;
};

export interface Dispatcher_ {
  isDispatching: (...args: any[]) => any;
  dispatch: <T extends DispatchEvent[keyof DispatchEvent]>(
    options: DispatchOptions<T>
  ) => any;
  flushWaitQueue: (...args: any[]) => any;
  _dispatchWithDevtools: (...args: any[]) => any;
  _dispatchWithLogging: (...args: any[]) => any;
  _dispatch: (...args: any[]) => any;
  addInterceptor: (...args: any[]) => any;
  wait: (...args: any[]) => any;
  subscribe: (...args: any[]) => any;
  unsubscribe: (...args: any[]) => any;
  register: (...args: any[]) => any;
  createToken: (...args: any[]) => any;
  addDependencies: (...args: any[]) => any;
}

export type DispatchOptions<T extends DispatchEvent[keyof DispatchEvent]> = {
  type: T;
} & DispatchEventParameters[T];
