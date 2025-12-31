"use client";

import { useState } from "react";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BrainCircuit, Monitor, Sparkles } from "lucide-react";

export default function VisualsPage() {
  const [preview, setPreview] = useState("Force diagrams showing vectors and angles.");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Visual Teaching Tools</h1>
          <p className="text-sm text-muted-foreground">Spin up diagrams and anchor visuals on the fly.</p>
        </div>
        <QuickActions actions={[{ label: "Generate", icon: Sparkles }, { label: "Save preset", icon: BrainCircuit }]} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Generate diagram</CardTitle>
            <CardDescription>Describe what you need; get a ready-to-use visual.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label>Prompt</Label>
            <Textarea value={preview} onChange={(e) => setPreview(e.target.value)} className="min-h-[120px]" />
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Style</Label>
                <Input placeholder="e.g., Chalkboard" />
              </div>
              <div>
                <Label>Complexity</Label>
                <Input placeholder="Simple" />
              </div>
            </div>
            <Button className="gap-2">
              <Sparkles className="h-4 w-4" />
              Generate
            </Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Preview</CardTitle>
              <CardDescription>Placeholder for the generated visual.</CardDescription>
            </div>
            <Badge variant="secondary">Mock</Badge>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-center justify-center rounded-lg border border-dashed bg-muted/50">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Monitor className="h-8 w-8" />
                <p className="text-sm font-semibold">{preview}</p>
                <p className="text-xs">Awaiting render...</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
