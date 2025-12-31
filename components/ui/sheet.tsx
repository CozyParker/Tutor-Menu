"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SheetContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextValue | null>(null);

export function Sheet({ children, open, onOpenChange }: { children: React.ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void }) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isControlled = open !== undefined;
  const stateOpen = isControlled ? open : internalOpen;

  const setOpen = (val: boolean) => {
    if (!isControlled) setInternalOpen(val);
    onOpenChange?.(val);
  };

  return <SheetContext.Provider value={{ open: stateOpen, setOpen }}>{children}</SheetContext.Provider>;
}

export function SheetTrigger({ children }: { children: React.ReactNode }) {
  const ctx = React.useContext(SheetContext);
  if (!ctx) throw new Error("SheetTrigger must be used within Sheet");
  return (
    <button type="button" onClick={() => ctx.setOpen(true)} className="inline-flex">
      {children}
    </button>
  );
}

export function SheetContent({ side = "right", className, children }: { side?: "right" | "left" | "bottom"; className?: string; children: React.ReactNode }) {
  const ctx = React.useContext(SheetContext);
  if (!ctx) throw new Error("SheetContent must be used within Sheet");
  if (!ctx.open) return null;
  const translate = {
    right: "translate-x-0",
    left: "translate-x-0",
    bottom: "translate-y-0",
  }[side];
  const position = side === "bottom" ? "bottom-0 left-0 right-0" : side === "left" ? "left-0 top-0 bottom-0" : "right-0 top-0 bottom-0";
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/40" onClick={() => ctx.setOpen(false)} />
      <div
        className={cn(
          "relative ml-auto flex h-full w-full max-w-md flex-col gap-4 overflow-y-auto bg-background p-6 shadow-xl transition-transform",
          position,
          translate,
          className
        )}
      >
        <button onClick={() => ctx.setOpen(false)} className="absolute right-4 top-4 text-muted-foreground">×</button>
        {children}
      </div>
    </div>
  );
}
