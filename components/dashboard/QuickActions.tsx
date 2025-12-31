import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Action = {
  label: string;
  icon?: ReactNode;
  variant?: "primary" | "ghost";
};

type Props = {
  actions: Action[];
};

export function QuickActions({ actions }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {actions.map((action) => (
        <button
          key={action.label}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition",
            action.variant === "ghost"
              ? "border-transparent bg-slate-100 text-slate-700 hover:bg-slate-200"
              : "border-slate-200 bg-slate-900 text-white hover:bg-slate-800"
          )}
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
}
