import NavBar from './NavBar';
import ThemeToggle from '../theme-toggle/ThemeToggle';

import { PiHamburgerFill } from 'react-icons/pi';

export default function Header() {
  return (
    <header className="pt-10 pb-5 border-b border-b-gray sticky top-0 bg-white z-10">
      <nav className="flex justify-end sm:justify-between">
        <NavBar />
        <div className="flex gap-2">
          <ThemeToggle />
          <PiHamburgerFill size={30} className="inline sm:hidden" />
        </div>
      </nav>
    </header>
  );
}
