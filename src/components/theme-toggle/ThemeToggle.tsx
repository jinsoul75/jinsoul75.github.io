'use client';

import { useEffect, useState } from 'react';
import { FaMoon, FaRegSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const hoverColor = 'hover:text-yellow-300';

  return (
    <button className={`cursor-pointer hover:scale-125 ${className}`}>
      {theme === 'dark' ? (
        <FaRegSun
          onClick={() => setTheme('light')}
          size={24}
          className={hoverColor}
        />
      ) : (
        <FaMoon
          onClick={() => setTheme('dark')}
          size={24}
          className={hoverColor}
        />
      )}
    </button>
  );
}
