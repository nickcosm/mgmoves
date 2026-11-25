import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({
    base: './src/content',
    pattern: 'pages/**/index.mdoc',
    generateId: ({ entry }) =>
      entry.replace(/^pages\//, '').replace(/\/index\.mdoc$/, ''),
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { pages };