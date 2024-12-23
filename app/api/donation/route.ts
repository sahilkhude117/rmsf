import prisma from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method === 'POST'){
        const {
            userId,
            amount,
            donationType,
            withProcessingFee,
            comment,
        } = req.body;

        try {
            const donation = await prisma.donation.create({
                data: {
                    userId,
                    amount,
                    donationType,
                    withProcessingFee,
                    comment,
                },
            });

            res.status(201).json(donation);
        } catch (e){
            console.error('Error creating donation:' , e);
            res.status(500).json({error: 'Internal Server Error'});
        }
    } else {
        res.setHeader('Allow',['POST']);
        res.status(405).json({error: `Method ${req.method} not allowed`});
    }
}