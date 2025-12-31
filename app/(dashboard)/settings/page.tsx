"use client";

import { useState } from "react";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { tutor } from "@/lib/mock";
import { Cog, Save } from "lucide-react";

export default function SettingsPage() {
  const [strictness, setStrictness] = useState(60);
  const [tone, setTone] = useState("encouraging");
  const [limits, setLimits] = useState({ reminders: 3, maxEmails: 5, enableCalls: true });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Tutor Settings & Preferences</h1>
          <p className="text-sm text-muted-foreground">Control tone, guardrails, and communication defaults.</p>
        </div>
        <QuickActions actions={[{ label: "Save", icon: Save }, { label: "Reset", icon: Cog }]} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Who this dashboard is tuned for.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div>
            <Label>Name</Label>
            <Input defaultValue={tutor.name} />
          </div>
          <div>
            <Label>Email</Label>
            <Input defaultValue={tutor.email} />
          </div>
          <div>
            <Label>Timezone</Label>
            <Input defaultValue={tutor.timezone} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Instruction tone and boundaries.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-lg border bg-muted/50 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Strictness</p>
              <span className="text-sm text-muted-foreground">{strictness}%</span>
            </div>
            <Slider value={strictness} onChange={setStrictness} />
            <p className="text-xs text-muted-foreground">Higher values enforce pacing and deadlines more firmly.</p>
          </div>
          <div className="space-y-3">
            <Label>Tone</Label>
            <Select
              value={tone}
              onValueChange={setTone}
              options={[
                { label: "Encouraging", value: "encouraging" },
                { label: "Direct", value: "direct" },
                { label: "Neutral", value: "neutral" },
              ]}
            />
            <Label>Default note</Label>
            <Textarea placeholder="Add a signature or reminder" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Limits & notifications</CardTitle>
          <CardDescription>Prevent over-communication.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div>
            <Label>Reminders per day</Label>
            <Input
              type="number"
              value={limits.reminders}
              onChange={(e) => setLimits((l) => ({ ...l, reminders: Number(e.target.value) }))}
            />
          </div>
          <div>
            <Label>Max emails per week</Label>
            <Input
              type="number"
              value={limits.maxEmails}
              onChange={(e) => setLimits((l) => ({ ...l, maxEmails: Number(e.target.value) }))}
            />
          </div>
          <div className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2">
            <div>
              <p className="text-sm font-semibold">Allow calls</p>
              <p className="text-xs text-muted-foreground">Enable voice follow-ups</p>
            </div>
            <Switch
              checked={limits.enableCalls}
              onCheckedChange={(val) => setLimits((l) => ({ ...l, enableCalls: val }))}
            />
          </div>
          <div className="md:col-span-3 flex gap-2">
            <Button size="sm">Save preferences</Button>
            <Button size="sm" variant="ghost">
              Revert
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
