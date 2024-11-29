// File: app/api/instagram/followers/route.ts
import axios from "axios";
import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { JWT_SECRET_KEY } = process.env;

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("user_id");

  const token = req.cookies.get("auth_token");

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const secret = new TextEncoder().encode(JWT_SECRET_KEY);
    const decoded = await jose.jwtVerify(token.value, secret);

    const access_token = decoded.payload?.accessToken as string;

    if (!access_token) {
      return NextResponse.json(
        { error: "No access token found" },
        { status: 401 }
      );
    }

    // Fetch user followers
    const response = await axios.get(
      `https://graph.facebook.com/v17.0/${userId}/followers`,
      {
        params: {
          access_token: access_token,
        },
      }
    );

    return NextResponse.json({
      followers: response.data.data,
      paging: response.data.paging,
    });
  } catch (error) {
    console.error("Error fetching Instagram followers:", error);

    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      return NextResponse.json(
        {
          error: "Failed to fetch followers",
          details: error.response?.data,
        },
        { status: error.response?.status || 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to fetch followers" },
      { status: 500 }
    );
  }
}

// Type definitions for followers
export interface InstagramFollower {
  id: string;
  username: string;
  profile_picture_url?: string;
}

export interface InstagramFollowersResponse {
  data: InstagramFollower[];
  paging?: {
    cursors?: {
      before: string;
      after: string;
    };
    next?: string;
  };
}
