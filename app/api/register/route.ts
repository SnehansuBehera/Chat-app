import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return new NextResponse("Missing info", { status: 500 });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword
            }
        })
        return NextResponse.json(user);
    } catch (error) {
        console.log(error, 'REGISTRATION_ERROR');
        return new NextResponse('Internal error', { status: 500 });
    }

}