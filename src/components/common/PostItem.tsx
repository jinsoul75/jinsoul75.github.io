import Link from 'next/link';
import { ReactNode } from 'react';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { GoClock } from 'react-icons/go';
import { cn } from '@/libs/utils';

export default function PostItem({
  children,
  key,
  className,
}: {
  children: ReactNode;
  key: string;
  className?: string;
}) {
  return (
    <article key={key} className={className}>
      {children}
    </article>
  );
}

export function PostThumbnail({ thumbnailUrl }: { thumbnailUrl: string }) {
  return (
    <figure className="relative overflow-hidden group">
      <img
        className="transition-all duration-300 transform group-hover:scale-110"
        src={`${thumbnailUrl}`}
        alt="post-thumbnail"
      />
    </figure>
  );
}

export function PostTitle({
  title,
  className,
  slug,
}: {
  title: string;
  className?: string;
  slug: string;
}) {
  return (
    <h2
      className={cn(
        `text-2xl bold hover:underline hover:underline-offset-6 hover:decoration-4 ${className}`,
      )}
    >
      <Link href={slug}>{title}</Link>
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
        <li className="border border-black rounded-full hover:bg-black hover:text-white">
          <Link href={'/archives'} className="block px-2">
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

PostItem.PostThumbnail = PostThumbnail;
PostItem.PostTitle = PostTitle;
PostItem.PostDate = PostDate;
PostItem.PostTags = PostTags;
PostItem.PostReadingTime = PostReadingTime;
