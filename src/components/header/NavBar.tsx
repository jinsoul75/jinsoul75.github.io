import LinkItem from '../common/LinkItem';
import { MENUS, MENU_INFO } from '../../constants/route';

export default function NavBar() {
  return (
    <ul className="gap-4 hidden sm:flex">
      {MENUS.map((menu, index) => {
        return (
          <li key={`${menu}${index}`}>
            <LinkItem
              className="text-gray-600 p-2 transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl"
              href={MENU_INFO[menu].href}
            >
              {menu}
            </LinkItem>
          </li>
        );
      })}
    </ul>
  );
}
