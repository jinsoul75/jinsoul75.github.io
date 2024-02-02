import { notFound } from 'next/navigation';
import { Blog } from 'contentlayer/generated';

type AllType = Blog[];

export function getBlogFromParams(all: AllType, slug: string) {
  const posting = all.find((doc) => doc.slugAsParams === slug);

  if (!posting) notFound();

  return posting;
}
