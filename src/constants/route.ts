export const SERIES = {
  'REACT DEEP DIVE': 'react-deep-dive',
  'TYPESCRIPT DEEP DIVE': 'typescript-deep-dive',
} as const;

export const SERIES_NAME = Object.keys(SERIES) as (keyof typeof SERIES)[];
