import { MainLayout } from "@/components/layout/main-layout";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <MainLayout>{children}</MainLayout>
      </SidebarProvider>
    </>
  );
}
