'use client';
import { useRouter } from 'next/navigation';

export const ProgramCard = ({
  src,
  title,
  content,
  href,
}: {
  src: string;
  title: string;
  content: string;
  href: string;
}) => {
  const router = useRouter();
  return (
    <div
      className="w-full mt-4 flex items-center justify-center cursor-pointer transform transition duration-500 hover:scale-110 "
      onClick={() => {
        router.push(href);
      }}
    >
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div>
          <img
            className="object-cover w-full h-48 sm:h-56 md:h-64"
            src={src}
            alt={title}
          />
        </div>

        <div className="flex flex-col gap-1 mt-3 p-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{title}</h2>
          <span className="font-normal text-sm sm:text-base pb-5">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
};
