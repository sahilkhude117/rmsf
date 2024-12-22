"use client"

import { useRouter } from "next/navigation";

export const HorizontalBox = ({src,alt,content,href}:{src:string;alt:string;content:string;href:string}) => {
  const router = useRouter();
  return (
    <div className="relative w-350 max-w-md h-60 overflow-hidden cursor-pointer rounded-lg shadow-lg" onClick={()=>{
      router.push(href);
    }}>
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full "
      />
      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white text-xl font-semibold">{content}</h3>
      </div>
    </div>
  );
};




  