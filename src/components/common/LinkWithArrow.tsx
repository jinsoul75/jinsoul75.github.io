import { cn } from '@/libs/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function LinkWithArrow({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(`${className}`)}>
      {children}
    </Link>
  );
}
