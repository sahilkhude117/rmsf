import React from "react";

export const Gallery = () => {
  const images = [
    {
        src : "./images/rm1.jpg",
        title: "Image of Late Sri Ramanlal Maniyar"
    },
    {
        src : "./images/rm2.jpg",
        title: "Image of Late Sri Ramanlal Maniyar"
    },
    {
        src : "./images/rm3.png",
        title: "Image of Late Sri Ramanlal Maniyar"
    },
    {
        src : "./images/rm4.jpg",
        title: "Shri Ramanbhai with Prime Minister Nehru Ji in School Trip"
    },
    
  ];

  return (
    <div id="gallery" className="min-h-screen bg-gray-100 py-8 px-10">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Gallery</h1>
      <h3 className="text-xl u font-bold text-center mb-8 text-gray-800">PICTORIAL TRIBUTE TO RAMANBHAI</h3>
      <div className="columns-1 md:columns-2 xl:columns-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative mb-6 break-inside-avoid overflow-hidden rounded-lg group"
          >
            <img
              src={image.src}
              alt={`Gallery image ${image.title }`}
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            {/* Optional overlay text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-lg font-medium">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
