import Title from '@/components/common/Title';
import { ParamsProps } from '@/types/types';
import { getPostsByTag } from '@/constants/dataset';
import PostList from '@/components/common/PostList';
import { notFound } from 'next/navigation';
import { allTags } from '@/constants/dataset';

export async function generateStaticParams() {
  return [...allTags].map((tag) => ({
    slug: decodeURI(tag),
  }));
}

export default function Tags({ params }: ParamsProps) {
  const posts = getPostsByTag(params.slug);

  if (!posts) notFound();

  return (
    <>
      <Title>{decodeURI(params.slug)}</Title>
      <PostList posts={posts} />
    </>
  );
}
