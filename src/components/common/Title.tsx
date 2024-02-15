import React from 'react';

export default function Title({
  className,
  ...props
}: React.ComponentProps<'h1'>) {
  return (
    <h1
      {...props}
      className={`text-3xl font-extrabold tracking-tight sm:text-5xl mb-4 ${className}`}
    />
  );
}
