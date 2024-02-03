import {
  defineDocumentType,
  makeSource,
  FieldDefs,
} from 'contentlayer/source-files';

import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import readingTime from 'reading-time';
import GithubSlugger from 'github-slugger';
import { readFileSync } from 'fs';

/** @type {import('contentlayer/source-files').ComputedFields} */

const computedFields: import('contentlayer/source-files').ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },

  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },

  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw),
  },

  headings: {
    type: 'json',
    resolve: async (doc) => {
      const regXHeader = /\n(?<flag>#{1,3})\s+(?<content>.+)/g;

      const slugger = new GithubSlugger();

      const headings = Array.from(
        doc.body.raw.matchAll(regXHeader),
        ({
          groups,
        }: {
          groups?: { flag: string; content: string } | undefined;
        }) => {
          const removeBold = /^(\**)(.*?)(\**)$/;
          const flag = groups?.flag;
          const content = groups?.content.replace(removeBold, '$2');

          return {
            level: flag?.length,
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        },
      );

      return headings;
    },
  },
};

const fields: FieldDefs = {
  title: {
    type: 'string',
    required: true,
  },
  category: {
    type: 'string',
    required: true,
  },
  date: {
    type: 'date',
    required: true,
  },
  tags: {
    type: 'list',
    of: { type: 'string' },
    required: true,
  },
  thumbnail: {
    type: 'string',
    required: false,
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields,
  computedFields,
}));

const Projects = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields,
  computedFields,
}));

const prettyCodeOptions:Options = {
  theme: {
    dark: JSON.parse(
      readFileSync('./code_theme/one-dark-pro-darker.json', 'utf-8'),
    ),
    light: JSON.parse(
      readFileSync('./code_theme/atom-one-light.json', 'utf-8'),
    ),
  },
};

export default makeSource({
  contentDirPath: './posts',
  documentTypes: [Blog, Projects],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, prettyCodeOptions],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
            ariaLabel: 'anchor',
          },
        },
      ],
    ],
  },
});
