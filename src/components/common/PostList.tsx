import PostItem from './PostItem';
import dayjs from 'dayjs';

export default function PostList({ posts }: { posts: any }) {
  const className = 'grid grid-cols-1 gap-4 md:grid-cols-2';

  return (
    <section className={className}>
      {posts.map((post: any) => {
        const formatDate = dayjs(post.date).format('YY.MM.DD');

        return (
          <PostItem key={post._id}>
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
