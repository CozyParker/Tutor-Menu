"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/lib/mock";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const router = useRouter();
  const pathname = usePathname();
  const activeId = useMemo(() => navItems.find((item) => item.route === pathname)?.id ?? "dashboard", [pathname]);

  const compact = navItems.slice(0, 5);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t bg-white/90 px-3 py-2 shadow lg:hidden">
      {compact.map((item) => {
        const active = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => router.push(item.route)}
            className="flex flex-col items-center gap-1 text-xs"
          >
            <item.icon className={cn("h-5 w-5", active ? "text-primary" : "text-muted-foreground")} />
            <span className={cn(active ? "text-primary font-semibold" : "text-muted-foreground")}>{item.label.split(" ")[0]}</span>
          </button>
        );
      })}
    </div>
  );
}
