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

export const SERIES = ['javascript-deep-dive', 'react-deep-dive'];

export const SERIES_INFO: SeriesCollection = {
  'javascript-deep-dive': {
    name: 'javascript deep dive',
    thumbnail: 'https://github.com/voodootikigod/logo.js/raw/master/js.png',
  },
  'react-deep-dive': {
    name: 'react deep dive',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
  },
};
