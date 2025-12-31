"use client";

import { useState } from "react";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { reports } from "@/lib/mock";
import { FileDown, NotebookPen, Sparkles } from "lucide-react";

export default function ReportsPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Reports & Parent-Ready Summaries</h1>
          <p className="text-sm text-muted-foreground">Generate concise updates, ready to export.</p>
        </div>
        <QuickActions actions={[{ label: "New report", icon: NotebookPen }, { label: "AI draft", icon: Sparkles }]} />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Report wizard</CardTitle>
            <CardDescription>Step {step} of 3</CardDescription>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map((s) => (
              <Badge key={s} variant={s === step ? "secondary" : "outline"}>
                {s}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {step === 1 && (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div>
                <Label>Student</Label>
                <Input placeholder="Name" />
              </div>
              <div>
                <Label>Type</Label>
                <Input placeholder="Weekly digest" />
              </div>
              <div className="md:col-span-2">
                <Label>Highlights</Label>
                <Textarea placeholder="Wins, areas, requests" />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-2">
              <Label>Evidence</Label>
              <Textarea placeholder="Scores, comments, notable behaviors" />
              <Label>Follow-up asks</Label>
              <Input placeholder="Parent actions" />
            </div>
          )}
          {step === 3 && (
            <div className="space-y-2">
              <Label>Delivery notes</Label>
              <Textarea placeholder="Tone, emphasis, scheduling" />
              <div className="flex gap-2">
                <Button size="sm" variant="secondary">
                  Export PDF
                </Button>
                <Button size="sm" variant="ghost">
                  Copy link
                </Button>
              </div>
            </div>
          )}
          <div className="flex justify-between pt-2">
            <Button variant="ghost" size="sm" disabled={step === 1} onClick={() => setStep((s) => Math.max(1, s - 1))}>
              Back
            </Button>
            <Button size="sm" onClick={() => setStep((s) => Math.min(3, s + 1))}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent reports</CardTitle>
            <CardDescription>Drafts and sent items.</CardDescription>
          </div>
          <Badge variant="secondary">{reports.length} files</Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.student}</TableCell>
                  <TableCell>{report.type}</TableCell>
                  <TableCell>
                    <Badge variant={report.status === "sent" ? "success" : report.status === "ready" ? "secondary" : "outline"}>
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{report.updated}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost" className="gap-2">
                      <FileDown className="h-4 w-4" />
                      Export
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
