import { IconCard } from './IconCard';
import { Paragraph } from './Paragraph';

export const WhatWeDo = ({
  title,
  content,
  IconTitle1,
  IconTitle2,
  IconContent1,
  IconContent2,
  src1,
  alt1,
  size1,
  src2,
  alt2,
  size2,
  isButton,
  href1,
  href2,
}: {
  title: string;
  content: string;
  IconTitle1: string;
  IconTitle2: string;
  IconContent1: string;
  IconContent2: string;
  src1: string;
  src2: string;
  alt1: string;
  alt2: string;
  size1: number;
  size2: number;
  isButton: boolean;
  href1?: any;
  href2?: any;
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Top tilted effect */}
      <svg
        className="absolute top-0 left-0 w-full h-16 z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,100 100,50 100,0 0,0" fill="white" />
      </svg>

      {/* Main Content */}
      <div className="bg-blue-500 bg-opacity-50">
        <div className=" flex justify-center items-center">
          <p className="text-black text-6xl font-extrabold mt-20 mb-5">
            {title}
          </p>
        </div>
        <div>
          <Paragraph content={content} />
        </div>
        <div className="grid grid-cols-2 mt-20 pl-80 pr-80">
          <IconCard
            title={IconTitle1}
            content={IconContent1}
            src={src1}
            alt={alt1}
            size={size1}
            isButton={isButton}
            href={href1}
          />
          <IconCard
            title={IconTitle2}
            content={IconContent2}
            src={src2}
            alt={alt2}
            size={size2}
            isButton={isButton}
            href={href2}
          />
        </div>
      </div>
    </div>
  );
};
