"use client";

import { useState } from "react";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Gamepad2, Plus, Sparkles } from "lucide-react";

export default function GamificationPage() {
  const [toggle, setToggle] = useState({ points: true, streaks: false, badges: true });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Gamification Controls</h1>
          <p className="text-sm text-muted-foreground">Tutor-only toggles to drive motivation without distracting students.</p>
        </div>
        <QuickActions actions={[{ label: "Add rule", icon: Plus }, { label: "Auto-tune", icon: Sparkles }]} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Feature toggles</CardTitle>
          <CardDescription>Adjust incentives per cohort.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { key: "points", label: "Points", desc: "Award points for on-time submissions" },
            { key: "streaks", label: "Streaks", desc: "Celebrate consecutive homework streaks" },
            { key: "badges", label: "Badges", desc: "Unlock badges for consistent mastery" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between rounded-lg border bg-white px-3 py-2">
              <div>
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <Switch checked={toggle[item.key as keyof typeof toggle]} onCheckedChange={(val) => setToggle((prev) => ({ ...prev, [item.key]: val }))} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Rules editor</CardTitle>
            <CardDescription>Trigger → action → channel.</CardDescription>
          </div>
          <Badge variant="secondary">3 presets</Badge>
        </CardHeader>
        <CardContent className="space-y-3">
          {[1, 2, 3].map((rule) => (
            <div key={rule} className="rounded-lg border p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-semibold">Streak reminder {rule}</p>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-3">
                <Field label="Trigger" value="3 missed tasks" />
                <Field label="Action" value="Send nudge" />
                <Field label="Channel" value="Email + push" />
              </div>
            </div>
          ))}
          <div className="rounded-lg border border-dashed p-3 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">New rule</p>
            <p>Add a trigger, action, and delivery rule to guide motivation.</p>
            <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-3">
              <Input placeholder="Trigger" />
              <Input placeholder="Action" />
              <Input placeholder="Channel" />
            </div>
            <div className="mt-2 flex gap-2">
              <Button size="sm" className="gap-2">
                <Gamepad2 className="h-4 w-4" />
                Save rule
              </Button>
              <Button size="sm" variant="ghost">
                Cancel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-muted/50 p-2">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );
}
