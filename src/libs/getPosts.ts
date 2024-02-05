import { notFound } from 'next/navigation';
import { Blog, allBlogs } from 'contentlayer/generated';

type AllType = Blog[];

export function getBlogFromParams(allBlogs: AllType, slug: string) {
  const post = allBlogs.find((blog) => blog.slugAsParams === slug);

  if (!post) notFound();

  return post;
}

export function getSortByLatestDate(allBlogs: AllType) {
  const date = (fullDate: string): string => fullDate.split('T')[0];

  const posts = [...allBlogs].sort((a, b) => {
    const dateA = new Date(date(a.date));
    const dateB = new Date(date(b.date));
    return dateB.getTime() - dateA.getTime();
  });

  return posts;
}

export function getRecentPost(allBlogs: AllType) {
  const recentPosts = allBlogs.slice(0, 4);

  const sortedRecentPosts = getSortByLatestDate(recentPosts);

  return sortedRecentPosts;
}
