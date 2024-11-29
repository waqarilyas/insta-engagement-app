"use client";

import { cn } from "@/lib/utils";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import useFollowers from "@/hooks/useFollowers";

interface RightPanelProps {
  className?: string;
}

const FOLLOWERS = [
  { name: "Elsa Jones", time: "5 days ago" },
  { name: "Peter McInnes", time: "2 days ago" },
  { name: "Jon Jones", time: "3 days ago" },
  { name: "Ellie Jills", time: "4 days ago" },
  { name: "Lisa Turnings", time: "6 days ago" },
  { name: "Rakhshideen Sinan", time: "1 day ago" },
  { name: "John Shelby", time: "7 days ago" },
  { name: "Ayla Muhr", time: "8 days ago" },
  { name: "Esteli Blair", time: "2 days ago" },
  { name: "Snow White", time: "4 days ago" },
  { name: "Cartin Wings", time: "3 days ago" },
];

export function RightPanel({ className }: RightPanelProps) {
  const { followers, loading } = useFollowers();

  return (
    <aside className={cn("w-full", className)}>
      <div className="sticky top-20">
        <h2 className="mb-4 text-lg font-semibold">People I follow</h2>
        <div className="space-y-4">
          {FOLLOWERS.map((follower, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-12 w-12 rounded-full">
                  <img
                    alt={`${follower.name}'s avatar`}
                    src="/placeholder.svg?height=32&width=32"
                    className="rounded-full"
                    height={32}
                    width={32}
                  />
                </Avatar>
                <div>
                  <p className="font-medium">{follower.name}</p>
                  <p className="text-xs text-gray-500">
                    Commented {follower.time}
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 rounded-full p-0"
              >
                <span className="sr-only">View profile</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
