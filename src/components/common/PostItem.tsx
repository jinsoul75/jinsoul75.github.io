import Link from 'next/link';

import { ReactNode } from 'react';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { GoClock } from 'react-icons/go';
import { cn } from '@/libs/utils';

export default function PostItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <article className={className}>{children}</article>;
}

export function PostTitle({
  title,
  className,
  slugAsParams,
}: {
  title: string;
  className?: string;
  slugAsParams?: string;
}) {
  return (
    <h2
      className={cn(
        `text-2xl font-semibold hover:underline hover:underline-offset-2 hover:decoration-2 ${className}`,
      )}
    >
      <Link href={`/blog/${slugAsParams}`}> {title}</Link>
    </h2>
  );
}

export function PostSubtitle({ subtitle }: { subtitle: string }) {
  return <h3>{subtitle}</h3>;
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
          className="border border-black rounded-full hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-white  dark:hover:bg-white dark:hover:text-black"
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
PostItem.PostSubtitle = PostSubtitle;
PostItem.PostDate = PostDate;
PostItem.PostTags = PostTags;
PostItem.PostReadingTime = PostReadingTime;
