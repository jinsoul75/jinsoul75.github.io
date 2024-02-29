import { cn } from '@/libs/utils';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar() {
  const className = cn(
    'bg-gray-100 p-2 w-full flex',
    'focus:ring-1',
    'ring-black',
    'outline-none',
    'rounded-2xl',
  );

  return (
    <div className={className}>
      <CiSearch className="mx-2" size={24} />
      <input
        className="w-full bg-gray-100 focus:outline-none"
        placeholder="검색기능 준비중"
      />
    </div>
  );
}
