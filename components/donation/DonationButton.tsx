'use client';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { PulseLoader } from 'react-spinners';

export const DonationButton = ({
  title,
  isLast,
  onClick,
}: {
  title: string;
  isLast: boolean;
  onClick: () => Promise<any>;
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onClick();
    } catch (error) {
      console.error('Error in onClick:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-5">
      <button
        onClick={handleClick}
        className="w-full px-4 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition-all duration-150"
        disabled={loading}
      >
        {loading ? (
          <PulseLoader color="#fff" size={10} />
        ) : (
          <div className="flex justify-center items-center text-xl">
            <div className="mr-auto"></div>
            <div>{title}</div>
            <div className="ml-auto">
              {isLast ? <div></div> : <ArrowRight />}
            </div>
          </div>
        )}
      </button>
    </div>
  );
};
