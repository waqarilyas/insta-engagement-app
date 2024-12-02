import Link from "next/link";
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
import { Heart, MessageCircle, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Post() {
  return (
    <Card className="shadow-none border-none bg-primary-background mx-auto">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold">Behzad</h2>
                <span className="text-sm text-muted-foreground">
                  • 128 Followers
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Hey there, I am steve jobs with tons of exp working with
                different people
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  Location <ChevronDown className="h-4 w-4" />
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
                <Button variant="outline" className="gap-2">
                  Lead <ChevronDown className="h-4 w-4" />
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
      <CardContent className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg"
            alt="Mountain landscape at sunset"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>
        <div className="space-y-2">
          <p className="text-sm">
            Travelling is the therapy for the soul. It heals the wound you
            can&apos;t tell anyone about. Mountains talk to you like no one else
            could. In the bleak mid winter, winds are the solace for the heart
            and soul...{" "}
            <Link href="#" className="text-primary hover:underline">
              Read More
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="h-4 w-4" /> 24 Likes
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" /> 24 Comment
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Mountain landscape thumbnail"
              width={300}
              height={200}
              className="w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Sunset landscape thumbnail"
              width={300}
              height={200}
              className="w-full object-cover brightness-75"
            />
          </div>
        </div>
        <div className="w-full space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <span className="font-semibold">Last Comment</span>
              <span className="text-muted-foreground ml-2">40 days ago</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            That looks promising. We have been designing the web sabl products
            for our client. Would love to work together to explore more
            interesting design projects.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="Your profile" />
                <AvatarFallback>Y</AvatarFallback>
              </Avatar>
              <span className="text-sm font-semibold">YOU</span>
              <span className="text-sm text-muted-foreground">
                • No comment since last 30 days
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Skip this Post</Button>
              <Button>Add Comment</Button>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
