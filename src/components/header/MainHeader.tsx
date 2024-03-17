import ThemeToggle from '../theme-toggle/ThemeToggle';
// import HamburgerButton from './HamburgerButton';
import NavBar from './NavBar';

export default function MainHeader() {
  return (
    <header className="fixed top-0 inset-x-0 backdrop-blur p-4">
      <nav className="flex justify-between p-4">
        <NavBar />
        <ThemeToggle />
      </nav>
    </header>
  );
}
