import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";

type Props = {
  items: NavItem[];
};

export function SidebarNav({ items }: Props) {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-100",
              isActive ? "bg-slate-900 text-white shadow-sm" : "text-slate-700"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-xs font-semibold",
                  isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"
                )}
              >
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
