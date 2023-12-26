import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
    const { data } = await request.json();
    const validation = schema.safeParse(data)

    if(!validation.success) return NextResponse.json(validation.error.errors, { status: 403 });
    else{
        try {
            const appointmentData = await prisma.appointment.findMany({
                where: {
                    email: data.email,
                    verifyCode: data.verifyCode
                },
            })
            return NextResponse.json(appointmentData[0]);
        } catch (error) {
            return NextResponse.json(error, { status: 400 });
        }
        
    }
}