import Razorpay from 'razorpay';
import crypto from 'crypto';
import { NextResponse } from 'next/server';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    //validate signature
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        {
          succes: false,
          error: 'Invalid signature',
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        // payment,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.error('Error verifying payment', e);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal Server Error',
      },
      {
        status: 500,
      }
    );
  }
};
