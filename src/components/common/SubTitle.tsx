import { ReactNode } from 'react';

export default function SubTitle({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`${className} mb-4 text-3xl font-bold tracking-tight`}
      {...props}
    >
      {children}
    </h2>
  );
}
