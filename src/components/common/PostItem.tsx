import Link from 'next/link';

import { ReactNode } from 'react';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { GoClock } from 'react-icons/go';
import { cn } from '@/libs/utils';

export default function PostItem({
  children,
  className,
  slug,
}: {
  children: ReactNode;
  className?: string;
  slug: string;
}) {
  return (
    <article className={className}>
      <Link href={`/blog/${slug.split('/').slice(-1)}`}>{children}</Link>
    </article>
  );
}

export function PostTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        `text-2xl font-semibold hover:underline hover:underline-offset-2 hover:decoration-2 ${className}`,
      )}
    >
      {title}
    </h2>
  );
}

export function PostDate({ date }: { date: string }) {
  return (
    <time className="flex items-center">
      <IoCalendarClearOutline />
      <span className="ml-[4px]">{date}</span>
    </time>
  );
}

export function PostTags({
  tags,
  className,
}: {
  tags: string[] | undefined;
  className?: string;
}) {
  return (
    <ul
      className={cn(`flex flex-wrap place-items-start space-x-2 ${className}`)}
    >
      {tags?.map((tag: string) => (
        <li
          key={tag}
          className="border border-black rounded-full hover:bg-black hover:text-white"
        >
          <Link href={`/archives/tags/${tag}`} className="block px-2">
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function PostReadingTime({ readingTime }: { readingTime: string }) {
  return (
    <div className="flex items-center whitespace-nowrap ml-2">
      <GoClock />
      <span className="ml-[4px]">{readingTime}</span>
    </div>
  );
}

PostItem.PostTitle = PostTitle;
PostItem.PostDate = PostDate;
PostItem.PostTags = PostTags;
PostItem.PostReadingTime = PostReadingTime;
