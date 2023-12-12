'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = async(request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlDash = new URL('/pages/dashboard', request.url)
    const urlRegister = new URL('/pages/registrar', request.url)
    const urlAlter = new URL('/pages/alter', request.url)
    const isTokenValidated = await validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/registrar') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/alter') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (isTokenValidated || token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlDashboard);
        }
    }
    if (isTokenValidated || token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlRegister);
        }
    }
    if (isTokenValidated || token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlAlter);
        }
    }
    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/registrar', '/pages/alter']
};

