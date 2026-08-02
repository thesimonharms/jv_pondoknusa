import { View } from '@pondoknusa/core';
import { Response } from '@pondoknusa/http';
import type { PondoknusaRequest } from '@pondoknusa/http';
import {
  byCategory,
  categories,
  getCategory,
  type VocabCategory,
  vocabulary,
} from '../data/vocabulary.ts';

export class LearnController {
  async index() {
    const html = await View.render('learn/index', {
      categories: categories.map((category) => ({
        ...category,
        count: byCategory(category.id).length,
      })),
      wordCount: vocabulary.length,
    });
    return Response.html(html);
  }

  async category(request: PondoknusaRequest) {
    const id = String(request.param('category') ?? '');
    const category = getCategory(id);
    if (!category) {
      return Response.html(
        await View.render('errors/not-found', {
          message: 'That vocabulary category was not found.',
        }),
        { status: 404 },
      );
    }

    const words = byCategory(category.id as VocabCategory);
    const html = await View.render('learn/category', {
      category,
      words,
      categories,
    });
    return Response.html(html);
  }
}
