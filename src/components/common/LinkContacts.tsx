import Link from 'next/link';
import { SiGmail } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { SiTistory } from 'react-icons/si';

export default function LinkContacts() {
  return (
    <ul className="flex items-center">
      <li className="mr-2">
        <Link href="mailto: wlsthf75@gmail.com" target="_blank">
          <SiGmail />
        </Link>
      </li>
      <li className="mr-2">
        <Link href="https://github.com/jinsoul75" target="_blank">
          <FaGithub />
        </Link>
      </li>
      <li>
        <Link href="http://localhost:3000/blog" target="_blank">
          <SiTistory size={14} />
        </Link>
      </li>
    </ul>
  );
}
