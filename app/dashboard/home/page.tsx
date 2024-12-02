import Post from "@/components/post";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Page() {
  return (
    <main className="p-6 bg-white rounded overflow-hidden">
      <div className="w-full mb-8">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-semibold">Homepage</h1>
        </div>
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <span className="text-sm text-muted-foreground">
            No comments for last 30 days
          </span>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
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
                <Button variant="outline" size="sm" className="gap-2">
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
      </div>

      {/* Post */}
      <div className="rounded-lg bg-primary-background  ">
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
