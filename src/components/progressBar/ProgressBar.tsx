'use client';

import { useCallback, useEffect, useState } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      setProgress(0);
      return;
    }

    const windowHeight = scrollHeight - clientHeight;

    const current = (scrollTop / windowHeight) * 100;

    setProgress(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <progress
      value={progress}
      max={100}
      className="fixed top-0 w-full inset-x-0  [&::-webkit-progress-bar]:bg-white  [&::-webkit-progress-value]:bg-black "
    ></progress>
  );
}
