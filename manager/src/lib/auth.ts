"use server";
import { Authentication } from "@/services/authentication";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.NEXT_PUBLIC_SECRET ?? "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("60min")
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function login(email: string, password: string): Promise<boolean> {
    // Verify credentials && get the user
    const user = { email: email };
    try {
        const resp = await Authentication.login({ email, password });
        const access_token = resp.data.token;
        // console.log("Login", resp.data);
        // Create the session
        const expires = new Date(Date.now() + 2 * 3600 * 1000);
        const session = await encrypt({ user, expires, access_token });

        // Save the session in a cookie
        cookies().set("session", session, { expires, httpOnly: true });
        return true;
    }
    catch (e) {
        console.error("login failed", e);
        return false;
    }
}

export async function updateAccessToken(access_token: string) {
    const expires = new Date(Date.now() + 2 * 3600 * 1000);
    const session = await encrypt({ expires, access_token });

    // Save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {
    // Destroy the session
    // const session = cookies().get("session")?.value;
    // console.log("Session", session);
    cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
    try {
        const session = cookies().get("session")?.value;
        if (!session) return null;
        return await decrypt(session);
    }
    catch (e) {
        // console.error("getSession failed", e);
        return null;
    }
}

export async function updateSession(request: NextRequest) {
    const session = cookies().get("session")?.value;
    // console.log("Session", session);
    if (!session) return;
    // // Refresh the session so it doesn't expire
    // try {
    //     const parsed = await decrypt(session);
    //     parsed.expires = new Date(Date.now() + 2 * 3600 * 1000);
    //     const res = NextResponse.next();
    //     res.cookies.set({
    //         name: "session",
    //         value: await encrypt(parsed),
    //         httpOnly: true,
    //         expires: parsed.expires,
    //     });
    //     return res;
    // }
    // catch (e) {
    //     console.error("updateSession failed", e);
    //     // cookies().set("session", "", { expires: new Date(0) });
    // }
}