import { registerChannelRoutes } from './channels.ts';
import { registerWebRoutes } from './web.ts';

export function registerRoutes(): void {
  registerChannelRoutes();
  registerWebRoutes();
}
