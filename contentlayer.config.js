import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  // 각 mdx 마다 경로 파싱
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },

  // 각 mdx 마다 경로 생성
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
  // 각 mdx 마다 읽는 시간 추정
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw),
  },
};

// mdx 필드 (mdx 마다 어떤 제목, 종류, 작성날짜, 태그)
const fields = {
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
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  // 어떤 경로에 있는 mdx들을 파싱할건지
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: fields,
  computedFields,
}));

export default makeSource({
  // 실제 파일에서 mdx가 어디 경로에 있는지 (설정이 매우 중요해요!!)
  contentDirPath: './posts',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
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
