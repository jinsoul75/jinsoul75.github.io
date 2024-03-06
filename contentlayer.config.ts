import {
  defineDocumentType,
  makeSource,
  FieldDefs,
} from 'contentlayer/source-files';

import { Pluggable } from 'unified';
import { transformerNotationDiff } from '@shikijs/transformers';

import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import readingTime from 'reading-time';
import GithubSlugger from 'github-slugger';
import rehypeCodeTitles from 'rehype-code-titles';

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
  subtitle: {
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
  isSeries: {
    type: 'boolean',
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

const options = {
  theme: 'github-dark',
  transformers: [transformerNotationDiff()],
  filterMetaString: (string: string) => string.replace(/filename="[^"]*"/, ''),
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeSlug,
      [rehypePrettyCode, options] as unknown as Pluggable<any[]>,
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
