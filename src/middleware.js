'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlDash = new URL('/pages/dashboard', request.url)
    const urlRegister = new URL('/pages/registrar', request.url)
    const urlAlterar = new URL('/pages/alterar', request.url)
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/alterar') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/registrar') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (isTokenValidated || token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlDash);
        }
    }
    if (isTokenValidated || token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlRegister);
        }
    }
    if (isTokenValidated || token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlAlterar);
        }
    }


    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/alterar', '/pages/registrar']
};

