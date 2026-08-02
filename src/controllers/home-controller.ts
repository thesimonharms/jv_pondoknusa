import { View } from '@pondoknusa/core';
import { Response } from '@pondoknusa/http';
import { Post } from 'rontal';
import { categories, vocabulary } from '../data/vocabulary.ts';

export class HomeController {
  async index() {
    let latestPosts: Array<Record<string, unknown>> = [];
    try {
      const posts = await Post.scope('published')
        .orderBy('published_at', 'desc')
        .limit(3)
        .getModels();
      latestPosts = posts.map((post) => ({
        title: post.getAttribute('title'),
        slug: post.getAttribute('slug'),
        excerpt: post.getAttribute('excerpt'),
        published_at: post.getAttribute('published_at'),
      }));
    } catch {
      latestPosts = [];
    }

    const html = await View.render('home', {
      categoryCount: categories.length,
      wordCount: vocabulary.length,
      categories,
      latestPosts,
    });

    return Response.html(html);
  }
}
