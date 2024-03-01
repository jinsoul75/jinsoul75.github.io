import { ReactNode } from 'react';

interface ParagraphProps {
  className?: string;
  children: ReactNode;
}

export default function Paragraph({
  children,
  className,
  ...props
}: ParagraphProps) {
  return (
    <p className={`${className} break-words`} {...props}>
      {children}
    </p>
  );
}
