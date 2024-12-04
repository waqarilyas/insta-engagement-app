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
    <main className="p-6 bg-white rounded overflow-hidden space-y-4">
      <div className="w-full">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-lg font-bold">Homepage</h1>
        </div>
        <div className="flex items-center justify-between p-4 rounded-lg bg-primary-background">
          <span className="text-sm bg-white py-2 px-4 font-bold rounded-lg">
            No comments for last 30 days
          </span>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 font-medium">
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
                <Button variant="ghost" className="gap-2 font-medium">
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

      <Post />
      <Post />
      <Post />
    </main>
  );
}
