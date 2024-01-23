import Link from 'next/link';

export default function PostItem({ post }) {
  const className =
    'hover:bg-pink-400 border-r border-r-black border-b border-b-black';

  return (
    <article key={post.slug} className={className}>
      <Link className='block p-4' href={post.slug}>
        <h3>{post.title}</h3>
        <time>{post.date}</time>
      </Link>
    </article>
  );
}
