'use client';
import { DonationBar } from '@/components/donation/DonationBar';
import { setUserInfo } from '@/redux/donationSlice';
import { RootState } from '@/redux/store';
import axios from 'axios';
import { redirect, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import prisma from '@/utils/db';

export default function () {
  const userId = getUserId();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id, userInfo, customAmount, donationType, campaign } = useSelector(
    (state: RootState) => state.donation
  );

  interface RazorpayResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }

  const loadRazorpayScript = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }, []);

  const updateDb = async (payload: any) => {
    const body = await payload.json();
    const { razorpay_order_id } = body;

    // update payment status in database
    try {
      await prisma.payment.create({
        data: {
          donationId: id,
          status: 'SUCCESS',
          transactionId: razorpay_order_id,
          details: {},
        },
      });

      await prisma.donation.update({
        where: { id: id },
        data: {
          paymentStatus: 'SUCCESS',
          transactionId: razorpay_order_id,
        },
      });
    } catch (dbError) {
      console.error('Database update failed:', dbError);
      return;
    }
  };

  const handlePayment = useCallback(
    async (order: any) => {
      const options = {
        key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
        amount: order.amount,
        currency: 'INR',
        name: 'Ramanlal Maniyar Smruti Foundation, Gadhinglaj',
        description: 'Donation',
        order_id: order.id,
        handler: async (response: RazorpayResponse) => {
          const payload = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          try {
            const verify = await axios.post('/api/payment/verify', payload, {
              headers: { 'Content-Type': 'application/json' },
            });
            if (verify.data.success) {
              alert("Payment verified succesfully")
              updateDb(payload);
            } else {
              alert('Payment verification failed!');
            }
          } catch (e) {
            console.error('Verification error:', e);
            alert('Payment verification failed!');
          }
        },
        prefill: {
          name: `${userInfo.firstName} ${userInfo.lastName}`,
          email: userInfo.email,
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    },
    [userInfo]
  );

  const handleClick = async () => {
    setLoading(true);
    try {
      await onDonate();
    } catch (error) {
      console.error('Error in onClick:', error);
    } finally {
      setLoading(false);
    }
  };

  const onDonate = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const isLoaded = await loadRazorpayScript();
        if (!isLoaded) {
          reject(new Error('Failed to load Razorpay. Please try again later.'));
          alert('Failed to load Razorpay. Please try again later.');
          return;
        }

        const donationDetails = {
          userId: Number(userId),
          amount: customAmount,
          donationType,
          campaign,
          withProcessingFee: userInfo.includeProcessing,
          comment: userInfo.comment,
        };

        const donationId = await axios
          .post('/api/donation', donationDetails)
          .then((res) => res.data.donation.id)
          .catch((err) => {
            console.error('Donation creation failed', err);
            reject(new Error('Donation creation failed'));
          });

        const orderDetails = {
          userId: Number(userId),
          amount: customAmount,
          donationType,
          campaign,
          withProcessingFee: userInfo.includeProcessing,
          comment: userInfo.comment,
          donationId: Number(donationId),
        };

        try {
          const response = await axios.post(
            '/api/payment/create',
            orderDetails
          );
          const order = response.data.order;
          await handlePayment(order);
          resolve('Success');
        } catch (e) {
          console.error('Error creating order', e);
          reject(new Error('Order creation failed'));
        }
      } catch (e) {
        console.error('Error during donation process:', e);
        alert(
          'An error occurred during the donation process. Please try again.'
        );
        reject(
          new Error(
            'An error occurred during the donation process. Please try again.'
          )
        );
      }
    });
  };

  const handleCheckboxChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      setUserInfo({
        includeProcessing: e.target.checked,
      })
    );
  };

  return (
    <div>
      <DonationBar
        title="Payment"
        currentPage={3}
        hrefPrev="/donate/user-information"
      >
        <div className="flex justify-center items-center m-10">
          <div className="flex m-20">
            <button
              onClick={handleClick}
              type="button"
              className={`text-white font-bold text-xl rounded-lg px-5 py-3 text-center bg-amber-500 `}
            >
              {loading ? (
                <PulseLoader color="#fff" size={12} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="30"
                  fill="#072654"
                  viewBox="0 0 1896 401"
                  id="razorpay"
                >
                  <path
                    fill="#3395FF"
                    d="m122.63 105.7-15.75 57.97 90.15-58.3-58.96 219.98 59.88.05L285.05.48"
                  ></path>
                  <path d="M25.6 232.92.8 325.4h122.73l50.22-188.13L25.6 232.92m426.32-81.42c-3 11.15-8.78 19.34-17.4 24.57-8.6 5.22-20.67 7.84-36.25 7.84h-49.5l17.38-64.8h49.5c15.56 0 26.25 2.6 32.05 7.9 5.8 5.3 7.2 13.4 4.22 24.6m51.25-1.4c6.3-23.4 3.7-41.4-7.82-54-11.5-12.5-31.68-18.8-60.48-18.8H324.4l-66.5 248.1h53.67l26.8-100h35.2c7.9 0 14.12 1.3 18.66 3.8 4.55 2.6 7.22 7.1 8.04 13.6l9.58 82.6h57.5l-9.32-77c-1.9-17.2-9.77-27.3-23.6-30.3 17.63-5.1 32.4-13.6 44.3-25.4a92.6 92.6 0 0 0 24.44-42.5m130.46 86.4c-4.5 16.8-11.4 29.5-20.73 38.4-9.34 8.9-20.5 13.3-33.52 13.3-13.26 0-22.25-4.3-27-13-4.76-8.7-4.92-21.3-.5-37.8 4.42-16.5 11.47-29.4 21.17-38.7 9.7-9.3 21.04-13.95 34.06-13.95 13 0 21.9 4.5 26.4 13.43 4.6 8.97 4.7 21.8.2 38.5zm23.52-87.8-6.72 25.1c-2.9-9-8.53-16.2-16.85-21.6-8.34-5.3-18.66-8-30.97-8-15.1 0-29.6 3.9-43.5 11.7-13.9 7.8-26.1 18.8-36.5 33-10.4 14.2-18 30.3-22.9 48.4-4.8 18.2-5.8 34.1-2.9 47.9 3 13.9 9.3 24.5 19 31.9 9.8 7.5 22.3 11.2 37.6 11.2a82.4 82.4 0 0 0 35.2-7.7 82.11 82.11 0 0 0 28.4-21.2l-7 26.16h51.9L709.3 149h-52zm238.65 0H744.87l-10.55 39.4h87.82l-116.1 100.3-9.92 37h155.8l10.55-39.4h-94.1l117.88-101.8m142.4 52c-4.67 17.4-11.6 30.48-20.75 39-9.15 8.6-20.23 12.9-33.24 12.9-27.2 0-36.14-17.3-26.86-51.9 4.6-17.2 11.56-30.13 20.86-38.84 9.3-8.74 20.57-13.1 33.82-13.1 13 0 21.78 4.33 26.3 13.05 4.52 8.7 4.48 21.67-.13 38.87m30.38-80.83c-11.95-7.44-27.2-11.16-45.8-11.16-18.83 0-36.26 3.7-52.3 11.1a113.09 113.09 0 0 0-41 32.06c-11.3 13.9-19.43 30.2-24.42 48.8-4.9 18.53-5.5 34.8-1.7 48.73 3.8 13.9 11.8 24.6 23.8 32 12.1 7.46 27.5 11.17 46.4 11.17 18.6 0 35.9-3.74 51.8-11.18 15.9-7.48 29.5-18.1 40.8-32.1 11.3-13.94 19.4-30.2 24.4-48.8 5-18.6 5.6-34.84 1.8-48.8-3.8-13.9-11.7-24.6-23.6-32.05m185.1 40.8 13.3-48.1c-4.5-2.3-10.4-3.5-17.8-3.5-11.9 0-23.3 2.94-34.3 8.9-9.46 5.06-17.5 12.2-24.3 21.14l6.9-25.9-15.07.06h-37l-47.7 176.7h52.63l24.75-92.37c3.6-13.43 10.08-24 19.43-31.5 9.3-7.53 20.9-11.3 34.9-11.3 8.6 0 16.6 1.97 24.2 5.9m146.5 41.1c-4.5 16.5-11.3 29.1-20.6 37.8-9.3 8.74-20.5 13.1-33.5 13.1s-21.9-4.4-26.6-13.2c-4.8-8.85-4.9-21.6-.4-38.36 4.5-16.75 11.4-29.6 20.9-38.5 9.5-8.97 20.7-13.45 33.7-13.45 12.8 0 21.4 4.6 26 13.9 4.6 9.3 4.7 22.2.28 38.7m36.8-81.4c-9.75-7.8-22.2-11.7-37.3-11.7-13.23 0-25.84 3-37.8 9.06-11.95 6.05-21.65 14.3-29.1 24.74l.18-1.2 8.83-28.1h-51.4l-13.1 48.9-.4 1.7-54 201.44h52.7l27.2-101.4c2.7 9.02 8.2 16.1 16.6 21.22 8.4 5.1 18.77 7.63 31.1 7.63 15.3 0 29.9-3.7 43.75-11.1 13.9-7.42 25.9-18.1 36.1-31.9 10.2-13.8 17.77-29.8 22.6-47.9 4.9-18.13 5.9-34.3 3.1-48.45-2.85-14.17-9.16-25.14-18.9-32.9m174.65 80.65c-4.5 16.7-11.4 29.5-20.7 38.3-9.3 8.86-20.5 13.27-33.5 13.27-13.3 0-22.3-4.3-27-13-4.8-8.7-4.9-21.3-.5-37.8 4.4-16.5 11.42-29.4 21.12-38.7 9.7-9.3 21.05-13.94 34.07-13.94 13 0 21.8 4.5 26.4 13.4 4.6 8.93 4.63 21.76.15 38.5zm23.5-87.85-6.73 25.1c-2.9-9.05-8.5-16.25-16.8-21.6-8.4-5.34-18.7-8-31-8-15.1 0-29.68 3.9-43.6 11.7-13.9 7.8-26.1 18.74-36.5 32.9-10.4 14.16-18 30.3-22.9 48.4-4.85 18.17-5.8 34.1-2.9 47.96 2.93 13.8 9.24 24.46 19 31.9 9.74 7.4 22.3 11.14 37.6 11.14 12.3 0 24.05-2.56 35.2-7.7a82.3 82.3 0 0 0 28.33-21.23l-7 26.18h51.9l47.38-176.7h-51.9zm269.87.06.03-.05h-31.9c-1.02 0-1.92.05-2.85.07h-16.55l-8.5 11.8-2.1 2.8-.9 1.4-67.25 93.68-13.9-109.7h-55.08l27.9 166.7-61.6 85.3h54.9l14.9-21.13c.42-.62.8-1.14 1.3-1.8l17.4-24.7.5-.7 77.93-110.5 65.7-93 .1-.06h-.03z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </DonationBar>
    </div>
  );
}

async function getUserId() {
  const searchParams = await useSearchParams();
  const userId = await searchParams.get('userId');
  return userId;
}
