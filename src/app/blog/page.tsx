import { allBlogs, Blog } from 'contentlayer/generated';
import Title from '@/components/common/Title';
import Link from 'next/link';

export default function BlogPage() {
  console.log(allBlogs[0].slug);
  return (
    <>
      <Title>Blog</Title>

      <div>
        <div>블로깅페이지 입니다.</div>
      </div>

      <div>검색바</div>

      <div>시리즈</div>

      <div>All Posts</div>

      <div>
        {allBlogs.map((blog) => {
          return (
            <div>
              <Link href={blog.slug}>
                {blog.title}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
