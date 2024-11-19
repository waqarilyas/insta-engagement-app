import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bookmark, Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex gap-2">
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
          ALL
        </Button>
        <Button variant="outline">Leads</Button>
        <Button variant="outline" className="ml-auto">
          No Comment for 30 Days
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Latest Post</h2>

        <div className="max-w-lg bg-white">
          <div className="flex items-center p-3 gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg" alt="Amelia Kerr" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Link
                href="#"
                className="font-semibold text-sm inline-flex items-center gap-1"
              >
                Amelia Kerr <span className="text-muted-foreground">›</span>
              </Link>
              <p className="text-xs text-muted-foreground">
                Entrepreneur | Digital Creator | Artist
              </p>
            </div>
          </div>

          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg"
              alt="Two cyclists taking a break under a tree"
              fill
              className="object-cover bg-gray-100 rounded"
            />
          </div>

          <div className="p-3 space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Heart className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <MessageCircle className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Send className="h-6 w-6" />
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Bookmark className="h-6 w-6" />
              </Button>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1 text-sm">
                <Avatar className="w-5 h-5">
                  <AvatarImage src="/placeholder.svg" alt="craig_love" />
                  <AvatarFallback>CL</AvatarFallback>
                </Avatar>
                <p>
                  Liked by <span className="font-semibold">craig_love</span> and{" "}
                  <span className="font-semibold">44,687 others</span>
                </p>
              </div>
              <p className="text-sm">
                <span className="font-semibold">amelia_kerr</span> The game in
                Japan was amazing and I want to share some photos
              </p>
            </div>

            <div className="flex justify-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto p-4">
          <h2 className="text-xl font-semibold mb-4">Last 3 Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt={`Cycling photo ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-sm">
                  <Link href="#" className="font-semibold hover:underline">
                    amelia_kerr
                  </Link>{" "}
                  The game in Japan was amazing...
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto p-4 space-y-6">
          <div className="flex items-start gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>

            <div className="flex-1 ">
              <div className="flex items-center justify-between mb-1 ">
                <h2 className="text-xl font-semibold">Amelia Kerr</h2>
                {/* <Button className="bg-blue-600 hover:bg-blue-700 py-0">
                  Unfollow
                </Button> */}
              </div>
              <p className="text-sm text-muted-foreground">
                Entrepreneur | Digital Creator | Artist
              </p>
              <p className="text-sm text-muted-foreground">
                Loves to create art
              </p>
              <p className="text-sm text-muted-foreground">
                For business inquiries kcjgjch jhdj fgdssjf dshfdsg jf gjg
              </p>
              <Button variant="link" className="px-1 h-auto text-sm">
                See More
              </Button>
            </div>

            <Card className="p-4 w-24 h-24 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-bold">30</span>
              <span className="text-xs text-muted-foreground leading-tight">
                Days Since
                <br />
                last Comment
              </span>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Add a Note</h3>
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Title"
                className="border-0 border-b rounded-none px-0 text-lg font-medium"
              />
              <Textarea
                placeholder="Take a note..."
                className="min-h-[100px] border-0 resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
