import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const shikiConfig = {
  themes: {
    light: 'min-light',
    dark: 'min-dark',
  },
  wrap: true,
};

// https://astro.build/config
export default defineConfig({
  // User site repository: YanchenLu117.github.io, served from the domain root.
  site: 'https://yanchenlu117.github.io',

  // The repository is <username>.github.io, so no `base` is required.
  // If the repository is ever renamed to a project repo, set:
  // base: '/<repo-name>',

  output: 'static',

  integrations: [mdx()],

  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
