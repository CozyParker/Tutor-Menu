"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/lib/mock";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function SidebarNav() {
  const router = useRouter();
  const pathname = usePathname();

  const activeId = useMemo(() => {
    const match = navItems.find((item) => item.route === pathname);
    return match?.id ?? "dashboard";
  }, [pathname]);

  return (
    <aside className="hidden h-screen w-72 flex-col border-r bg-white/70 p-4 lg:flex">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Tutor Command</p>
          <h2 className="text-lg font-semibold">Today&apos;s Control</h2>
        </div>
        <Badge variant="secondary">Live</Badge>
      </div>
      <Separator className="mb-4" />
      <nav className="space-y-1 text-sm">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => router.push(item.route)}
            className={cn(
              "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition hover:bg-muted",
              activeId === item.id ? "bg-primary/10 text-primary" : "text-muted-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span className="flex-1 text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
