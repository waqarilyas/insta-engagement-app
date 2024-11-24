import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { JWT_SECRET_KEY } = process.env;

  const token = req.cookies.get("auth_token");

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const secret = new TextEncoder().encode(JWT_SECRET_KEY);
    const decoded = await jose.jwtVerify(token.value, secret);

    const access_token = decoded.payload?.accessToken;

    const userDataResponse = await fetch(
      `https://graph.instagram.com/me?fields=id,username,name,account_type,media_count,followers_count,follows_count,biography,website,profile_picture_url&access_token=${access_token}`
    );

    const userData = await userDataResponse.json();

    return NextResponse.json({ user: userData });
  } catch (error) {
    console.error("Invalid Token:", error);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
