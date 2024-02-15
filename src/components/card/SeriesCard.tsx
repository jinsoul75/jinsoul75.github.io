import { SERIES, SERIES_NAME } from '@/constants/route';
import Link from 'next/link';

export default function SeriesCard() {
  return (
    <ul className="flex gap-4">
      {SERIES_NAME.map((series) => (
        <li key={series} className="border border-black">
          <Link className='p-4 block' href={`blog/series/${SERIES[series]}`}>{series}</Link>
        </li>
      ))}
    </ul>
  );
}
