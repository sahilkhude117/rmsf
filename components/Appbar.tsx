'use client';
import { Logo } from './Logo';
import { Button } from './Button';
import { DropdownItem, NavbarItem } from './NavbarItem';
import { useState } from 'react';

export default function Appbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-2 py-5">
        {/* Logo Section */}
        <div className="flex items-center">
          <Logo />
        </div>

        <button
          className="md:hidden text-gray-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links Centered */}
        <div
          className={`flex-col md:flex md:flex-row md:space-x-8 ${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex-1 justify-center items-center w-full md:w-auto`}
        >
          <NavbarItem href="/home" title="HOME" />
          <DropdownItem href="" title="PROGRAMS" />
          <NavbarItem href="/home#certificates" title="CERTIFICATES" />
          <NavbarItem href="/home#gallery" title="GALLERY" />
          <NavbarItem href="/home#about" title="ABOUT US" />
        </div>

        {/* Donate Button */}
        <div className="hidden md:flex items-center">
          <Button href="/donate/donation-form" text="Donate Now" />
        </div>
      </div>
    </nav>
  );
}
