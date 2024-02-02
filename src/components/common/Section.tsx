import { ReactNode } from 'react';
import { cn } from '../../libs/utils';

interface SectionProps {
  className: string;
  children: ReactNode;
}

export default function Section({ className, children, ...props }: SectionProps): JSX.Element {
  return (
    <section className={cn(`${className} grow`)} {...props}>
      {children}
    </section>
  );
}
