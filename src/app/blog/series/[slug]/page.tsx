import Image from 'next/image';

import { ParamsProps } from '@/types/types';
import { SERIES_INFO } from '@/constants/route';
import { allSeriesPosts, getSeriesPostsBySlug } from '@/constants/dataset';
import PostList from '@/components/common/PostList';

export async function generateStaticParams() {
  return [...allSeriesPosts].map((blogPost) => ({
    slug: blogPost.slugAsParams,
  }));
}

export default function Series({ params }: ParamsProps) {
  const seriesPosts = getSeriesPostsBySlug(params?.slug);

  const { slug } = params;

  return (
    <div className="flex gap-4">
      <div>
        <figure className="w-1/3 h-1/3">
          <Image
            src={SERIES_INFO[slug].thumbnail}
            alt={`${slug}-thumbnail`}
            width={300}
            height={300}
            className="rounded-xl"
          />
        </figure>
        <div className="font-extrabold">{SERIES_INFO[slug].name}</div>
        <PostList posts={seriesPosts} className="flex flex-col grow " />
      </div>
    </div>
  );
}
