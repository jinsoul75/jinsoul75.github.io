import Image from 'next/image';

import { ParamsProps } from '@/types/types';

import { cn } from '@/libs/utils';

import { SERIES, SERIES_INFO } from '@/constants/route';
import { getSeriesPostsBySlug } from '@/constants/dataset';
import PostList from '@/components/common/PostList';
import SubTitle from '@/components/common/SubTitle';
import Hr from '@/components/common/Hr';

export async function generateStaticParams() {
  return [...SERIES].map((series) => ({
    slug: series,
  }));
}

export default function Series({ params }: ParamsProps) {
  const seriesPosts = getSeriesPostsBySlug(params?.slug);

  const { slug } = params;

  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6 sm:items-start">
      <figure className=" w-8/12 sm:w-1/3 sm:h-1/3">
        <Image
          src={SERIES_INFO[slug].thumbnail}
          alt={`${slug}-thumbnail`}
          width={300}
          height={300}
          className="rounded-xl"
        />
      </figure>
      <div className="md:grow w-full">
        <div className="flex flex-col items-center sm:items-start">
          <SubTitle className={`${cn('mt-0')}`}>
            {SERIES_INFO[slug].name}
          </SubTitle>
          <div>{SERIES_INFO[slug].name}</div>
        </div>
        <Hr className="" />
        <PostList posts={seriesPosts} className="flex flex-col grow" />
      </div>
    </div>
  );
}
