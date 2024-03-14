'use client';

import { Dispatch, SetStateAction } from 'react';

export default function FullPageController({
  currentPage,
  setCurrentPage,
}: {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="fixed top-1/2 right-52">
      <div className="flex flex-col justify-between items-center w-4 h-20">
        <Dot
          setCurrentPage={setCurrentPage}
          num={1}
          currentPage={currentPage}
        ></Dot>
        <Dot
          setCurrentPage={setCurrentPage}
          num={2}
          currentPage={currentPage}
        ></Dot>
        <Dot
          setCurrentPage={setCurrentPage}
          num={3}
          currentPage={currentPage}
        ></Dot>
      </div>
    </div>
  );
}

function Dot({
  num,
  currentPage,
  setCurrentPage,
}: {
  num: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div
      onClick={() => setCurrentPage(num)}
      className={`w-3 h-3 border border-black rounded-full ${currentPage === num ? 'bg-black' : 'transparent'} transition hover:cursor-pointer`}
    ></div>
  );
}
