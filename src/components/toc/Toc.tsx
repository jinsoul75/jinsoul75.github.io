'use client';
import Link from 'next/link';

import useTocScroll from './useTocScroll';
import { cn } from '@/libs/utils';

interface Headings {
  level: string;
  text: string;
  slug: string;
}

export default function Toc({ headings }: { headings: Headings[] }) {
  const { currentSectionSlug } = useTocScroll(headings);

  return (
    <div className="border border-black p-4 flex flex-col">
      <div className="text-2xl font-extrabold">On this page</div>

      <hr className="bg-black mb-6 mt-4 h-px border-0" />

      <ul className="space-y-4">
        {headings.map((heading) => (
          <li key={heading.slug}>
            <Link
              href={`#${heading.slug}`}
              className={`${cn({
                'font-bold': currentSectionSlug === heading.slug,
              })}`}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
