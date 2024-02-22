import LinkItem from '../common/LinkItem';
import { MENUS, MENU_INFO } from '../../constants/menu';

export default function NavBar() {
  return (
    <ul className="space-x-4 hidden sm:flex">
      {MENUS.map((menu, index) => {
        return (
          <li key={`${menu}${index}`}>
            <LinkItem className="text-gray-600" href={MENU_INFO[menu].href}>
              {menu}
            </LinkItem>
          </li>
        );
      })}
    </ul>
  );
}
