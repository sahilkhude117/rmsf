import prisma from '@/utils/db';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const {
      userId,
      amount,
      campaign,
      donationType,
      withProcessingFee,
      comment,
    } = body;

    const donation = await prisma.donation.create({
      data: {
        userId,
        amount,
        campaign,
        donationType,
        withProcessingFee,
        comment,
      },
    });

    return NextResponse.json(
      {
        donation,
      },
      {
        status: 201,
      }
    );
  } catch (e) {
    console.log('Error', e);
    return NextResponse.json(
      {
        error: 'Internal Server Error',
        details: e,
      },
      {
        status: 500,
      }
    );
  }
};
