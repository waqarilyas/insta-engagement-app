import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Post() {
  return (
    <Card className="shadow-none border-none bg-primary-background mx-auto max-w-4xl p-4 sm:p-6 mb-2">
      <CardHeader className="space-y-4 p-0">
        {/* User Info and Dropdown Sections */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          {/* Profile Section */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Avatar className="h-10 w-10 sm:h-12 sm:w-12 shrink-0">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-semibold text-sm sm:text-base">Behzad</h2>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  • 128 Followers
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Hey there, I am steve jobs with tons of exp working with
                different people
              </p>
            </div>
          </div>

          {/* Dropdown Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-end gap-2 w-full sm:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="gap-2 w-full sm:w-auto bg-primary-dark-background rounded-full text-xs sm:text-base"
                >
                  Location <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Remote</DropdownMenuItem>
                <DropdownMenuItem>On-site</DropdownMenuItem>
                <DropdownMenuItem>Hybrid</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-2 w-full sm:w-auto bg-primary-dark-background rounded-full text-xs sm:text-base"
                >
                  Lead <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Wants to sell</DropdownMenuItem>
                <DropdownMenuItem>Wants to buy</DropdownMenuItem>
                <DropdownMenuItem>Not in the market</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 p-0 mt-4 sm:mt-6">
        {/* Image Section */}
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg"
            alt="Mountain landscape at sunset"
            width={600}
            height={300}
            className="w-full h-48 sm:h-[400px] object-cover"
          />
        </div>

        {/* Post Content */}
        <div className="space-y-2">
          <p className="text-xs sm:text-base">
            Travelling is the therapy for the soul. It heals the wound you
            can&apos;t tell anyone about. Mountains talk to you like no one else
            could. In the bleak mid winter, winds are the solace for the heart
            and soul...{" "}
            <Link
              href="#"
              className="text-primary hover:underline font-semibold text-xs sm:text-base"
            >
              Read More
            </Link>
          </p>

          {/* Interaction Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="ghost" className="gap-2 text-xs sm:text-base">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4" />{" "}
              <span className="font-semibold">24</span> Likes
            </Button>
            <Button variant="ghost" className="gap-2 text-xs sm:text-base">
              <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />{" "}
              <span className="font-semibold">24</span> Comment
            </Button>
          </div>
        </div>
      </CardContent>

      <Separator className="my-4 sm:my-6" />

      <CardFooter className="flex flex-col gap-4 p-0">
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-x-auto pb-4">
          <Card className="w-full sm:w-72 overflow-hidden rounded-3xl shrink-0 shadow-none border-none bg-primary-background">
            <div className="relative h-48 rounded-3xl overflow-hidden  border-2 border-primary-purple">
              <Image
                src="/placeholder.svg"
                alt="Mountain landscape at sunset"
                className="object-cover"
                fill
              />
            </div>
            <div className="p-4">
              <p className="text-xs sm:text-sm text-gray-800 font-extralight">
                Travelling is the therapy for the soul. It heals the wounds you
                can&apos;t tell anyo...
              </p>
            </div>
          </Card>

          <Card className="w-full sm:w-72 overflow-hidden border rounded-3xl border-none shadow-none bg-primary-background shrink-0">
            <div className="relative h-48 rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Dramatic sky with clouds"
                className="object-cover"
                fill
              />
            </div>
            <div className="p-4">
              <p className="text-xs sm:text-sm text-gray-800 font-extralight">
                Sometimes all you need is a ray of sunshine that overtakes the
                darkness...
              </p>
            </div>
          </Card>

          <div className="flex-1 w-full sm:w-auto">
            <h3 className="font-semibold text-sm sm:text-base">Last Comment</h3>
            <div className="text-xs sm:text-sm text-gray-500 mb-2">
              40 days ago
            </div>
            <p className="text-xs sm:text-sm leading-5">
              That looks promising. We have been designing the wabi sabi
              products for our clients. Would love to work together to explore
              more interesting design projects.
            </p>
          </div>
        </div>

        {/* Bottom Action Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-8 w-full gap-4 sm:gap-0">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/placeholder.svg"
                alt="User avatar"
                width={40}
                height={40}
              />
            </Avatar>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-red-500 font-semibold">
              <span className="text-xs sm:text-base">YOU</span>
              <span className="text-xs sm:text-sm">
                • No comment since last 30 days
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4 sm:mt-0">
            <Button
              variant="outline"
              className="w-full sm:w-auto rounded-full hover:bg-gray-50 text-xs sm:text-base"
            >
              Skip this Post
            </Button>
            <Button className="w-full sm:w-auto rounded-full bg-[#9333EA] hover:bg-[#7928CA] text-xs sm:text-base">
              Add Comment
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
