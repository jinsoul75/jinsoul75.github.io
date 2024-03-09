'use client';

import { FaAngleDoubleDown } from 'react-icons/fa';
import { cn } from '@/libs/utils';

export default function ScrollButton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `animate-bounce flex flex-col items-center my-4 ${className}`,
      )}
    >
      <div className="font-extrabold">Scroll</div>
      <button>
        <FaAngleDoubleDown size={30} />
      </button>
    </div>
  );
}
