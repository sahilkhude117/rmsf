import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <div>
      <Link href="/" className="flex space-x-1">
        <Image
          src="/images/rms_logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="h-15 w-15"
        />
        <div className="flex flex-col items-left text-black pl-2">
          <div className="font-bold text-xl">RAMANLAL MANIYAR</div>
          <div className="font-semibold">SMRUTI FOUNDATION</div>
        </div>
      </Link>
    </div>
  );
};
