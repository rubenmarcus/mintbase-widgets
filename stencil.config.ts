import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';


export const config: Config = {
  namespace: 'mintbase-widgets',
  bundles: [
    { components: ['my-nft-collection'] },
  ],
  outputTargets: [
    react({
      componentCorePackage: 'nft-collection',
      proxiesFile: '../mintbase-widgets/src/components/nft-collection/index.ts',
      includeDefineCustomElements: true,
    }),
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
