import { notFound } from 'next/navigation';
import { Blog } from 'contentlayer/generated';

type AllType = Blog[];

export async function getBlogFromParams(all: AllType, slug: string) {
  const posting = all.find((doc) => doc.slugAsParams === slug);

  if (!posting) notFound();

  return posting;
}

export async function getFromReadingTime(all: AllType, slug: string) {
  const posting = all.find((doc) => doc.slugAsParams === slug);

  if (!posting) notFound();

  return posting.readingTime.text.slice(0, -8).trim();
}
