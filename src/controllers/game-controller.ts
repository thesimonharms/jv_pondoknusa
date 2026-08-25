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

function scramblePayload(count = 8) {
  return pickRandom(count).map((item) => ({
    id: item.id,
    prompt: item.english,
    letters: shuffle([...item.javanese.replace(/\s+/g, '')]),
    answer: item.javanese,
    hint: item.notes ?? null,
  }));
}

const sentenceTemplates = [
  { id: 'sentence-greeting', english: 'Good morning', words: ['Sugeng', 'enjing'] },
  { id: 'sentence-thanks', english: 'Thank you very much', words: ['Matur', 'nuwun', 'sanget'] },
  { id: 'sentence-coffee', english: 'I want to buy coffee', words: ['Aku', 'arep', 'tuku', 'kopi'] },
  { id: 'sentence-understand', english: 'I do not understand', words: ['Aku', 'ora', 'ngerti'] },
  { id: 'sentence-market', english: 'Where is the market?', words: ['Pasaré', 'ngendi'] },
  { id: 'sentence-slowly', english: 'Take it slowly', words: ['Alon-alon', 'waé'] },
];

function sentencePayload(count = 5) {
  return shuffle(sentenceTemplates).slice(0, count).map((sentence) => ({
    ...sentence,
    solution: sentence.words.join(' '),
    words: shuffle(sentence.words),
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
  async scramble() {
    const html = await View.render('games/scramble', {
      challengesJson: JSON.stringify(scramblePayload(8)),
    });
    return Response.html(html);
  }

  async sentences() {
    const html = await View.render('games/sentences', {
      sentencesJson: JSON.stringify(sentencePayload(5)),
    });
    return Response.html(html);
  }
}
