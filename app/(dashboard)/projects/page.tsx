"use client";

import { QuickActions } from "@/components/dashboard/quick-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/mock";
import { CheckCircle2, ClipboardList, Play } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Project & Case Oversight</h1>
          <p className="text-sm text-muted-foreground">Track milestones and rubric coverage without student clutter.</p>
        </div>
        <QuickActions actions={[{ label: "New milestone", icon: Play }, { label: "Rubric", icon: ClipboardList }]} />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.cohort}</CardDescription>
              </div>
              <Badge variant="secondary">{project.milestones.length} milestones</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm font-semibold">Milestones</p>
              <div className="space-y-2">
                {project.milestones.map((m) => (
                  <div key={m.label} className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2">
                    <div>
                      <p className="text-sm font-semibold">{m.label}</p>
                      <p className="text-xs text-muted-foreground">Due {m.due}</p>
                    </div>
                    <Badge variant={m.status === "done" ? "success" : m.status === "in-progress" ? "secondary" : "outline"}>
                      {m.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold">Rubric</p>
              <div className="space-y-2">
                {project.rubric.map((r) => (
                  <div key={r.label} className="flex items-center justify-between rounded-md border px-3 py-2">
                    <div>
                      <p className="text-sm font-semibold">{r.label}</p>
                      <p className="text-xs text-muted-foreground">Weight {r.weight}%</p>
                    </div>
                    <Badge variant={r.checked ? "success" : "outline"} className="flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4" />
                      {r.checked ? "Met" : "Pending"}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm">Update status</Button>
                <Button size="sm" variant="ghost">
                  Export rubric
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
