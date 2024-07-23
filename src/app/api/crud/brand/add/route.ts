import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

export async function POST(req: NextRequest) {
    const prisma = new PrismaClient()
    const {brand_label} = await req.json();


    if(brand_label == "") return NextResponse.json({ error: 'Please provide a valid brand label' }, { status: 500 });


    const foundBrand = await prisma.brand.findFirst({
        where: {
            brand_label: brand_label
        }
    });

    if(foundBrand == null){
        await prisma.brand.create({
            data: {
                brand_label: brand_label,
    
            },
        })
        return NextResponse.json({ error: 'OK' }, { status: 200 });
    } else {
        return NextResponse.json({ error: 'The specified brand already exists.' }, { status: 500 });
    }





}

