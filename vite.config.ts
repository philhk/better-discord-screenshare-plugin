import { defineConfig } from 'vite';
import banner from 'vite-plugin-banner';
import { resolve, join } from 'path';
import { betterDiscordConfig } from './betterdiscord.config';
import license from 'rollup-plugin-license';

// const OUT_DIR = resolve(`${process.env.APPDATA}/BetterDiscord/plugins`); // Use if you want to output in plugins folder directly.
const OUT_DIR = 'dist';
const FILE_NAME = `${betterDiscordConfig.name}.plugin.js`;

export default defineConfig(() => ({
  plugins: [
    banner({
      content: `/**\n${Object.entries(betterDiscordConfig)
        .map(([key, value]) => `* @${key} ${value}`)
        .join('\n')}\n */`,
      outDir: OUT_DIR,
    }),
    license({
      sourcemap: true,
      cwd: process.cwd(), // The default

      banner: {
        commentStyle: 'ignored', // The default

        content: {
          file: join(__dirname, 'LICENSE'),
        },
      },

      thirdParty: {
        includePrivate: true,
        output: {
          file: join(__dirname, 'dist', 'dependencies.txt'),
        },
      },
    }),
  ],
  build: {
    outDir: OUT_DIR,
    minify: 'esbuild',
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: betterDiscordConfig.name,
      fileName: () => FILE_NAME,
      formats: ['iife'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'BdApi.React',
        },
      },
    },
  },
}));
