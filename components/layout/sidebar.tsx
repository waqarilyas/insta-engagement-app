import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Home } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  return (
    <>
      <Sidebar className="p-7 bg-white z-40 mt-24">
        <SidebarHeader className="">
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
      </Sidebar>
    </>
  );
}
