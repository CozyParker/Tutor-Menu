"use client";

import { useState } from "react";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { automations } from "@/lib/mock";
import { AutomationRule } from "@/lib/types";
import { Rocket, Sparkles, Workflow } from "lucide-react";

export default function AutomationsPage() {
  const [rules, setRules] = useState<AutomationRule[]>(automations);
  const [draft, setDraft] = useState<AutomationRule>({
    id: `a-${automations.length + 1}`,
    name: "",
    trigger: "",
    action: "",
    channel: "",
    active: true,
  });

  const addRule = () => {
    if (!draft.name) return;
    setRules((prev) => [...prev, { ...draft, id: `a-${prev.length + 1}` }]);
    setDraft({ id: "", name: "", trigger: "", action: "", channel: "", active: true });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Automation & Rules</h1>
          <p className="text-sm text-muted-foreground">Automate reminders, approvals, and alerts with simple rules.</p>
        </div>
        <QuickActions actions={[{ label: "New rule", icon: Workflow }, { label: "Suggest", icon: Sparkles }]} />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Rules</CardTitle>
            <CardDescription>Trigger → action → channel</CardDescription>
          </div>
          <Badge variant="secondary">{rules.length} rules</Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Trigger</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Channel</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rules.map((rule) => (
                <TableRow key={rule.id}>
                  <TableCell className="font-medium">{rule.name}</TableCell>
                  <TableCell>{rule.trigger}</TableCell>
                  <TableCell>{rule.action}</TableCell>
                  <TableCell>{rule.channel}</TableCell>
                  <TableCell>
                    <Badge variant={rule.active ? "success" : "outline"}>{rule.active ? "On" : "Off"}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="border-dashed">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Create rule</CardTitle>
            <CardDescription>Define a lightweight automation.</CardDescription>
          </div>
          <Rocket className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <div>
            <Label>Name</Label>
            <Input value={draft.name} onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))} placeholder="Homework nudges" />
          </div>
          <div>
            <Label>Trigger</Label>
            <Input value={draft.trigger} onChange={(e) => setDraft((d) => ({ ...d, trigger: e.target.value }))} placeholder="e.g., Missed 2" />
          </div>
          <div>
            <Label>Action</Label>
            <Input value={draft.action} onChange={(e) => setDraft((d) => ({ ...d, action: e.target.value }))} placeholder="Send reminder" />
          </div>
          <div>
            <Label>Channel</Label>
            <Input value={draft.channel} onChange={(e) => setDraft((d) => ({ ...d, channel: e.target.value }))} placeholder="Email" />
          </div>
          <div className="md:col-span-4 flex gap-2 pt-2">
            <Button size="sm" onClick={addRule} className="gap-2">
              <Workflow className="h-4 w-4" />
              Add rule
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setDraft({ id: "", name: "", trigger: "", action: "", channel: "", active: true })}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
