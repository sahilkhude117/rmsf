'use client';
import { Logo } from './Logo';
import { Button } from './Button';
import { DropdownItem, NavbarItem } from './NavbarItem';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Appbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false); // Close the mobile menu
    router.push(href); // Navigate to the page
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-2 py-5">
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="flex items-center">
          <Logo />
        </div>

        {/* Navigation Links Centered */}
        <div
          className={`hidden md:flex md:flex-row md:space-x-8 flex-1 justify-center items-center w-full`}
        >
          <NavbarItem
            href="/home"
            title="HOME"
            onClick={() => handleMenuClick('/home')}
          />
          <DropdownItem href="" title="PROGRAMS" />
          <NavbarItem
            href="/home#certificates"
            title="CERTIFICATES"
            onClick={() => handleMenuClick('/home#certificates')}
          />
          <NavbarItem
            href="/home#gallery"
            title="GALLERY"
            onClick={() => handleMenuClick('/home#gallery')}
          />
          <NavbarItem
            href="/home#about"
            title="ABOUT US"
            onClick={() => handleMenuClick('/home#about')}
          />
        </div>

        {/* Donate Button */}
        <div className="flex items-center">
          <Button href="/donate/donation-form" text="Donate Now" />
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-x-0 top-20 bg-white z-30 shadow-lg md:hidden transition-transform transform duration-300 ease-in-out"
          style={{
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
            width: '250px',
          }}
        >
          <div className="flex flex-col items-start space-y-4 px-4 py-3">
            <NavbarItem
              href="/home"
              title="HOME"
              onClick={() => handleMenuClick('/home')}
            />
            <DropdownItem href="" title="PROGRAMS" />
            <NavbarItem
              href="/home#certificates"
              title="CERTIFICATES"
              onClick={() => handleMenuClick('/home#certificates')}
            />
            <NavbarItem
              href="/home#gallery"
              title="GALLERY"
              onClick={() => handleMenuClick('/home#gallery')}
            />
            <NavbarItem
              href="/home#about"
              title="ABOUT US"
              onClick={() => handleMenuClick('/home#about')}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
