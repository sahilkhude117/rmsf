import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, country, address, city, postalCode, state} = req.body;

        try {
            const user = await prisma.user.upsert({
                where: {email},
                update: {firstName, lastName, country,address,city,postalCode, state},
                create: {firstName, lastName, email, country,address,city,postalCode, state}
            });

            res.status(200).json(user);
        } catch (e) {
            console.error('Error Creating/Updating user:',e);
            res.status(500).json({ error: 'Internal Server Error'});
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} not allowed`});
    }
}