declare global {
  interface BetterDiscordConfigExport {
    /** The name of the addon. Typcially does not contain spaces, but is allowed. */
    name: string;
    /** The name of you the developer. */
    author: string;
    /** A basic description of the what the addon does. */
    description: string;
    /** Version representing the current update level. Semantic versioning recommended. */
    version: string;
    /** A Discord invite code, useful for directing users to a support server. */
    invite?: string;
    /** Discord snowflake ID of the developer. This allows users to get in touch. */
    authorId?: string;
    /** Link to use for the author's name on the addon pages. */
    authorLink?: string;
    /** Link to donate to the developer. */
    donate?: string;
    /** Link to the patreon of the developer. */
    patreon?: string;
    /** Developer's (or addon's) website link. */
    website?: string;
    /** Link to the source on GitHub of the addon. */
    source?: string;
  }
}

export {};
