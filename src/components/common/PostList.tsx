import { cn } from '@/libs/utils';
import PostItem from './PostItem';
import dayjs from 'dayjs';

export default function PostList({
  posts,
  className,
}: {
  posts: any;
  className?: string;
}) {
  return (
    <section
      className={cn(`grid grid-cols-1 gap-4 md:grid-cols-2 ${className}`)}
    >
      {posts.map((post: any) => {
        const formatDate = dayjs(post.date).format('YY.MM.DD');

        return (
          <PostItem
            key={post._id}
            slugAsParams={post.slugAsParams}
            className={cn(
              'rounded-lg p-4 transition-transform duration-300 transform',
              'hover:-translate-y-1',
            )}
          >
            <PostItem.PostTitle title={post.title} />
            <div className="flex mt-8">
              <div className="grow">
                <PostItem.PostTags tags={post.tags} />
              </div>
              <div className="flex text-sm">
                <PostItem.PostDate date={formatDate} />
                <PostItem.PostReadingTime readingTime={post.readingTime.text} />
              </div>
            </div>
          </PostItem>
        );
      })}
    </section>
  );
}
