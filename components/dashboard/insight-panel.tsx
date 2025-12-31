import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { insightShortcuts, insights } from "@/lib/mock";
import { cn } from "@/lib/utils";
import { Lightbulb, Zap } from "lucide-react";

export function InsightPanel({ className }: { className?: string }) {
  return (
    <aside className={cn("hidden w-80 shrink-0 flex-col gap-3 xl:flex", className)}>
      <Card className="border-primary/30">
        <CardHeader className="flex flex-row items-center gap-2">
          <Lightbulb className="h-4 w-4 text-amber-500" />
          <div>
            <CardTitle className="text-base">AI nudges</CardTitle>
            <CardDescription>Fast wins for today</CardDescription>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-3 pt-4">
          {insights.map((insight) => (
            <div key={insight.id} className="rounded-lg bg-muted/50 p-3">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-sm font-semibold">{insight.title}</p>
                <Badge variant={insight.intent === "warn" ? "destructive" : insight.intent === "action" ? "secondary" : "outline"}>
                  {insight.intent === "warn" ? "Risk" : insight.intent === "action" ? "Action" : "Info"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base">One-tap actions</CardTitle>
            <CardDescription>Keep momentum</CardDescription>
          </div>
          <Zap className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-2">
          {insightShortcuts.map((item) => (
            <Button key={item.id} variant="secondary" size="sm" className="justify-start gap-2">
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
}
