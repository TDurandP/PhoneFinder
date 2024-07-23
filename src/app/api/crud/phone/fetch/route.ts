import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

export async function GET(req: NextRequest) {
    const prisma = new PrismaClient()

    const phones = await prisma.phone.findMany();

    console.log(phones);
    return NextResponse.json({ phones: phones }, { status: 200 });
}

