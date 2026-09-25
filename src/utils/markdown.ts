import type { CollectionEntry } from 'astro:content'
import SITE from '#data/site.json' with { type: 'json' }

export function postFrontmatter(post: CollectionEntry<'blog' | 'notes'>) {
  return `---
publishedDate: ${post.data.publishedDate.toISOString()}
modifiedDate: ${(post.data.modifiedDate ?? post.data.publishedDate).toISOString()}
title: ${post.data.title}
description: ${post.data.description}
canonicalUrl: ${new URL(`/${post.collection}/${post.id}/`, SITE.url)}
author:
  name: ${SITE.authorName}
---`
}
