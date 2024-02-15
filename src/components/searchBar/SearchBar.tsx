import { cn } from '@/libs/utils';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar() {
  const className = cn(
    'border border-black p-2 w-full',
    'focus:ring-2',
    'ring-black',
    'outline-none',
  );
  return (
    <div className='relative'>
      <input placeholder="검색기능 준비중" className={className} />
      <CiSearch className='absolute right-4 top-2' size={24}/>
    </div>
  );
}
