'use client';
import { Logo } from './Logo';
import { Button } from './Button';
import { DropdownItem, NavbarItem } from './NavbarItem';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

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
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Menu size={32} strokeWidth={3} />
          </button>
        </div>

        <Dialog open={isMenuOpen} onClose={setIsMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 left-0 z-50 w-3/4 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Image
                src="/images/rms_logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full"
              />
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <X />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
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
            </div>
          </DialogPanel>
        </Dialog>

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
    </nav>
  );
}
