'use client';
import { useEffect } from 'react';

export const useLoadRazorpay = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => console.log('Razorpay script loaded');
    script.onerror = (error) =>
      console.error('Error loading Razorpay script', error);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};
