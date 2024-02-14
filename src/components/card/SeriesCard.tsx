import { SERIES, SERIES_NAME } from '@/constants/route';
import Link from 'next/link';

export default function SeriesCard() {
  return (
    <ul>
      {SERIES_NAME.map((series) => (
        <li key={series}>
          <Link href={`blog/series/${SERIES[series]}`}>{series}</Link>
        </li>
      ))}
    </ul>
  );
}
