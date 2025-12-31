import * as React from "react";
import { cn } from "@/lib/utils";

export function Avatar({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary", className)}>
      {children}
    </div>
  );
}
