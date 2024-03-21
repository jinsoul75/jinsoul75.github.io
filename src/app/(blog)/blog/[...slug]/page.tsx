import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import {
  getBlogPostBySlug,
  allBlogPosts,
  getPrevPostBySlug,
  getNextPostBySlug,
} from '../../../../constants/dataset';

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
import Hr from '@/components/common/Hr';
import StepPostCard from '@/components/card/StepPostCard';

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  const slug = params.slug;

  const post = getBlogPostBySlug(slug[slug.length - 1]);

  if (!post) return notFound();

  return {
    title: post.title,
    description: post.subtitle,
  };
}

export async function generateStaticParams() {
  return [...allBlogPosts].map((blogPost) => ({
    slug: blogPost.slugAsParams.split('/'),
  }));
}

export default function Slug({ params }: ParamsProps) {
  const slug = params.slug;

  const slugTitle = slug[slug.length - 1];
  const post = getBlogPostBySlug(slugTitle);
  const prevPost = getPrevPostBySlug(slugTitle);
  const nextPost = getNextPostBySlug(slugTitle);

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

        <Hr />

        <div className="flex gap-8">
          <div className="prose w-full max-w-3xl dark:prose-invert">
            <Mdx code={body.code} />
          </div>
          <aside className="sticky self-start top-[120px] right-6 grow ml-10 mt-10 w-[350px] hidden lg:block">
            <Toc headings={headings} />
          </aside>
        </div>
      </article>

      <Hr />

      <div className="flex justify-between">
        {prevPost && <StepPostCard step="prev" post={prevPost} />}
        {nextPost && <StepPostCard step="next" post={nextPost} />}
      </div>

      <Hr />

      <Profile />

      <Hr />

      <Reaction />
    </>
  );
}
