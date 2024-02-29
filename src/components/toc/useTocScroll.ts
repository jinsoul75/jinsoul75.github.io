'use client';

import { useEffect, useState } from 'react';

export default function useTocScroll(tableOfContents: any) {
  const [currentSectionSlug, setCurrentSectionSlug] = useState<
    string | undefined
  >();

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    let headings: { id: string; top: number }[];

    function onResize() {
      headings = Array.from(
        document.querySelectorAll<HTMLElement>('.prose h2,h3'),
      ).map((element) => ({ id: element.id, top: element.offsetTop }));
    }

    function onScroll() {
      if (!headings) return;

      const NAV_TOP = 24;
      const TARGET_TOP = 200;
      const top = window.scrollY - NAV_TOP + TARGET_TOP;

      let current: typeof currentSectionSlug = undefined;

      for (let i = 0; i < headings.length; i++) {
        if (top >= headings[i].top) {
          current = headings[i].id;
        }
      }

      setCurrentSectionSlug(current);
    }

    onResize();
    onScroll();

    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    });

    window.addEventListener('resize', onResize, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('resize', onResize, { capture: true });
    };
  }, [tableOfContents]);

  return { currentSectionSlug };
}
