import Link from 'next/link';

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
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
