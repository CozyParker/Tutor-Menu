"use client";

import { useState } from "react";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { revisionPlans, students } from "@/lib/mock";
import { Brain, Loader2, Sparkles } from "lucide-react";

export default function RevisionPage() {
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(revisionPlans);

  const generatePlan = () => {
    setLoading(true);
    setTimeout(() => {
      setGenerated((prev) => [
        ...prev,
        { id: `rp-${prev.length + 1}`, focus: "New weak area", durationWeeks: 2, owner: "Cohort", milestones: ["Model example", "Practice", "Retest"] },
      ]);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Revision & Reinforcement Planner</h1>
          <p className="text-sm text-muted-foreground">Transform weak areas into short, tactical plans.</p>
        </div>
        <QuickActions actions={[{ label: "Generate", icon: Sparkles }, { label: "Share plan", icon: Brain }]} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weak-area generator</CardTitle>
          <CardDescription>Input signals to build a plan draft.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="space-y-2">
            <Label>Student</Label>
            <Input list="students" placeholder="Select student" />
            <datalist id="students">
              {students.map((s) => (
                <option key={s.id} value={s.name} />
              ))}
            </datalist>
            <Label>Weak areas</Label>
            <Textarea placeholder="Fractions, vector basics..." />
          </div>
          <div className="space-y-2">
            <Label>Goal</Label>
            <Input placeholder="e.g., reach 80% mastery" />
            <Label>Time window</Label>
            <Input placeholder="2 weeks" />
          </div>
          <div className="space-y-3 rounded-lg border bg-muted/50 p-3">
            <p className="text-sm font-semibold">Guidance</p>
            <p className="text-sm text-muted-foreground">Blend visuals, drills, and quick checks. Keep items short and measurable.</p>
            <Button onClick={generatePlan} disabled={loading} className="gap-2">
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Generate plan
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Generated plans</CardTitle>
            <CardDescription>Ready to assign or adjust.</CardDescription>
          </div>
          <Badge variant="secondary">{generated.length} plans</Badge>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {generated.map((plan) => (
            <div key={plan.id} className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-sm font-semibold">{plan.focus}</p>
                <Badge variant="outline">{plan.durationWeeks} wks</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Owner: {plan.owner}</p>
              <div className="mt-3 space-y-1 text-sm">
                {plan.milestones.map((m) => (
                  <p key={m}>• {m}</p>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant="secondary">
                  Assign
                </Button>
                <Button size="sm" variant="ghost">
                  Export
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
