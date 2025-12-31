"use client";

import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { TopBar } from "@/components/dashboard/top-bar";
import { InsightPanel } from "@/components/dashboard/insight-panel";
import { MobileNav } from "@/components/dashboard/mobile-nav";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <SidebarNav />
      <div className="flex w-full flex-col">
        <TopBar />
        <div className="flex flex-1 flex-col gap-6 px-4 pb-24 lg:px-8">
          <div className="flex flex-col gap-6 xl:flex-row">
            <div className="flex-1 space-y-6">{children}</div>
            <InsightPanel />
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
