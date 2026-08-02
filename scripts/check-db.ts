import { DatabaseSync } from 'node:sqlite';
const db = new DatabaseSync('database/database.sqlite');
console.log('tables', db.prepare("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name").all());
try {
  console.log('posts schema', db.prepare("PRAGMA table_info(posts)").all());
  console.log('posts rows', db.prepare('SELECT id, title, slug, created_at, published_at FROM posts').all());
} catch (e) {
  console.error('posts error', e);
}
try {
  console.log('migrations', db.prepare('SELECT * FROM migrations').all());
} catch (e) {
  console.error('mig error', e);
}
