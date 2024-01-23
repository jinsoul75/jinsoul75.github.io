import Link from 'next/link';

export default function PostItem({ children, key, slug }) {
  const className =
    'hover:bg-pink-400 border-r border-r-black border-b border-b-black';

  return (
    <article key={key} className={className}>
      <Link className="block" href={slug}>
        {children}
      </Link>
    </article>
  );
}

function PostThumnail({ thumnail }) {
  return (
    <figure>
      <img src={`${thumnail}`} />
    </figure>
  );
}

function PostBody({ title, date }) {
  return (
    <div className='p-4'>
      <h3>{title}</h3>
      <time>{date}</time>
    </div>
  );
}

PostItem.PostThumnail = PostThumnail;
PostItem.PostBody = PostBody;
