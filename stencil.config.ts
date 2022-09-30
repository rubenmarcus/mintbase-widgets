import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'mintbase-widgets',
  bundles: [
    { components: ['my-nft-collection'] },
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
