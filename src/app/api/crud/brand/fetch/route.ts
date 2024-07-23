import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

export async function GET(req: NextRequest) {
    const prisma = new PrismaClient()

    const brands = await prisma.brand.findMany();

    console.log(brands);
    return NextResponse.json({ brands: brands }, { status: 200 });
}

