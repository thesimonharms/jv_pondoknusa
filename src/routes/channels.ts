import { Broadcast } from '@pondoknusa/core';

export function registerChannelRoutes(): void {
  // route:cache and some CLI boots never wire the Broadcast facade.
  try {
    Broadcast.channel('orders', () => true);

    Broadcast.channel('private-orders.{orderId}', (user, orderId) => {
      return Boolean(user) && String(orderId).length > 0;
    });

    Broadcast.channel('private-App.Models.User.{id}', (user, id) => {
      if (!user || typeof user !== 'object' || !('id' in user)) {
        return false;
      }

      const record = user as Record<string, unknown>;
      return String(record.id) === String(id);
    });

    Broadcast.channel('presence-App.Room.{roomId}', (user, roomId) => {
      return Boolean(user) && String(roomId).length > 0;
    });
  } catch {
    // Optional realtime channels — skip when broadcasting is not booted.
  }
}
