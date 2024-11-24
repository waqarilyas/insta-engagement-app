"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface USER {
  id: string;
  username: string;
  name: string;
  account_type: "BUSINESS" | "PERSONAL" | "CREATOR";
  media_count: number;
  followers_count: number;
  follows_count: number;
  biography: string;
  profile_picture_url: string;
}

export function useAuth() {
  const [user, setUser] = useState<USER | null>(null);
  console.log("🚀 ~ useAuth ~ user:", user);

  const router = useRouter();

  async function fetchCurrentUser() {
    try {
      const response = await axios.get("/api/auth/user");

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      window.location.href = "/login";
    }
  }

  const logout = async () => {
    try {
      await toast.promise(axios.post("/api/auth/logout"), {
        loading: "Logging out...",
        success: "Logged out successfully!",
        error: "Failed to logout",
      });

      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    toast.promise(fetchCurrentUser(), {
      loading: "Fetching Account Info....",
      success: "Account Details Fetched Successfully!",
      error: "Failed to fetch account details",
    });
  }, []);

  return {
    user,
    // functions
    logout,
  };
}
