'use client';

export default function FullPageController({
  currentPage,
}: {
  currentPage: number;
}) {
  return (
    <div className="fixed top-1/2 right-52">
      <div className="flex flex-col justify-between items-center w-4 h-20">
        <Dot num={1} currentPage={currentPage}></Dot>
        <Dot num={2} currentPage={currentPage}></Dot>
        <Dot num={3} currentPage={currentPage}></Dot>
      </div>
    </div>
  );
}

function Dot({ num, currentPage }: { num: number; currentPage: number }) {
  console.log('num,currentPage', num, currentPage);
  return (
    <div
      className={`w-3 h-3 border border-black rounded-full ${currentPage === num ? 'bg-black' : 'transparent'} transition`}
    ></div>
  );
}
