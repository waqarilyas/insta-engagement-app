import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MessageCircle, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Post() {
  return (
    <Card className="max-w-xl border-0 shadow-none bg-primary-card-background mt-4">
      <CardHeader className="p-4 pb-0 flex flex-row items-center space-y-0">
        <div className="flex items-center gap-2 flex-1">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>EJ</AvatarFallback>
          </Avatar>
          <div className="">
            <p className=" font-bold">Elsa Jones</p>
            <p className="text-xs text-muted-foreground">1 hour ago</p>
          </div>
        </div>
        <Badge
          variant="secondary"
          className="bg-pink-50 text-pink-500 hover:bg-pink-50"
        >
          Local
        </Badge>
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative aspect-[2/1] overflow-hidden rounded-md">
          <Image
            src="/placeholder.svg"
            alt="Interior design image showing a hanging chair"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-4">
          Revamping the chill guy kinda living room as the main thing in our
          house.
        </p>
        <p className="text-muted-foreground">
          #interiordesign #design #livingroom
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col gap-4">
        <div className="flex items-center gap-4  w-full border-b-2 py-4">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 px-0 text-muted-foreground"
          >
            <Heart className="w-4 h-4" />
            <span className="text-sm">24</span>
            <span className="ml-1 text-sm">Likes</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 px-0 text-muted-foreground"
          >
            <MessageCircle className="w-4 h-4" />
            <span>24</span>
            <span className="ml-1">Comment</span>
          </Button>
        </div>

        <div className="flex items-start gap-2 py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>YOU</AvatarFallback>
          </Avatar>
          <div className="flex-1 ">
            <div className="flex items-center gap-2">
              <Link href="#" className="font-bold">
                YOU
              </Link>
              <span className="text-xs text-muted-foreground">
                • 10 days ago
              </span>
            </div>
            <p className="text-sm mt-1">
              That looks promising. We have been designing the wabi sabi
              products for our clients. Would love to work together to explore
              more interesting design projects.
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
