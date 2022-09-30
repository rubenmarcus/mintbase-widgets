import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';


export const config: Config = {
  namespace: 'mintbase-widgets',
  outputTargets: [
    react({
      componentCorePackage: 'mintbase-widgets',
      proxiesFile: '../mintbase-widgets-react/src/components/index.ts',
      includeDefineCustomElements: true,
      includePolyfills: true
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
