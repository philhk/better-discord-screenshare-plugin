export interface Utils {
  flushDNSCache: (...args: any[]) => any;
  flushCookies: (...args: any[]) => any;
  setApplicationBackgroundColor: (...args: any[]) => any;
  setZoomFactor: (...args: any[]) => any;
  focus: (...args: any[]) => any;
  submitLiveCrashReport: (...args: any[]) => any;
  getPidFromDesktopSource: (source: string) => number | null;
  getAudioPid: (...args: any[]) => any;
  generateSessionFromPid: (...args: any[]) => any;
}
