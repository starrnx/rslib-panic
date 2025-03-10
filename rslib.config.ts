import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { pluginLess } from '@rsbuild/plugin-less'

export default defineConfig({
  source: {
    entry: {
      index: ['./src/**'],
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
  },
  // tools: {
  //   rspack: {
  //     cache: true,
  //     infrastructureLogging: {
  //       level: 'verbose',
  //       debug: /rspack/,
  //     }
  //   },
  // },
  // tools: {
  //   rspack: {
  //     cache: true,
  //     infrastructureLogging: {
  //       level: 'verbose',
  //       debug: /rspack/,
  //     }
  //   },
  // },
  performance: {
    buildCache: true,
  },
  plugins: [pluginReact(),pluginLess({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: false,
      },
    },
  }),],
});
