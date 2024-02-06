import Link from 'next/link';

export default function LinkContacts() {
  return (
    <ul className="flex">
      <li className="mr-2">
        <Link href="mailto: wlsthf75@gmail.com" target="_blank">
          Email
        </Link>
      </li>
      <li className="mr-2">
        <Link href="https://github.com/jinsoul75" target="_blank">
          Github
        </Link>
      </li>
      <li>
        <Link href="http://localhost:3000/blog" target="_blank">
          Blog
        </Link>
      </li>
    </ul>
  );
}
