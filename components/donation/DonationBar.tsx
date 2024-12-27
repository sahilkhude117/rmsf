'use client';
import { ArrowLeft, ArrowRight, BadgeCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

export const DonationBar = ({
  title,
  hrefPrev,
  onNext,
  currentPage,
  children,
}: {
  title: string;
  hrefPrev: string;
  onNext: any;
  currentPage: number;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const page = currentPage;

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md pb-5">
          <div className="p-5 bg-blue-500 flex justify-center items-center text-xl text-white">
            <div
              onClick={() => {
                router.push(hrefPrev);
              }}
              className={`mr-auto cursor-pointer`}
            >
              {' '}
              {page === 1 ? <BadgeCheck /> : <ArrowLeft />}
            </div>
            <div className="">{title}</div>
            <div onClick={onNext} className="ml-auto cursor-pointer">
              {page === 3 ? <div></div> : <ArrowRight />}
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
