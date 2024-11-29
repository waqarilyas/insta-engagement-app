"use client";

import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen flex-1 ">
        <div className="relative hidden w-1/2 lg:block">
          <Image
            alt="Sidebar Image"
            src="/login-bg.png"
            className="absolute inset-0"
            fill
            sizes="(max-width: 1024px) 0vw, 50vw"
            priority
            quality={100}
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6  lg:px-20 xl:px-24 ">
          <div className=" p-4 rounded">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold">
                  <span className="text-pink-500">Engage</span> with your
                  followers & never loose contact with them
                </h1>
                <p className="text-gray-600 text-lg">
                  Stay in touch with the people you are following and never let
                  them forget you. Staying in touch is important.
                </p>
              </div>

              <Button
                size="lg"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=1083846249714676&redirect_uri=https://localhost:3000/api/auth/callback&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish",
                    "_self"
                  );
                }}
                className="w-full sm:w-auto h-12 px-8 text-base bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Continue with Instagram
              </Button>

              <p className="text-sm text-gray-500">
                By signing in you agree to the agreement that we are going to
                access your Instagram information about your followers and
                activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
