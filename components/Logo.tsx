import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center space-x-2 md:space-x-4">
        <Image
          src="/images/rms_logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full"
        />
        <div className="flex flex-col items-left text-black">
          <div className="font-bold text-xs sm:text-base ">
            RAMANLAL MANIYAR
          </div>
          <div className="font-semibold text-xs sm:text-medium">
            SMRUTI FOUNDATION
          </div>
        </div>
      </Link>
    </div>
  );
};
