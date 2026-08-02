import { env } from '@pondoknusa/config';

const environment = env('APP_ENV', env('NODE_ENV', 'development'));
const isProduction = environment === 'production';

export default {
  path: 'resources/views',
  extension: '.tyr',
  compiledPath: 'storage/framework/views',
  locale: 'en',
  localesPath: 'lang',
  env: environment,
  // Demo/deploy slug can boot without a pre-warmed view cache.
  compiled: isProduction,
  requireCompiledCache: false,
  preloadCompiled: false,
} as const;
