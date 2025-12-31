import type { Metadata } from "next";
import {
  ActivitySquare,
  Atom,
  BarChart,
  BookCheck,
  ClipboardCheck,
  Gamepad2,
  Gauge,
  Layers,
  LineChart,
  PanelsTopLeft,
  Settings,
  Workflow
} from "lucide-react";
import { SidebarNav } from "@/components/dashboard/SidebarNav";
import { TopBar } from "@/components/dashboard/TopBar";
import { BottomNav } from "@/components/dashboard/BottomNav";
import type { NavItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Tutor Admin Dashboard",
  description: "Command center for tutor operations"
};

const navItems: NavItem[] = [
  { href: "/", label: "Today’s Command Center", icon: Gauge, badge: "Now" },
  { href: "/classes", label: "Classes & Cohorts", icon: Layers },
  { href: "/progress", label: "Student Progress & Evaluation", icon: BarChart },
  { href: "/homework", label: "Homework & Practice Manager", icon: BookCheck, badge: "4" },
  { href: "/assessments", label: "Question & Assessment Builder", icon: ClipboardCheck },
  { href: "/revision", label: "Revision & Reinforcement Planner", icon: ActivitySquare },
  { href: "/visuals", label: "Visual Teaching Tools", icon: Atom },
  { href: "/gamification", label: "Gamification Controls", icon: Gamepad2 },
  { href: "/projects", label: "Project & Case Oversight", icon: PanelsTopLeft },
  { href: "/reports", label: "Reports & Parent-Ready Summaries", icon: LineChart },
  { href: "/automations", label: "Automation & Rules", icon: Workflow },
  { href: "/settings", label: "Tutor Settings & Preferences", icon: Settings }
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="hidden md:block">
        <TopBar />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-4 md:px-8">
        <div className="grid gap-6 md:grid-cols-[260px_1fr]">
          <aside className="hidden h-full md:block">
            <div className="sticky top-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Main menu</p>
              <SidebarNav items={navItems} />
            </div>
          </aside>
          <main className="space-y-6">
            <div className="md:hidden">
              <TopBar />
            </div>
            {children}
          </main>
        </div>
      </div>
      <BottomNav items={navItems} />
    </div>
  );
}
