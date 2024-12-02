import { Header } from "./header";
import { AppSidebar } from "./sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        <Header />
        <div className="flex gap-8 mt-8">
          <AppSidebar />
          <SidebarInset className="container max-w-4xl ">
            {children}
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
