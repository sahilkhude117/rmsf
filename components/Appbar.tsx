import { Logo } from './Logo';
import { Button } from './Button';
import { DropdownItem, NavbarItem } from './NavbarItem';

export default function Appbar() {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-2 py-5">
        {/* Logo Section */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Navigation Links Centered */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <NavbarItem href="/home" title="HOME" />
          <DropdownItem href="" title="PROGRAMS" />
          <NavbarItem href="/home#certificates" title="CERTIFICATES" />
          <NavbarItem href="/home#gallery" title="GALLERY" />
          <NavbarItem href="/home#about" title="ABOUT US" />
        </div>

        {/* Donate Button */}
        <div className="flex items-center ml-auto">
          <Button href="/donate/donation-form" text="Donate Now" />
        </div>
      </div>
    </nav>
  );
}
