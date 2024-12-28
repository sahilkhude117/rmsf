'use client';

import Image from 'next/image';

const ProgramTitle = ({
  title,
  src,
  alt,
}: {
  title: string;
  src: string;
  alt: string;
}) => {
  return (
    <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] overflow-hidden">
      {/* Image background */}
      <div className="absolute inset-0 z-[-1]">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" priority />
      </div>

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex justify-center items-center">
        <p className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center pt-10 md:pt-0">
          {title}
        </p>
      </div>

      {/* Bottom tilted effect */}
      <svg
        className="absolute bottom-0 left-0 w-full h-10 sm:h-24 lg:h-28"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 100,50 100,100 0,100" fill="white" />
      </svg>
    </div>
  );
};

export default ProgramTitle;
