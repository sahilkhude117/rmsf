import prisma from "@/utils/db";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const { firstName, lastName, email, country, address, city, postalCode, state } = body;

        const user = await prisma.user.upsert({
            where: {email},
            update: {
                firstName,
                lastName,
                country,
                address,
                city,
                postalCode,
                state,
            },
            create : {
                firstName,
                lastName,
                email,
                country,
                address,
                city,
                postalCode,
                state,
            },
        });

        return NextResponse.json({
            user
        },{
            status: 200
        });
    } catch (e) {
        console.log("Error", e)
        return NextResponse.json({
            error: 'Internal Server Error',
            details: e
        },{
            status: 500
        });
    }
};