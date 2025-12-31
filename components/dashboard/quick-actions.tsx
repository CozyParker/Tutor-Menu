import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export type QuickAction = {
  label: string;
  icon: LucideIcon;
  intent?: "primary" | "ghost" | "secondary";
};

export function QuickActions({ actions, className }: { actions: QuickAction[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {actions.map((action) => (
        <Button
          key={action.label}
          variant={action.intent === "ghost" ? "ghost" : action.intent === "secondary" ? "secondary" : "default"}
          size="sm"
          className="rounded-full"
        >
          <action.icon className="h-4 w-4" />
          {action.label}
        </Button>
      ))}
    </div>
  );
}
