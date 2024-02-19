'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Provider;
