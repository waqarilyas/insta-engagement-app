import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "./header";
import { AppSidebar } from "./sidebar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        <Header />
        <div className="flex gap-8 mt-8">
          <AppSidebar />
          <main>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
