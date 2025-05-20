import { defineConfig } from 'komekko'

export default defineConfig([
  {
    rollupPluginsOptions: {
      esbuildOptions: {
        minify: true,
        pure: ['console.log'],
      },
      obfuscatorOptions: {
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1,
        numbersToExpressions: true,
        splitStrings: true,
        splitStringsChunkLength: 3,
        stringArray: true,
        stringArrayCallsTransform: true,
        stringArrayCallsTransformThreshold: 1,
        stringArrayEncoding: ['base64'],
        stringArrayWrappersCount: 5,
        stringArrayWrappersParametersMaxCount: 5,
        stringArrayWrappersType: 'function',
        stringArrayThreshold: 1,
        transformObjectKeys: true,
      },
    },
  },
])
