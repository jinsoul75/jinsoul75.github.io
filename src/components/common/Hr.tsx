import { cn } from '@/libs/utils';

interface ClassNameProp {
  className?: string;
}

export default function Hr({ className }: ClassNameProp) {
  return <hr className={cn(`bg-black mb-6 mt-4 h-px border-0 ${className}`)} />;
}
