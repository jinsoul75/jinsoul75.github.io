export const MENUS = ['Home', 'Blog', 'Snippets', 'Archives'];

export const MENU_INFO: { [key: string]: { href: string } } = {
  Home: { href: '/' },
  Blog: { href: '/blog' },
  Snippets: { href: '/snippets' },
  Archives: { href: '/archives' },
};

interface SeriesItem {
  route: string;
  name: string;
  thumbnail: string;
  description: string;
}

interface SeriesCollection {
  [key: string]: SeriesItem;
}

export const SERIES_INFO: SeriesCollection = {
  'react-deep-dive': {
    route: 'blog/series/react-deep-dive',
    name: 'react deep dive',
    description: '모던 리액트 딥다이브 책를 읽고 학습한 내용을 기록합니다.',
    thumbnail:
      'https://images.unsplash.com/photo-1625305263117-54a72da56260?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGl2ZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  blog: {
    route: 'blog/series/blog',
    name: 'Next.js 블로그 만들기',
    description: '이 블로그를 만들어간 과정을 기록합니다.',
    thumbnail:
      'https://plus.unsplash.com/premium_photo-1678567671234-388cf4fa0224?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb2d8ZW58MHx8MHx8fDA%3D',
  },
};

export const SERIES = Object.keys(SERIES_INFO);
