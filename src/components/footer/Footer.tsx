import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-4 flex flex-col items-end border-t border-t-black">
      <ul className="flex">
        <li className="mr-2">
          <Link
            href="mailto: wlsthf75@gmail.com"
            target="_blank"
            className="py-2 pr-2"
          >
            Email
          </Link>
        </li>
        <li className="mr-2">
          <Link
            href="https://github.com/jinsoul75"
            target="_blank"
            className="p-2"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            href="http://localhost:3000/blog"
            target="_blank"
            className="p-2"
          >
            Blog
          </Link>
        </li>
      </ul>
      <div>@ 2024 jinsoul Powered by Next.js, Vercel</div>
    </footer>
  );
}
