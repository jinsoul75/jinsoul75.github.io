import NavBar from './NavBar';
import ThemeToggle from '../theme-toggle/ThemeToggle';

export default function Header() {
  return (
    <header className="pt-10 pb-5 border-b border-b-gray">
      <nav className="flex justify-between">
        <NavBar />
        <ThemeToggle />
      </nav>
    </header>
  );
}
