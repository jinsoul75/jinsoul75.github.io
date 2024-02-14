import { ParamsProps } from '@/types/types';

import { allSeriesPosts,getSeriesPostsBySlug } from '@/constants/dataset';

export async function generateStaticParams() {
  return [...allSeriesPosts].map((blogPost) => ({
    slug: blogPost.slugAsParams,
  }));
}

export default function Series({ params }: ParamsProps) {
  const seriesPosts = getSeriesPostsBySlug(params?.slug);
  // console.log(seriesPosts)
  return (
    <>
      <div>여긴 시리즈 페이지</div>
    </>
  );
}
