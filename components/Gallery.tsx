import React from 'react';

export const Gallery = () => {
  const images = [
    {
      src: './images/rm1.jpg',
      title: 'Image of Late Sri Ramanlal Maniyar',
    },
    {
      src: './images/rm2.jpg',
      title: 'Image of Late Sri Ramanlal Maniyar',
    },
    {
      src: './images/rm3.png',
      title: 'Image of Late Sri Ramanlal Maniyar',
    },
    {
      src: './images/rm4.jpg',
      title: 'Shri Ramanbhai with Prime Minister Nehru Ji in School Trip',
    },
  ];

  return (
    <div id="gallery" className="min-h-screen bg-gray-100 py-8 px-4 sm:px-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-800">
        Gallery
      </h1>
      <h3 className="text-lg sm:text-xl font-bold text-center mb-8 text-gray-800">
        PICTORIAL TRIBUTE TO RAMANBHAI
      </h3>
      <div className="columns-1 sm:columns-2 xl:columns-3 gap-4 sm:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative mb-6 overflow-hidden rounded-lg group"
          >
            <img
              src={image.src}
              alt={`Gallery image ${image.title}`}
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            {/* Optional overlay text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-sm sm:text-lg font-medium">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
