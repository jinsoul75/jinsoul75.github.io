'use client';

import { useRef, useEffect, useState, WheelEvent } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import FullPageController from './FullPageController';

export default function FullPageContainer({
  className,
}: {
  className: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const outerDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wheelHandler: EventListenerOrEventListenerObject = (event) => {
      event.preventDefault();
      const wheelEvent = event as unknown as WheelEvent<HTMLDivElement>;
      const { deltaY } = wheelEvent;

      const pageHeight = window.innerHeight;
      if (outerDivRef.current) {
        const { scrollTop } = outerDivRef.current;

        if (deltaY > 0) {
          // 스크롤 내릴 때
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            setCurrentPage(2);
            //현재 1페이지
            console.log('현재 1페이지, down');
            outerDivRef.current.scrollTo({
              top: pageHeight,
              left: 0,
              behavior: 'smooth',
            });
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            //현재 2페이지
            setCurrentPage(3);
            console.log('현재 2페이지, down');
            outerDivRef.current.scrollTo({
              top: pageHeight * 2,
              left: 0,
              behavior: 'smooth',
            });
          } else {
            // 현재 3페이지
            setCurrentPage(3);
            console.log('현재 3페이지, down');
            outerDivRef.current.scrollTo({
              top: pageHeight * 2,
              left: 0,
              behavior: 'smooth',
            });
          }
        } else {
          // 스크롤 올릴 때
          if (scrollTop > pageHeight && scrollTop <= pageHeight * 2) {
            // 현재 3페이지
            console.log('현재 3페이지, up');
            setCurrentPage(2);
            outerDivRef.current.scrollTo({
              top: pageHeight,
              left: 0,
              behavior: 'smooth',
            });
          } else if (
            scrollTop !== 0 &&
            scrollTop <= pageHeight &&
            scrollTop <= pageHeight * 2
          ) {
            //현재 2페이지
            console.log('현재 2페이지, up');
            setCurrentPage(1);
            outerDivRef.current.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          } else {
            //현재 1페이지
            console.log('현재 1페이지, up');
            setCurrentPage(1);
            outerDivRef.current.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;

    outerDivRefCurrent?.addEventListener('wheel', wheelHandler);

    return () => {
      outerDivRefCurrent?.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  useEffect(
    function pageControll() {
      const pageHeight = window.innerHeight;

      if (currentPage === 1) {
        outerDivRef.current?.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } else if (currentPage === 2) {
        outerDivRef.current?.scrollTo({
          top: pageHeight,
          left: 0,
          behavior: 'smooth',
        });
      } else {
        outerDivRef.current?.scrollTo({
          top: pageHeight * 2,
          left: 0,
          behavior: 'smooth',
        });
      }
    },
    [currentPage],
  );

  return (
    <div ref={outerDivRef} className={className}>
      <FirstPage />
      <SecondPage />
      <FirstPage />
      <FullPageController
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
