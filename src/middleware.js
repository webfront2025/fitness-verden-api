
// // src/middleware.js
// import { NextResponse } from "next/server"

// export function middleware(request) {
// 	const token = request.cookies.get("fitness_token")
// 	const uid = request.cookies.get("fitness_uid")

// 	if (!(token && uid)) {
// 		return NextResponse.redirect(new URL("/", request.url))
// 	}
// }

// export const config = {
// 	matcher: '/kalender/:path*'
// }
import { NextResponse } from "next/server"

export function middleware(request) {
	const token = request.cookies.get("fitness_token")
	const uid = request.cookies.get("fitness_uid")

	// console.log("token",token);
	

	// if (!request.cookies.has("fitness_token") || !request.cookies.has("fitness_uid")) {
	// 	return NextResponse.redirect(new URL("/login", request.url))
	// }
}

export const config = {
	matcher: '/kalender/:path*'
}
