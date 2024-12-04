import Post from "@/components/post";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import UserNotes from "@/components/user-notes";
import { Clock, MessageCircle } from "lucide-react";

export default function Profile() {
  return (
    <div className="w-full px-4 sm:p-0 max-w-6xl">
      <Card className="overflow-hidden rounded-2xl border-0 text-primary-grey-text bg-primary-background shadow-none">
        <div className="h-[150px] sm:h-[200px] bg-gradient-to-r from-[#C5D3E3] via-[#F5D547] to-[#F5A7A7]" />
        <div className="px-4 sm:px-8 pb-8 text-primary-grey-text">
          {/* Mobile Layout */}
          <div className="sm:hidden ">
            <div className="flex items-start -mt-12 ">
              <Avatar className="w-[100px] h-[100px] border-4 border-teal-400">
                <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="ml-4 mt-14">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">Behzad</h2>
                  <span className="text-xs text-neutral-500">
                    • 128 Followers
                  </span>
                </div>
                <p className="font-light leading-relaxed text-neutral-600 mt-2 text-xs">
                  Hey there, I am steve jons with tons of exp working with
                  different people. And I can help them in many ways.
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <div className="flex flex-col items-start">
                <MessageCircle className="w-5 h-5 text-purple-500 mb-1" />
                <p className="font-semibold text-purple-500">120 comments</p>
                <p className="text-sm font-light text-neutral-500">
                  comments you made
                </p>
              </div>
              <div className="flex flex-col items-start">
                <Clock className="w-5 h-5 text-red-500 mb-1" />
                <p className="font-semibold text-red-500">30 days</p>
                <p className="text-sm font-light text-neutral-500">
                  since last comment
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:flex flex-row items-start">
            <Avatar className="w-[120px] h-[120px] border-4 border-purple-500 -mt-16">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="mt-6 ml-6 flex-grow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">Steve Jon</h2>
                  <Button variant="ghost" className="text-base px-2 h-8">
                    UnFollow
                  </Button>
                </div>
                <div className="flex gap-8">
                  <div className="flex items-start gap-2">
                    <MessageCircle className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="font-semibold text-purple-500">
                        120 comments
                      </p>
                      <p className="text-sm text-neutral-500">
                        comments you made
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="font-semibold text-red-500">30 days</p>
                      <p className="text-sm text-neutral-500">
                        since last comment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-extralight text-primary-grey-text mt-2">
                128 Followers
              </p>
              <p className="font-light leading-relaxed text-primary-grey-text mt-4">
                Hey there, I am steve jons with tons of exp working with
                different people. And I can help them in many ways.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full block md:flex space-x-2">
          <div className="bg-white p-4 mr-2 rounded">
            <h2 className="text-xl font-bold my-2">Recent Posts</h2>
            <Post />
          </div>
          <UserNotes />
        </div>
      </Card>
    </div>
  );
}
