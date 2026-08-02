import { View } from '@pondoknusa/core';
import { Response } from '@pondoknusa/http';
import { pickRandom, shuffle, vocabulary } from '../data/vocabulary.ts';

function quizPayload(count = 8) {
  const questions = pickRandom(count).map((item) => {
    const distractors = shuffle(
      vocabulary.filter((word) => word.id !== item.id).map((word) => word.english),
    ).slice(0, 3);
    const choices = shuffle([item.english, ...distractors]);
    return {
      id: item.id,
      prompt: item.javanese,
      aksara: item.aksara ?? null,
      answer: item.english,
      choices,
    };
  });
  return questions;
}

function matchPayload(count = 6) {
  const items = pickRandom(count);
  return {
    prompts: shuffle(items.map((item) => ({ id: item.id, text: item.javanese }))),
    answers: shuffle(items.map((item) => ({ id: item.id, text: item.english }))),
  };
}

function flashcardPayload(count = 12) {
  return pickRandom(count).map((item) => ({
    id: item.id,
    front: item.javanese,
    aksara: item.aksara ?? null,
    back: item.english,
    example: item.example ?? null,
    exampleEn: item.exampleEn ?? null,
  }));
}

export class GameController {
  async index() {
    const html = await View.render('games/index', {});
    return Response.html(html);
  }

  async match() {
    const html = await View.render('games/match', {
      deckJson: JSON.stringify(matchPayload(6)),
    });
    return Response.html(html);
  }

  async quiz() {
    const html = await View.render('games/quiz', {
      questionsJson: JSON.stringify(quizPayload(8)),
    });
    return Response.html(html);
  }

  async flashcards() {
    const html = await View.render('games/flashcards', {
      cardsJson: JSON.stringify(flashcardPayload(12)),
    });
    return Response.html(html);
  }
}
