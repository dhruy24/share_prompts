import { NextRequest, NextResponse } from "next/server";

export function middleware(req){
    const token = req.cookies.get("session")
    const url = req.nextUrl.clone();
    console.log("tokennnnnn", token)

    if(!token && url.pathname !=="/login"){
        url.pathname = '/login'
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard"]
}