import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

export async function POST(req: NextRequest) {
    const prisma = new PrismaClient()
    const {phone_id, phone_name, phone_color, phone_IMEI, phone_brand_id, phone_storage} = await req.json();

    await prisma.phone.update({
        where: {
            phone_id: parseInt(phone_id)
        },
        data: {
            phone_name: phone_name,
            phone_IMEI: phone_IMEI,
            phone_color: phone_color,
            phone_storage: phone_storage,
            phone_brand_id: phone_brand_id

        },
    })
    return NextResponse.json({ message: 'OK' }, { status: 200 });

}

