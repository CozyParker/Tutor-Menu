"use client";

import { useMemo, useState } from "react";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { classGroups, students } from "@/lib/mock";
import { Student } from "@/lib/types";
import { AlertTriangle, Filter, NotebookPen } from "lucide-react";

export default function ProgressPage() {
  const [cohort, setCohort] = useState<string>("all");
  const [selected, setSelected] = useState<Student | null>(null);
  const [open, setOpen] = useState(false);

  const cohorts = useMemo(() => [{ label: "All cohorts", value: "all" }, ...classGroups.map((c) => ({ label: c.name, value: c.name }))], []);
  const filteredStudents = students.filter((s) => cohort === "all" || s.cohort === cohort);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Student Progress & Evaluation</h1>
          <p className="text-sm text-muted-foreground">Evaluate mastery, resolve flags, and capture tutor notes.</p>
        </div>
        <QuickActions actions={[{ label: "Add note", icon: NotebookPen }, { label: "Filter", icon: Filter }]} />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Cohort roster</CardTitle>
            <CardDescription>Open a student to see detail.</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Select value={cohort} onValueChange={setCohort} options={cohorts} />
            <Input placeholder="Search students" className="w-48" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Cohort</TableHead>
                <TableHead>Mastery</TableHead>
                <TableHead>Risk</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.cohort}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: `${student.mastery}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground">{student.mastery}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={student.riskLevel === "high" ? "destructive" : student.riskLevel === "medium" ? "secondary" : "outline"}>
                      {student.riskLevel}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setSelected(student);
                        setOpen(true);
                      }}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filteredStudents.length === 0 && (
            <p className="p-4 text-sm text-muted-foreground">No students in this cohort yet.</p>
          )}
        </CardContent>
      </Card>

      {selected && (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="w-full max-w-xl">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{selected.name}</p>
                  <p className="text-sm text-muted-foreground">Mastery snapshot and notes.</p>
                </div>
                <Badge variant={selected.riskLevel === "high" ? "destructive" : "secondary"}>{selected.riskLevel} risk</Badge>
              </div>
              <div className="space-y-3 rounded-lg border bg-muted/40 p-3">
                <p className="text-sm font-semibold">Mastery</p>
                <Slider value={selected.mastery} onChange={() => {}} />
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span>Recent errors:</span>
                  <span className="font-medium text-foreground">{selected.recentErrors.join(" · ")}</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold">Notes</p>
                <Textarea defaultValue={selected.notes} className="min-h-[120px]" />
                <div className="flex gap-2">
                  <Button size="sm">Save note</Button>
                  <Button size="sm" variant="ghost">
                    Share
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold">Follow-ups</p>
                <div className="rounded-lg border bg-muted/50 p-3 text-sm text-muted-foreground">
                  <div className="mb-2 flex items-center gap-2 text-amber-600">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Recent missteps</span>
                  </div>
                  {selected.recentErrors.map((err) => (
                    <p key={err} className="leading-5 text-foreground">
                      • {err}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
}
