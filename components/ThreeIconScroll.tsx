'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, HandHeart, Handshake } from 'lucide-react';
import Image from 'next/image';

const ThreeIconScroll = ({
  src1,
  src2,
  src3,
  alt1,
  alt2,
  alt3,
  size,
}: {
  src1: string;
  src2: string;
  src3: string;
  alt1: string;
  alt2: string;
  alt3: string;
  size: number;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { scrollY } = useScroll();

  // Capture scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'], // Start when section enters and end when it's fully visible
  });

  // Use scrollYProgress to calculate vertical movement
  const yPosition = useTransform(scrollYProgress, [0, 1], [0, -800]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        controls.start('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="w-full">
      {/* Static Top Icon */}
      <div className="flex justify-center items-center">
        <Image src={src1} alt={alt2} width={size} height={size} />
        {/* <GraduationCap color="black" size={200} /> */}
      </div>

      {/* Section for scrolling icons */}
      <div
        ref={sectionRef}
        className="relative mt-12 md:mt-16 lg:mt-20 flex justify-center items-center space-x-2 sm:space-x-5 md:space-x-10 lg:space-x-20"
      >
        <motion.div
          style={{ y: yPosition }}
          className="transform -translate-x-1/2 -translate-y-1/2 mt-40"
        >
          <Image src={src2} alt={alt2} width={size} height={size} />
        </motion.div>
        <motion.div
          style={{ y: yPosition }}
          className="transform -translate-x-1/2 -translate-y-1/2"
        >
          <Image src={src3} alt={alt3} width={size} height={size} />
        </motion.div>
      </div>
    </div>
  );
};

export default ThreeIconScroll;
