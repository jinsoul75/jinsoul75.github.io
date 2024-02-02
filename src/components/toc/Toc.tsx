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
    <div>
      <div>On this page</div>
      <ul>
        {headings.map((heading) => (
          <li key={heading.slug}>
            <Link
              href={`#${heading.slug}`}
              className={cn({
                'font-bold': currentSectionSlug === heading.slug,
              })}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
