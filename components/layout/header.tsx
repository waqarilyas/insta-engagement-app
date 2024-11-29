import { Search } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b sticky top-0 z-10 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-pink-600">
          INSTA
        </Link>
        <div className="relative max-w-md flex-1 mx-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-full bg-gray-100 py-2 pl-8 pr-4 text-sm outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div className="w-8" /> {/* Spacer for layout balance */}
      </div>
    </header>
  );
}
