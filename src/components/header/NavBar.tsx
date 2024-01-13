import LinkItem from '../common/LinkItem';
import { MENUS, MENU_INFO } from '../../constants/menu';

export default function NavBar() {
  return (
    <ul className="flex">
      {MENUS.map((menu, index) => {
        return (
          <li key={`${menu}${index}`}>
            <LinkItem
              className={`${!index ? 'py-2 pr-2' : 'p-2'} `}
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
