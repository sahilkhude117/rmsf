import Image from 'next/image';

export const Carousel = () => {
  return (
    <div id="home mt-20">
      <Image
        src="/images/home.jpg"
        alt="Description of the image"
        width={2000}
        height={800}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};
