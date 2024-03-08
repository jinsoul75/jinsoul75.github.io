import LinkItem from '../common/LinkItem';

import { MENUS, MENU_INFO } from '../../constants/route';
import { Dispatch, SetStateAction } from 'react';

export default function SideBar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 top-[85px] bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 flex justify-center items-center">
      <ul>
        {MENUS.map((menu, index) => {
          return (
            <li
              key={`${menu}${index}`}
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl"
            >
              <LinkItem href={MENU_INFO[menu].href}>{menu}</LinkItem>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
