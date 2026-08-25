import { Route, View } from '@pondoknusa/core';
import { Response } from '@pondoknusa/http';
import { BlogController } from '../controllers/blog-controller.ts';
import { GameController } from '../controllers/game-controller.ts';
import { HomeController } from '../controllers/home-controller.ts';
import { LearnController } from '../controllers/learn-controller.ts';

export function registerWebRoutes(): void {
  Route.get('/', [HomeController, 'index']).name('home');
  Route.get('/learn', [LearnController, 'index']).name('learn');
  Route.get('/learn/:category', [LearnController, 'category']).name('learn.category');
  Route.get('/games', [GameController, 'index']).name('games');
  Route.get('/games/match', [GameController, 'match']).name('games.match');
  Route.get('/games/quiz', [GameController, 'quiz']).name('games.quiz');
  Route.get('/games/flashcards', [GameController, 'flashcards']).name('games.flashcards');
  Route.get('/games/scramble', [GameController, 'scramble']).name('games.scramble');
  Route.get('/games/sentences', [GameController, 'sentences']).name('games.sentences');
  Route.get('/blog', [BlogController, 'index']).name('blog');
  Route.get('/blog/:slug', [BlogController, 'show']).name('blog.show');

  Route.get('/healthz', () => Response.json({ ok: true }));
}
