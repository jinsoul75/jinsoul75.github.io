import Link from 'next/link';
import Image from 'next/image';

import { SERIES, SERIES_INFO } from '@/constants/route';

import { IoBookmarksOutline } from 'react-icons/io5';

export default function SeriesCard() {
  return (
    <ul className="flex flex-col gap-4 sm:flex-row mb-4">
      {SERIES.map((series) => (
        <li key={series} className="group">
          <Link className="block" href={`blog/series/${series}`}>
            <div className="flex flex-col items-center transition-all duration-300 transform-gpu hover:scale-105">
              <div className="relative overflow-hidden group rounded-2xl w-[324px] h-[324px]">
                <figure className="overflow-hidden group">
                  <div className="w-full h-full">
                    <Image
                      fill={true}
                      className="w-full h-full transition-transform duration-300 transform group-hover:scale-110"
                      src={SERIES_INFO[series].thumbnail}
                      alt="series-thumbnail"
                    />
                  </div>
                </figure>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <IoBookmarksOutline />
                <div className="font-extrabold">{SERIES_INFO[series].name}</div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
