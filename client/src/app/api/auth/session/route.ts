import { getSession } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const session = await getSession()
    if (!session) {
        return NextResponse.json({}, { status: 200 })
    }
    return NextResponse.json(session, { status: 200 })
}