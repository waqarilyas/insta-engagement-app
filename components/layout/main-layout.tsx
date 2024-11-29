import { Header } from "./header";
import { RightPanel } from "./right-panel";
import { Sidebar } from "./sidebar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className=" grid grid-cols-1 gap-4 p-4 md:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr_280px]">
        <Sidebar />
        <main className="w-full">{children}</main>
        <RightPanel className="hidden lg:block" />
      </div>
    </div>
  );
}
