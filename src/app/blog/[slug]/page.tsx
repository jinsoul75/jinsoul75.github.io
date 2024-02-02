import { allBlogs } from 'contentlayer/generated';
import { getBlogFromParams } from '../../../libs/getPage';
import {
  PostDate,
  PostReadingTime,
  PostTags,
} from '@/components/common/PostItem';
import Mdx from '@/components/mdx/Mdx';
import Title from '@/components/common/Title';
import Toc from '@/components/toc/Toc';
interface Props {
  params: {
    slug: string;
  };
}

export default async function Slug({ params }: Props) {
  const { title, date, tags, body, readingTime, headings } = getBlogFromParams(
    allBlogs,
    params.slug,
  );

  return (
    <article>
      <div className="flex flex-col items-center space-y-2">
        <Title>{title}</Title>
        <div className="flex">
          <PostDate date={date.split('T')[0]} />
          <PostReadingTime readingTime={readingTime.text} />
        </div>
        <PostTags tags={tags} />
      </div>

      <hr className="bg-black mb-6 mt-4 h-px border-0" />

      <div className="flex gap-8">
        <div className="prose">
          <Mdx code={body.code} />
        </div>
        <aside className="sticky self-start top-[120px] right-6 grow ml-10 mt-10 ">
          <Toc headings={headings} />
        </aside>
      </div>
    </article>
  );
}
