'use client';
import { useAnimation, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import Image from 'next/image';

export const IconCard = ({
  title,
  content,
  src,
  alt,
  size,
  isButton,
  href,
}: {
  title: string;
  content: string;
  src: string;
  size: number;
  alt: string;
  isButton?: boolean;
  href?: any;
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
  const yPosition = useTransform(scrollYProgress, [0, 1], [0, -100]);

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
    <div className="mb-20">
      <div
        ref={sectionRef}
        className="relative flex justify-center items-center"
      >
        <motion.div
          style={{ y: yPosition }}
          className="transform -translate-x-1/2 -translate-y-1/2 "
        >
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className="rounded-full"
          />
        </motion.div>
      </div>
      <div className="text-center maz-w-4xl w-full font-bold pl-20 pr-20">
        {title}
      </div>
      <div className="text-center max-w-4xl w-full pl-10 pr-10 pt-2">
        {content}
      </div>
      {isButton ? (
        <div className="relative flex justify-center items-center mt-5">
          <Button href={href} text="Apply Now" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
