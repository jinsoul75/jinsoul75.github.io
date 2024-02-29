export const MENUS = ['Home', 'Blog', 'Snippets', 'Archives'];

export const MENU_INFO: { [key: string]: { href: string } } = {
  Home: { href: '/' },
  Blog: { href: '/blog' },
  Snippets: { href: '/snippets' },
  Archives: { href: '/archives' },
};

interface SeriesItem {
  name: string;
  thumbnail: string;
}

interface SeriesCollection {
  [key: string]: SeriesItem;
}

export const SERIES_INFO: SeriesCollection = {
  'react-deep-dive': {
    name: 'react deep dive',
    thumbnail:
      'https://images.unsplash.com/photo-1625305263117-54a72da56260?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGl2ZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  blog: {
    name: 'Next.js 블로그 만들기',
    thumbnail:
      'https://plus.unsplash.com/premium_photo-1678567671234-388cf4fa0224?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb2d8ZW58MHx8MHx8fDA%3D',
  },
};

export const SERIES = Object.keys(SERIES_INFO);
