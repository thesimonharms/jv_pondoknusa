import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  Application,
  BroadcastServiceProvider,
  CacheServiceProvider,
  ConfigRepository,
  ConfigServiceProvider,
  LocaleServiceProvider,
  LogServiceProvider,
  DatabaseServiceProvider,
  EventServiceProvider,
  HealthServiceProvider,
  HttpKernel,
  QueueServiceProvider,
  StorageServiceProvider,
  prepareHttpServer,
  setBroadcastApplication,
  setCacheApplication,
  setEventApplication,
  setLangApplication,
  setUrlApplication,
  setLogApplication,
  setQueueApplication,
  setRouteApplication,
  setStorageApplication,
  setViewApplication,
  ViewServiceProvider,
  serve,
} from '@pondoknusa/core';
import { AppServiceProvider } from './providers/app-service-provider.ts';
import { registerRoutes } from './routes/index.ts';

const moduleDir = typeof import.meta.dirname === 'string'
  ? import.meta.dirname
  : dirname(fileURLToPath(import.meta.url));
const appRoot = join(moduleDir, '..');

const app = new Application(appRoot);
setRouteApplication(app);
setLangApplication(app);
setUrlApplication(app);
setViewApplication(app);
setQueueApplication(app);
setEventApplication(app);
setBroadcastApplication(app);
setCacheApplication(app);
setStorageApplication(app);
setLogApplication(app);

app.register(ConfigServiceProvider);
app.register(DatabaseServiceProvider);
app.register(CacheServiceProvider);
app.register(StorageServiceProvider);
app.register(LogServiceProvider);
app.register(QueueServiceProvider);
app.register(EventServiceProvider);
app.register(BroadcastServiceProvider);
app.register(ViewServiceProvider);
app.register(LocaleServiceProvider);
app.register(HealthServiceProvider);
// Rontal is registered inside AppServiceProvider so `pondoknusa migrate` picks it up too.
app.register(AppServiceProvider);

await app.boot();

registerRoutes();

await prepareHttpServer(app, app.make(ConfigRepository));

const kernel = new HttpKernel(app);
await serve(kernel);
