import { Button } from "@/components/ui/button";

export function SectionHeader({ title, description, actionLabel }: { title: string; description: string; actionLabel?: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {actionLabel && <Button variant="secondary" size="sm">{actionLabel}</Button>}
    </div>
  );
}
