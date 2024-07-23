import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

export async function GET(req: NextRequest) {
    const prisma = new PrismaClient()

    const { searchParams } = new URL(req.url);
    const param = searchParams.get('id'); 

    
    if(param != null){
        await prisma.phone.delete({
            where: {
                phone_id: parseInt(param)
            }
        })
        return NextResponse.json({ message: 'Phone successfully deleted.' }, { status: 200 });
    } else return NextResponse.json({ message: "No phone found with this ID."  }, { status: 500 });


}

