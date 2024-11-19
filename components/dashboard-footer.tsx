import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function DashboardFooter() {
  return (
    <footer className="w-full bg-black text-white z-50">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-b border-gray-800">
          {/* Logo */}
          <Link href="/" className="mb-4 md:mb-0">
            <span className="text-2xl font-bold uppercase">Logo</span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Link One
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Link Two
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Link Three
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Link Four
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Link Five
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            ©2022, All right reserved.
          </p>
          <nav className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Support
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
