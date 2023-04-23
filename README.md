# Important

This version of the plugin is now discontinued because I'm now focusing on bringing it to Vencord. It's already done but of course in a unstable state like many plugins. I do my best to fix any issues and if you want to help find some or just want to use the plugin you can [build](https://github.com/philhk/Vencord/blob/main/docs/1_INSTALLING.md) my Vencord [fork](https://github.com/philhk/Vencord) yourself (Just note that the installation guide is from the original repo, so you'll need to replace `git clone https://github.com/Vendicated/Vencord` with `git clone https://github.com/philhk/Vencord`). The best place to submit issues at this time is in my [pull request](https://github.com/Vendicated/Vencord/pull/730). If you still need help, please ask on the official [Vencord Discord server](https://discord.gg/vencord) (Please note that the Discord is not owned by me and has nothing to do with this repo, so only ask for Vencord specific things).

# Better Discord Screenshare Plugin

With this plugin you can customize your resolution, framerate, bitrate and more for your screenshare on discord! This plugin requires an [installation](https://github.com/BetterDiscord/BetterDiscord#manual-installation 'installation') of the [BetterDiscord](https://github.com/BetterDiscord/BetterDiscord 'BetterDiscord') client.

<div align='center'>
  <img src="./preview.png" height='450'>
</div>

## Plugin

To get the plugin, you can either build it yourself by cloning this repository or download the latest version from the Releases tab.

## Features

- **Capture** - Set a custom capture resolution and framerate.
- **Encode** - Set a custom encode resolution and framerate.
- **Bitrate** - Set a custom min, target and max bitrate.
- **Keyframe Interval** - Set a custom keyframe interval.
- **Audio Source** - Set a custom audio source even when sharing a screen.
- **Codec** - Set a custom video and audio codec [OPUS, H264, VP8, VP9, AV1].

## Default Config

```
{
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
}
```

## Known Issues

When sharing a window directly it can sometimes happen that no changes are applied, the reason for this is unknown at this time, but to avoid this you can simply share your screen and set the audio source if needed.

## Scripts

- `build` Build the plugin.
- `watch` Build the plugin when a change was made.

## Credits

- [Zerthox](https://github.com/Zerthox) for BetterDiscord's API [typings](https://github.com/Zerthox/betterdiscord-types), [Dium](https://github.com/Zerthox/BetterDiscord-Plugins/tree/master/packages/dium) and his huge amount of help.
