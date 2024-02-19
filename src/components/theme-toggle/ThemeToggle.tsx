'use client';

import { useEffect, useState } from 'react';
import { FaMoon, FaRegSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button className="cursor-pointer">
      {theme === 'dark' ? (
        <FaRegSun onClick={() => setTheme('light')} size={24} />
      ) : (
        <FaMoon onClick={() => setTheme('dark')} size={24} />
      )}
    </button>
  );
}
