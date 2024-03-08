'use client';

import { useState } from 'react';
import { PiHamburgerFill } from 'react-icons/pi';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import SideBar from './SideBar';

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSideBar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button>
        {isOpen ? (
          <IoMdCloseCircleOutline
            onClick={handleSideBar}
            size={30}
            className="inline hover:text-pink-300 hover:cursor-pointer hover:scale-110"
          />
        ) : (
          <PiHamburgerFill
            onClick={handleSideBar}
            size={30}
            className="inline hover:text-pink-300 hover:cursor-pointer hover:scale-110 sm:hidden"
          />
        )}
      </button>
      {isOpen && <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
