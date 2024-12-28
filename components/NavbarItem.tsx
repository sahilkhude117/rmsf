'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const NavbarItem = ({
  href,
  title,
  onClick,
}: {
  href: string;
  title: string;
  onClick: any;
}) => {
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <div className={`flex cursor-pointer pl-4`} onClick={onClick}>
      <div className="group relative font-extrabold">
        {/* Title */}
        <div className={`text-black`}>{title}</div>

        {/* Underline */}
        <div
          className={`absolute -rotate-2 left-0 bottom-0 h-[5px] bg-blue-600 transition-all duration-500 ${
            selected ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        ></div>
      </div>
    </div>
  );
};

export const DropdownItem = ({
  href,
  title,
}: {
  href: string;
  title: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const pathsplit = pathname.split('/');
  const basepath = pathsplit[1] || '';
  const selected = basepath === 'programs';

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="flex cursor-pointer pl-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown button */}
      <div className="group relative font-extrabold">
        {/* Title */}
        <div className={`text-black`}>{title}</div>

        {/* Underline */}
        <div
          className={`absolute -rotate-2 left-0 bottom-0 h-[4px] bg-blue-600 transition-all duration-500 ${
            selected ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        ></div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute z-10 mt-7 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdownHoverButton"
        >
          <ul className="py-2">
            <li>
              <a
                href="/programs/education"
                className="block px-5 py-2 flex justify-center items-center hover:text-blue-600 font-extrabold"
                role="menuitem"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="/programs/health"
                className="block px-5 py-2 flex justify-center items-center hover:text-blue-600 font-extrabold"
                role="menuitem"
              >
                Health
              </a>
            </li>
            <li>
              <a
                href="/programs/cooperation"
                className="block px-5 py-2 flex justify-center items-center hover:text-blue-600 font-extrabold"
                role="menuitem"
              >
                Cooperation
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
