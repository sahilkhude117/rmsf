'use client'
import { div } from 'framer-motion/client';
import { Divide } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

export const ImpactCard = ({
  Number,
  Unit,
  Content,
}: {
  Number: string;
  Unit: string;
  Content: string;
}) => {
  const [startCount, setStartCount] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // Stop observing once it starts
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="max-w-sm mx-auto p-5 bg-gray-100 text-center">
      <div className="text-center text-8xl font-bold max-w-4xl w-full text-orange-600">
        {startCount ? (
          <div><CountUp end={parseFloat(Number)} duration={2.5} />{`+`}</div>
        ) : (
          Number // Default state before starting
        )}
      </div>
      <div className="text-center text-3xl font-semibold max-w-4xl mt-5 w-full text-orange-600">
        {Unit.toUpperCase()}
      </div>
      <p className="text-gray-600 m-4 max-w-4xl text-center">{Content}</p>
    </div>
  );
};

