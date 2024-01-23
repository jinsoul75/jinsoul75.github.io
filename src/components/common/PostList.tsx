import PostItem from './PostItem';

export default function PostList({ posts }) {
  const className = 'grid grid-cols-2 border-t border-t-black border-l border-l-black';

  return (
    <section className={className}>
      {posts.map((post) => {
        return <PostItem post={post} />;
      })}
    </section>
  );
}
