import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
import { generateRandomCode, generateTimestamp } from "@/app/utils/helpers";

export async function POST(request: NextRequest) {
  const { data } = await request.json();
  const validation = schema.safeParse(data);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 403 });
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
          date: `${data.date.year}-${data.date.month}-${data.date.day}`,
          time: data.time,
        },
      });
      return NextResponse.json({
        email: appointment.email,
        date: {
          day: data.date.day,
          month: data.date.month,
          year: data.date.year,
        },
        price: 300,
        time: appointment.time,
        verifyCode: appointment.verifyCode,
      });
    } catch (error) {
      return NextResponse.json(error, { status: 400 });
    }
  }
}

export async function PUT(request: NextRequest, { params } : { params: { id : number } }) {
  const body = await request.json()
  return NextResponse.json([{
      id : params.id,
      body
  }])
}
