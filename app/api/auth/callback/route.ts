import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

interface TokenResponse {
  access_token: string;
  user_id: number;
}

interface UserData {
  id: string;
  username: string;
}

export async function GET(req: NextRequest) {
  const {
    INSTAGRAM_CLIENT_ID,
    INSTAGRAM_CLIENT_SECRET,
    JWT_SECRET_KEY,
    REDIRECT_URL,
  } = process.env;

  if (
    !INSTAGRAM_CLIENT_ID ||
    !INSTAGRAM_CLIENT_SECRET ||
    !JWT_SECRET_KEY ||
    !REDIRECT_URL
  ) {
    console.error("Missing required environment variables");
    return NextResponse.redirect(
      new URL("/?error=ServerConfiguration", req.url)
    );
  }

  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(
      new URL("/?error=AuthorizationCodeMissing", req.url)
    );
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch(
      "https://api.instagram.com/oauth/access_token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: INSTAGRAM_CLIENT_ID,
          client_secret: INSTAGRAM_CLIENT_SECRET,
          grant_type: "authorization_code",
          redirect_uri: REDIRECT_URL,
          code,
        }),
      }
    );

    const tokenData: TokenResponse = await tokenResponse.json();

    // Fetch user data
    const userDataResponse = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${tokenData.access_token}`
    );

    const userData: UserData = await userDataResponse.json();

    // Create JWT using jose
    const secret = new TextEncoder().encode(JWT_SECRET_KEY);
    const alg = "HS256";

    const token = await new jose.SignJWT({
      accessToken: tokenData.access_token,
      user: userData,
    })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);

    // Create response with redirect
    const response = NextResponse.redirect(new URL("/dashboard", req.url));

    // Set the cookie
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Error in Authorization Callback:", error);
    return NextResponse.redirect(new URL("/?error=ServerError", req.url));
  }
}
