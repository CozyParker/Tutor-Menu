"use client";

import { useState, type ReactNode } from "react";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { questions } from "@/lib/mock";
import { Hammer, Layers, Plus, Sparkles } from "lucide-react";

export default function AssessmentsPage() {
  const [mcqOpen, setMcqOpen] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Question & Assessment Builder</h1>
          <p className="text-sm text-muted-foreground">Curate reusable questions and launch mini-assessments.</p>
        </div>
        <QuickActions actions={[{ label: "Create MCQ", icon: Plus }, { label: "Create case", icon: Hammer }]} />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Question bank</CardTitle>
            <CardDescription>Sorted by recency.</CardDescription>
          </div>
          <Badge variant="secondary">{questions.length} items</Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prompt</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Last used</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questions.map((q) => (
                <TableRow key={q.id}>
                  <TableCell className="font-medium">{q.prompt}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{q.type}</Badge>
                  </TableCell>
                  <TableCell>{q.subject}</TableCell>
                  <TableCell>{q.difficulty}</TableCell>
                  <TableCell>{q.lastUsed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <BuilderCard
          title="Create MCQ"
          description="Fast multiple-choice builder for checkpoints."
          open={mcqOpen}
          onToggle={() => setMcqOpen((s) => !s)}
          fields={<MCQForm />}
        />
        <BuilderCard
          title="Create Case Study"
          description="Scenario-style prompts with structured answers."
          open={caseOpen}
          onToggle={() => setCaseOpen((s) => !s)}
          fields={<CaseForm />}
        />
      </div>
    </div>
  );
}

function BuilderCard({ title, description, open, onToggle, fields }: { title: string; description: string; open: boolean; onToggle: () => void; fields: ReactNode }) {
  return (
    <Card className="border-dashed">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <Button variant="secondary" size="sm" onClick={onToggle}>
          {open ? "Close" : "Open"}
        </Button>
      </CardHeader>
      {open && <CardContent className="space-y-3">{fields}</CardContent>}
    </Card>
  );
}

function MCQForm() {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-semibold">Prompt</Label>
      <Textarea placeholder="Ask a concise, level-appropriate question" />
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Subject</Label>
          <Input placeholder="e.g., Algebra" />
        </div>
        <div>
          <Label>Difficulty</Label>
          <Input placeholder="Easy/Medium/Hard" />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Options</Label>
        {["A", "B", "C", "D"].map((opt) => (
          <Input key={opt} placeholder={`Option ${opt}`} />
        ))}
      </div>
      <Button className="gap-2">
        <Sparkles className="h-4 w-4" />
        Generate distractors
      </Button>
    </div>
  );
}

function CaseForm() {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-semibold">Scenario</Label>
      <Textarea placeholder="Outline the scenario and task" />
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Subject</Label>
          <Input placeholder="e.g., Physics" />
        </div>
        <div>
          <Label>Rubric focus</Label>
          <Input placeholder="Accuracy, reasoning..." />
        </div>
      </div>
      <Label>Expected outcomes</Label>
      <Textarea placeholder="List success criteria" />
      <div className="flex gap-2">
        <Button variant="secondary" size="sm" className="gap-2">
          <Layers className="h-4 w-4" />
          Save template
        </Button>
        <Button size="sm" className="gap-2">
          <Hammer className="h-4 w-4" />
          Create case
        </Button>
      </div>
    </div>
  );
}
