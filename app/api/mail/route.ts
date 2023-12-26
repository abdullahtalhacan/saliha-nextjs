import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "../../components/EmailTemplate";

const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    message: z.string()
})

export async function POST(request: NextRequest) {
    const { data } = await request.json()
    const validation = schema.safeParse(data)

    if(!validation.success){
        return NextResponse.json(validation.error.errors, {status: 403})
    }else {
        const resend = new Resend(process.env.RESEND_API_KEY)
        try {
            //@ts-ignore
            const data = await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: ['abdullahcanf4@hotmail.com'],
                subject: 'Hello world',
                react: EmailTemplate({ firstName: 'John' }),
              });
              return NextResponse.json(data, {status: 200})
        } catch (error) {
            return NextResponse.json(error, {status: 400})
        }
    }
}