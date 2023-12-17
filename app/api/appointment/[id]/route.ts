import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, { params } : { params: { id : number } }) {
    return NextResponse.json(params.id)
}

export async function PUT(request: NextRequest, { params } : { params: { id : number } }) {
    const body = await request.json()
    return NextResponse.json([{
        id : params.id,
        body
    }])
}