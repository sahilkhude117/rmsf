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
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-100">
        <div>
          <img
            className="object-cover h-64 w-full"
            src={src}
            alt="Converse sneakers"
          />
        </div>

        <div className="flex flex-col gap-1 mt-3 p-4">
          <h2 className="text-2xl font-bold ">{title}</h2>
          <span className="font-normal pb-5">{content}</span>
        </div>
      </div>
    </div>
  );
};
