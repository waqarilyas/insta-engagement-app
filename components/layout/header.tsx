"use client";

import { Search, LogOut, Settings, User, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useSidebar } from "../ui/sidebar";

export function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="border-b bg-white z-50 sticky inset-0">
      <div className="px-4 md:px-14 flex items-center justify-between py-4 md:py-6">
        <div className="md:hidden  z-50">
          <button onClick={toggleSidebar} className="p-2 ">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <Link href="/" className="flex items-center space-x-1">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 md:h-10 w-full"
          />
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="relative h-full bg-primary-dark-background p-3 rounded-full block md:hidden">
            <Search className=" h-4 w-4 text-gray-400" />
          </div>

          <div className="relative h-full hidden md:block">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              className="pl-8 w-[180px] md:w-[300px] bg-gray-100 rounded-full py-1.5"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 md:h-11 w-9 md:w-11 cursor-pointer">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
