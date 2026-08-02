import { setRouteApplication, Application, ConfigServiceProvider, DatabaseServiceProvider } from '@pondoknusa/core';
import { DatabaseManager, Migrator } from '@pondoknusa/database';
import { RontalServiceProvider } from 'rontal';
import { AppServiceProvider } from '../src/providers/app-service-provider.ts';

const app = new Application(process.cwd());
setRouteApplication(app);
app.register(ConfigServiceProvider);
app.register(DatabaseServiceProvider);
app.register(RontalServiceProvider);
app.register(AppServiceProvider);
await app.boot();

const manager = app.make(DatabaseManager);
const migrator = new Migrator(manager.connection(), app.migrationPaths());
const ran = await migrator.run();
console.log(ran.length ? `Migrated: ${ran.join(', ')}` : 'Nothing to migrate.');
