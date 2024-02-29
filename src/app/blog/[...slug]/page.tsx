import { notFound } from 'next/navigation';

import { getBlogPostBySlug, allBlogPosts } from '../../../constants/dataset';

import { ParamsProps } from '@/types/types';

import {
  PostDate,
  PostReadingTime,
  PostTags,
} from '@/components/common/PostItem';
import Mdx from '@/components/mdx/Mdx';
import Title from '@/components/common/Title';
import Toc from '@/components/toc/Toc';
import ProgressBar from '@/components/progressBar/ProgressBar';
import Profile from '@/components/profile/Profile';
import Reaction from '@/components/giscus/Giscus';

export async function generateStaticParams() {
  return [...allBlogPosts].map((blogPost) => ({
    slug: blogPost.slugAsParams.split('/'),
  }));
}

export default function Slug({ params }: ParamsProps) {
  console.log(
    [...allBlogPosts].map((blogPost) => ({
      slug: blogPost.slugAsParams,
    })),
  );

  const post = getBlogPostBySlug(params.slug[params.slug.length - 1]);

  if (!post) return notFound();

  const { title, date, tags, body, readingTime, headings } = post;

  return (
    <>
      <ProgressBar />
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
          <div className="prose dark:prose-dark">
            <Mdx code={body.code} />
          </div>
          <aside className="sticky self-start top-[120px] right-6 grow ml-10 mt-10 w-[350px] hidden lg:block">
            <Toc headings={headings} />
          </aside>
        </div>
      </article>

      <hr className="bg-black mb-6 mt-4 h-px border-0" />

      <Profile />

      <hr className="bg-black mb-6 mt-4 h-px border-0" />

      <Reaction />
    </>
  );
}