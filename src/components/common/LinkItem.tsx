'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/libs/utils';
interface LinkItemProps {
  className?: string;
  href: string;
  children: string;
}

export default function LinkItem({
  children,
  href,
  className,
  ...props
}: LinkItemProps) {
  const pathname = usePathname();
  const firstPathname = pathname?.split('/')[1];
  const isActive = href === `/${firstPathname}`;

  return (
    <Link
      href={href}
      className={`${cn(className, 'dark:text-white', { 'font-extrabold': isActive, 'text-black dark:text-yellow-400': isActive })}`}
      {...props}
    >
      {children}
    </Link>
  );
}
