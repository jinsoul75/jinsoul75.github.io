import { ParamsProps } from '@/types/types';

import { allSeriesPosts, getSeriesPostsBySlug } from '@/constants/dataset';
import PostList from '@/components/common/PostList';

export async function generateStaticParams() {
  return [...allSeriesPosts].map((blogPost) => ({
    slug: blogPost.slugAsParams,
  }));
}

export default function Series({ params }: ParamsProps) {
  const seriesPosts = getSeriesPostsBySlug(params?.slug);

  return (
    <>
      <div>여긴 시리즈 페이지</div>
      <PostList posts={seriesPosts} />
    </>
  );
}
