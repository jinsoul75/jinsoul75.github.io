import Link from 'next/link';
// import Image from 'next/image';

import { SERIES } from '@/constants/route';
// import Animation from '@/framer/Animation';
import { cn } from '@/libs/utils';

export default function SeriesCard() {
  return (
    <ul className="flex flex-col gap-4 sm:flex-row">
      {SERIES.map((series) => (
        <li key={series.name}>
          {/* <div className="relative overflow-hidden group rounded-2xl w-[324px] h-[324px]">
              <Link className="block" href={`blog/series/${series.route}`}>
                <figure className="overflow-hidden group">
                  <Image
                    fill={true}
                    className="transition-all duration-300 transform group-hover:scale-110 rounded-2xl h-full"
                    src={series.thumbnail}
                    alt="series-thumbnail"
                  />
                </figure>
                <div className="absolute top-2/1 left-10 font-extrabold text-5xl transition-all duration-300">
                  {series.name}
                </div>
              </Link>
            </div> */}
          <div
            className={cn(
              'rounded-2xl border border-gray-200',
              'hover:bg-gray-200',
              'active:bg-gray-100',
            )}
          >
            <Link className="block" href={`blog/series/${series.route}`}>
              <div className="font-extrabold text-xl px-2 py-2">
                {series.name}
              </div>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
