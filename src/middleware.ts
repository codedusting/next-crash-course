// I want to reroute a person visiting dashboard page to the home page,
// if they are not authorise

import { NextResponse } from "next/server";

export function middleware(req: Request) {
  return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: "/dashboard",
};
