import { allBlogPosts } from '@/constants/dataset';

export async function generateStaticParams() {
  return [...allBlogPosts].map((blogPost) => ({
    slug: blogPost.slugAsParams,
  }));
}

export default function Series() {
  return (
    <>
      <div>여긴 시리즈 페이지</div>
    </>
  );
}
