import Link from 'next/link';
import PostItem from './PostItem';
import { thumbnailCategory } from '@/constants/menu';
import dayjs from 'dayjs';

export default function PostList({ posts }: { posts: any }) {
  const className =
    'grid grid-cols-2 border-t border-t-black border-l border-l-black';

  return (
    <section className={className}>
      {posts.map((post: any) => {
        const isWithThumbnail = thumbnailCategory.includes(
          post.slug.split('/')[1],
        );

        const formatDate = dayjs(post.date).format('YY.MM.DD');

        return (
          <PostItem
            key={post._id}
            className="border-r border-r-black border-b border-b-black"
          >
            <Link href={post.slug.split('/').slice(-1)}>
              {isWithThumbnail && (
                <PostItem.PostThumbnail thumbnailUrl={post.thumbnail} />
              )}
            </Link>
            <div className="p-2">
              <PostItem.PostTitle title={post.title} slug={post.slug} />
              <div className="flex mt-8">
                <div className="grow">
                  <PostItem.PostTags tags={post.tags} />
                </div>
                <div className="flex text-sm">
                  <PostItem.PostDate date={formatDate} />
                  <PostItem.PostReadingTime
                    readingTime={post.readingTime.text}
                  />
                </div>
              </div>
            </div>
          </PostItem>
        );
      })}
    </section>
  );
}
