"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Home, LogOutIcon } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  return (
    <>
      <Sidebar className="p-7 bg-white z-40">
        <SidebarHeader className="pt-0 md:pt-24">
          <div className="flex items-center space-x-3">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg" alt="Zar Wali Khan" />
              <AvatarFallback>ZW</AvatarFallback>
            </Avatar>
            <div>
              <h2 className=" font-bold">Zar Wali Khan</h2>
            </div>
          </div>
        </SidebarHeader>
        <SidebarSeparator className=" my-4" />
        <SidebarContent className="  mt-2">
          <SidebarMenu>
            <SidebarMenuItem className=" bg-sidebar-accent rounded p-2">
              <SidebarMenuButton asChild isActive>
                <Link href="/" className="flex items-center space-x-2">
                  <Home className="h-8 w-8" />
                  <span className="text-base font-bold">Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <Link href="/" className="flex items-center space-x-4">
            <LogOutIcon className="h-6 w-6" />
            <span className="text-base font-bold">Logout</span>
          </Link>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
