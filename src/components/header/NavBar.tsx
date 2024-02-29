import LinkItem from '../common/LinkItem';
import { MENUS, MENU_INFO } from '../../constants/route';

export default function NavBar() {
  return (
    <ul className="gap-4 hidden sm:flex">
      {MENUS.map((menu, index) => {
        return (
          <li
            key={`${menu}${index}`}
            className="transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl p-2"
          >
            <LinkItem
              className="text-gray-600 block"
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
