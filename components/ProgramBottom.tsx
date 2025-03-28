import Link from 'next/link';
import { Button } from './Button';

export const ProgramBottom = ({
  text,
  href,
}: {
  text: string;
  href: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-10">
      <div className="m-10">
        <Button href={href} text={text} />
      </div>
      <div className="text-center sm:text-left">
        <div className="text-3xl sm:text-4xl font-semibold">FOR SUPPORT</div>
        <div className="text-xl mt-2 mb-2">write to</div>
        <Link
          href="mailto:rmsfoundationindia@gmail.com"
          className="cursor-pointer font-bold hover:underline"
        >
          rmsfoundationindia@gmail.com
        </Link>
      </div>
    </div>
  );
};
