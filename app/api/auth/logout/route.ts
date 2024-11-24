import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const response = NextResponse.json({ success: true }, { status: 200 });

  // Clear the auth cookie
  response.cookies.delete("auth_token");

  return response;
}
