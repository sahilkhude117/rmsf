'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { HorizontalBox } from './HorizontalBox';

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['30%', '-50%']);

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] mb-10"
      id="certificates"
    >
      <div className="sticky top-10 bottom-20 flex h-[450px] items-center flex-col overflow-hidden">
        <h2 className="text-center mt-20 mb-10 font-extrabold text-5xl">
          CERTIFICATES
        </h2>
        <motion.div style={{ x }} className="flex gap-10 h-60 w-200">
          <HorizontalBox
            src="/images/animated/home/stamp.gif"
            alt="Trust Registration Certificate"
            content="Trust Registration Certificate"
            href="https://rmsfoundationindia.org/docs/RMSF_trust_certi.pdf"
          />
          <HorizontalBox
            src="/images/animated/home/certificate.gif"
            alt="PAN Card"
            content="PAN Card"
            href="/docs/PAN.pdf"
          />
          <HorizontalBox
            src="/images/animated/home/tax.gif"
            alt="Form 10 AC"
            content="Form 10 AC"
            href="/docs/form-10.pdf"
          />
          <HorizontalBox
            src="/images/animated/home/bank.gif"
            alt="Bank Account Details"
            content="Bank Account Details"
            href="/docs/bank_acc.pdf"
          />
        </motion.div>
      </div>
    </section>
  );
}
