// File: app/api/instagram/posts/route.ts
import axios from "axios";
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

    const access_token = decoded.payload?.accessToken as string;

    if (!access_token) {
      return NextResponse.json(
        { error: "No access token found" },
        { status: 401 }
      );
    }

    // Fetch user media (posts)
    const response = await axios.get("https://graph.instagram.com/me/media", {
      params: {
        fields:
          "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,children{id,media_type,media_url,thumbnail_url},comments_count,like_count,insights{engagement,impressions,reach}",
        access_token: access_token,
      },
    });

    return NextResponse.json({
      posts: response.data.data,
      paging: response.data.paging,
    });
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);

    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      return NextResponse.json(
        {
          error: "Failed to fetch posts",
          details: error.response?.data,
        },
        { status: error.response?.status || 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

// Optional: Type definitions for better type safety
export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

export interface InstagramPostsResponse {
  data: InstagramPost[];
  paging?: {
    cursors?: {
      before: string;
      after: string;
    };
    next?: string;
  };
}
