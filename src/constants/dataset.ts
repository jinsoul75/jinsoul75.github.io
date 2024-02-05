import { allBlogs } from 'contentlayer/generated';

export const allBlogPosts = [...allBlogs].sort((a, b) => {
  const dateA = new Date(a.date.split('T')[0]);
  const dateB = new Date(b.date.split('T')[0]);
  return dateB.getTime() - dateA.getTime();
});

export const blogPostBySlug = (slug: string) =>
  allBlogPosts.find((blog) => blog.slugAsParams === slug);

export const recentPosts = allBlogPosts.slice(0, 4);
