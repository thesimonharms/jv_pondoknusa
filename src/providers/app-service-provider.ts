import { ServiceProvider, setRouteApplication } from '@pondoknusa/core';
import { ConfigRepository } from '@pondoknusa/config';
import { Response } from '@pondoknusa/http';
import { RontalServiceProvider } from 'rontal';
import { BlogController } from '../controllers/blog-controller.ts';
import { GameController } from '../controllers/game-controller.ts';
import { HomeController } from '../controllers/home-controller.ts';
import { LearnController } from '../controllers/learn-controller.ts';
import { seedDemoContent } from '../data/seed-content.ts';

export class AppServiceProvider extends ServiceProvider {
  override register() {
    // CLI commands like `pondoknusa migrate` only boot AppServiceProvider and
    // never call setRouteApplication — rontal's boot() needs the Route facade.
    setRouteApplication(this.app);
    this.app.register(RontalServiceProvider);

    // Rontal write endpoints reference auth:api. This site is intentionally
    // public/stateless, so reject those routes without installing full auth.
    this.app.middleware('auth:api', async () =>
      Response.json({ message: 'API auth is not enabled on this demo site.' }, { status: 401 }),
    );

    this.app.bind(HomeController, () => new HomeController());
    this.app.bind(LearnController, () => new LearnController());
    this.app.bind(GameController, () => new GameController());
    this.app.bind(BlogController, () => new BlogController());
    this.app.instance('app.name', 'Jawa Vocab');
  }

  override async boot() {
    const config = this.app.make<ConfigRepository>('config');
    if (config.get<boolean>('app.debug')) {
      console.log(`Booted ${config.get<string>('app.name')}`);
    }

    try {
      await seedDemoContent();
    } catch (error) {
      console.warn('[seed] skipped:', error instanceof Error ? error.message : error);
    }
  }
}
