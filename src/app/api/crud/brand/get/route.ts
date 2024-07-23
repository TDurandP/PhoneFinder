import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

export async function GET(req: NextRequest) {
    const prisma = new PrismaClient()

    const { searchParams } = new URL(req.url);
    const param = searchParams.get('id'); 


    if(param != null){
        const brand = await prisma.brand.findUnique({
            where: {
                brand_id: parseInt(param)
            }
        });
        console.log(brand);
        return NextResponse.json({ brand: brand }, { status: 200 });
    } else return NextResponse.json({ message: "No brand found with this ID."  }, { status: 500 });
    

}

