import Razorpay from "razorpay";
import prisma from "@/utils/db";
import crypto from 'crypto';
import { NextResponse } from "next/server";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || "",
    key_secret : process.env.RAZORPAY_KEY_SECRET || "",
});

export const POST = async (req: Request) => {
    const { id } = useSelector((state: RootState) => state.donation); 
    try {
        const body = await req.json();
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = body;

        //validate signature
        const generatedSignature = crypto
            .createHmac("sha256",process.env.RAZORPAY_KEY_SECRET || "")
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (generatedSignature !== razorpay_signature) {
            return NextResponse.json({
                succes:false,
                error:"Invalid signature"
            },{
                status: 400
            });
        }

        //update payment status in database
        let payment;
        try {
            await prisma.payment.create({
                data: {
                    donationId : id,
                    status : "SUCCESS",
                    transactionId : razorpay_order_id,
                    details: {},
                },
            });

            await prisma.donation.update({
                where:{id:id},
                data : {
                    paymentStatus:"SUCCESS",
                    transactionId : razorpay_order_id,
                }
            })
        } catch (dbError){
            console.error("Database update failed:", dbError);
            return NextResponse.json({
                success: false,
                erro: "Database Error",
            },{ status: 500})
        }

        return NextResponse.json({
            success : true,
            payment
        },{
            status: 200
        });
    } catch (e){
        console.error("Error verifying payment", e);
        return NextResponse.json({
            success: false,
            error: "Internal Server Error"
        },{
            status:500
        });
    }
};