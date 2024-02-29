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
    <div className="border-l p-4 flex flex-col">
      <div className="text-xl font-extrabold">On this page</div>

      <div className="my-2" />

      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.slug}>
            <Link
              href={`#${heading.slug}`}
              className={`${cn('transition-transform duration-300', {
                'font-bold text-yellow-400 text-xl transition':
                  currentSectionSlug === heading.slug,
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
