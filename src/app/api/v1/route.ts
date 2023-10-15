/**
 * GET, POST, PUT, PATCH, DELETE, OPTION
 */

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "I overwrite the layout and page files",
  });
}
