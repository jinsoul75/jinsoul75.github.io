import PostItem from './PostItem';
import { ThumnailCategory } from '@/constants/menu';

export default function PostList({ posts }) {
  const className =
    'grid grid-cols-2 border-t border-t-black border-l border-l-black';

  return (
    <section className={className}>
      {posts.map((post) => {
        const isWithThumnail = ThumnailCategory.includes(
          post.slug.split('/')[1],
        );

        return (
          <PostItem key={post._id} slug={post.slug}>
            {isWithThumnail && (
              <PostItem.PostThumnail thumnail={post.thumnail} />
            )}
            <PostItem.PostBody title={post.title} date={post.date} />
          </PostItem>
        );
      })}
    </section>
  );
}
