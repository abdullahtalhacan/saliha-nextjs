import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { generateRandomCode, generateTimestamp } from "@/app/utils/helpers";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
    const { data } = await request.json()
    const validation = schema.safeParse(data)
    if(!validation.success) 
        return NextResponse.json(validation.error.errors, {status: 403})
    else {
       try {
        const appointment = await prisma?.appointment.create({
            data: {
                name: data.name,
                surname: data.surname,
                email: data.email,
                phone: data.phone,
                gender: data.gender,
                age: data.age,
                verifyCode: generateRandomCode(),
                schedule: generateTimestamp(data.schedule.year, data.schedule.month, data.schedule.day),
                time: data.timeSlot
            }
        })
        return NextResponse.json(appointment)
       } catch (error) {
        return NextResponse.json(error, {status: 400})
       }
    }
        
}

