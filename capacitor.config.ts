import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aql.pilotsampling',
  appName: 'Pilot Sampling',
  webDir: 'dist',
  android: { allowMixedContent: false },
};

export default config;
