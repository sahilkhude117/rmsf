
import razorpayInstance from "@/utils/razorpayInstance";
import { NextResponse } from "next/server";



export const POST = async(req: Request) => {
    const allowedOrigin = "http://localhost:3000"; // Change to your frontend origin in production

    // Handle OPTIONS request for preflight
    if (req.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: {
                "Access-Control-Allow-Origin": allowedOrigin,
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        });
    }
        
    try {
        const body = await req.json();
        const {
            donationId ,
            amount,
            campaign,
            donationType,
            withProcessingFee,
            comment,
            userId
        } = body;

        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt:  `receipt_${donationId}`,
            notes: { campaign,donationType,comment,userId,withProcessingFee },
        };

        const order = await razorpayInstance.orders.create(options);

        return NextResponse.json({
            success: true,
            order
        },{
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": allowedOrigin,
                "Content-Type": "application/json",
            },
        });
    } catch (e:any) {
        return NextResponse.json({
            success: false,
            error: e
        },{
            status: 500,
            headers: {
                "Access-Control-Allow-Origin": allowedOrigin,
                "Content-Type": "application/json",
            },
        });
    }
}