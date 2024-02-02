'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/libs/utils';
interface Props {
  className?: string;
  href: string;
  children: string;
}

export default function LinkItem({
  children,
  href,
  className,
  ...props
}: Props) {
  const pathname = usePathname();
  const firstPathname = pathname.split('/')[1]
  const isActive = href === `/${firstPathname}`

  return (
    <Link
      href={href}
      className={`${className} ${cn({'font-bold':isActive})}`}
      {...props}
    >
      {children}
    </Link>
  );
}
