"use client";

import { Home, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";

export function Sidebar() {
  const { isMobile } = useSidebar();

  return (
    <ShadcnSidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 p-4">
          <Avatar>
            <img
              alt="User avatar"
              src="/placeholder.svg?height=32&width=32"
              className="rounded-full"
              height={32}
              width={32}
            />
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">Zar Wali Khan</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="#" className="flex items-center gap-3">
                <Home className="h-4 w-4" />
                Home
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full justify-start">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      {isMobile && (
        <SidebarTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-4 z-50"
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </SidebarTrigger>
      )}
    </ShadcnSidebar>
  );
}
