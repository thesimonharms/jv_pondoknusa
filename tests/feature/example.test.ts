import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it } from 'vitest';
import {
  Application,
  BroadcastServiceProvider,
  CacheServiceProvider,
  ConfigServiceProvider,
  DatabaseServiceProvider,
  EventServiceProvider,
  HealthServiceProvider,
  LocaleServiceProvider,
  LogServiceProvider,
  MailServiceProvider,
  NotificationServiceProvider,
  QueueServiceProvider,
  StorageServiceProvider,
  ViewServiceProvider,
  setBroadcastApplication,
  setCacheApplication,
  setEventApplication,
  setLangApplication,
  setLogApplication,
  setMailApplication,
  setNotificationApplication,
  setQueueApplication,
  setRouteApplication,
  setStorageApplication,
  setUrlApplication,
  setViewApplication,
} from '@pondoknusa/core';
import { TestCase, withPondoknusaTest } from '@pondoknusa/testing';
import { AppServiceProvider } from '../../src/providers/app-service-provider.ts';
import { registerWebRoutes } from '../../src/routes/web.ts';

const moduleDir = typeof import.meta.dirname === 'string'
  ? import.meta.dirname
  : dirname(fileURLToPath(import.meta.url));
const appRoot = dirname(dirname(moduleDir));

class ExampleTest extends TestCase {
  protected createApplication() {
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
    setMailApplication(app);
    setNotificationApplication(app);
    return app;
  }

  protected override providers() {
    return [
      ConfigServiceProvider,
      DatabaseServiceProvider,
      CacheServiceProvider,
      StorageServiceProvider,
      LogServiceProvider,
      MailServiceProvider,
      NotificationServiceProvider,
      QueueServiceProvider,
      EventServiceProvider,
      BroadcastServiceProvider,
      ViewServiceProvider,
      LocaleServiceProvider,
      HealthServiceProvider,
      AppServiceProvider,
    ];
  }

  protected override async configureApplication(app: Application): Promise<void> {
    process.env.DB_DATABASE = ':memory:';
    registerWebRoutes();
    await super.configureApplication(app);
  }
}

const t = withPondoknusaTest(ExampleTest);

describe('feature / example', () => {
  it('responds on the home route', async () => {
    const response = await t.http.get('http://localhost/');
    await response.assertOk();
  });

  it('responds on the liveness probe', async () => {
    const response = await t.http.get('http://localhost/healthz');
    await response.assertOk();
  });
  it('serves the new game routes', async () => {
    const scramble = await t.http.get('http://localhost/games/scramble');
    await scramble.assertOk();

    const sentences = await t.http.get('http://localhost/games/sentences');
    await sentences.assertOk();
  });
});
