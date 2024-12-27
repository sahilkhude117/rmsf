'use client';
import { ArrowRight } from 'lucide-react';

export const DonationButton = ({
  title,
  isLast,
  onClick,
}: {
  title: string;
  isLast: boolean;
  onClick: any;
}) => {
  return (
    <div className="m-5">
      <button
        onClick={onClick}
        className="w-full px-4 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition-all duration-150"
      >
        <div className="flex justify-center items-center text-xl">
          <div className="mr-auto"></div>
          <div>{title}</div>
          <div className="ml-auto">{isLast ? <div></div> : <ArrowRight />}</div>
        </div>
      </button>
    </div>
  );
};
