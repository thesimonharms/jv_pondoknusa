import { View } from '@pondoknusa/core';
import { Response } from '@pondoknusa/http';
import type { PondoknusaRequest } from '@pondoknusa/http';
import { Post } from 'rontal';

interface BlogListItem {
  title: string;
  slug: string;
  excerpt: string | null;
  published_at: string | null;
}

function serializeListItem(post: Post): BlogListItem {
  return {
    title: String(post.getAttribute('title') ?? ''),
    slug: String(post.getAttribute('slug') ?? ''),
    excerpt: (post.getAttribute('excerpt') as string | null) ?? null,
    published_at: (post.getAttribute('published_at') as string | null) ?? null,
  };
}

export class BlogController {
  async index() {
    let posts: BlogListItem[] = [];
    try {
      const models = await Post.scope('published')
        .orderBy('published_at', 'desc')
        .getModels();
      posts = models.map(serializeListItem);
    } catch {
      posts = [];
    }

    const html = await View.render('blog/index', { posts });
    return Response.html(html);
  }

  async show(request: PondoknusaRequest) {
    const slug = String(request.param('slug') ?? '');
    let post: Post | null = null;
    try {
      post = await Post.scope('published').where('slug', slug).firstModel();
    } catch {
      post = null;
    }

    if (!post) {
      return Response.html(
        await View.render('errors/not-found', {
          message: 'That lesson post was not found.',
        }),
        { status: 404 },
      );
    }

    const html = await View.render('blog/show', {
      title: post.getAttribute('title'),
      slug: post.getAttribute('slug'),
      excerpt: post.getAttribute('excerpt'),
      published_at: post.getAttribute('published_at'),
      bodyHtml: post.rendered_body ?? '',
    });
    return Response.html(html);
  }
}
