"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { EmptyState } from "@/components/dashboard/empty-state";
import { insights, sessions, homeworkQueue, evaluationQueue, students } from "@/lib/mock";
import { AlertCircle, CheckCircle2, Clock3, Send, FileCheck, Brain, AlertTriangle } from "lucide-react";

export default function Page() {
  const pendingHomework = homeworkQueue.filter((h) => h.status === "pending");
  const pendingEvaluations = evaluationQueue.filter((e) => e.status !== "completed");
  const flaggedStudents = students.filter((s) => s.riskLevel !== "low");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Today&apos;s Command Center</h1>
          <p className="text-sm text-muted-foreground">Launch sessions, clear queues, and act on insights without leaving this view.</p>
        </div>
        <QuickActions
          actions={[
            { label: "Send reminders", icon: Send },
            { label: "Approve all", icon: FileCheck },
            { label: "Create revision plan", icon: Brain },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Today&apos;s sessions</CardTitle>
              <CardDescription>Stay ahead of live rooms and 1:1 touchpoints.</CardDescription>
            </div>
            <Badge variant="secondary">{sessions.length} items</Badge>
          </CardHeader>
          <CardContent>
            {sessions.length === 0 ? (
              <EmptyState
                icon={Clock3}
                title="No sessions scheduled"
                description="Add classes or 1:1 sessions to see them here."
                actionLabel="Create session"
              />
            ) : (
              <div className="space-y-3">
                {sessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between rounded-lg border bg-white px-3 py-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold">{session.title}</p>
                        <Badge variant={session.status === "live" ? "success" : session.status === "completed" ? "outline" : "secondary"}>
                          {session.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {session.time} · {session.studentOrClass}
                      </p>
                    </div>
                    <Button size="sm" variant={session.status === "live" ? "default" : "secondary"}>
                      {session.actionLabel}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Pending queue</CardTitle>
              <CardDescription>Keep turn-around tight.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <QueueRow label="Homework to review" count={pendingHomework.length} icon={CheckCircle2} />
              <QueueRow label="Evaluations pending" count={pendingEvaluations.length} icon={AlertCircle} />
              <QueueRow label="Students flagged" count={flaggedStudents.length} icon={AlertTriangle} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>One-click actions</CardTitle>
              <CardDescription>Move the day forward.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-2">
              <Button variant="secondary" size="sm" className="justify-start">
                <Send className="mr-2 h-4 w-4" />
                Send reminder
              </Button>
              <Button variant="secondary" size="sm" className="justify-start">
                <FileCheck className="mr-2 h-4 w-4" />
                Approve all
              </Button>
              <Button variant="secondary" size="sm" className="justify-start">
                <Brain className="mr-2 h-4 w-4" />
                Create plan
              </Button>
              <Button variant="secondary" size="sm" className="justify-start">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Flag follow-up
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Action queue</CardTitle>
            <CardDescription>Review homework and evaluations side-by-side.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold">Homework to review</p>
                  <Badge variant="secondary">{pendingHomework.length}</Badge>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Due</TableHead>
                      <TableHead>Subs</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingHomework.slice(0, 4).map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.dueDate}</TableCell>
                        <TableCell>{item.submissions}</TableCell>
                      </TableRow>
                    ))}
                    {pendingHomework.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={3} className="text-muted-foreground">
                          Nothing waiting — stay proactive.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold">Evaluations pending</p>
                  <Badge variant="secondary">{pendingEvaluations.length}</Badge>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingEvaluations.slice(0, 4).map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{getStudentName(item.studentId)}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === "pending" ? "destructive" : "secondary"}>{item.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                    {pendingEvaluations.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={3} className="text-muted-foreground">
                          All evaluations are clear.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>At-risk insights</CardTitle>
            <CardDescription>Surface risk early with suggested moves.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {insights.map((item) => (
              <div key={item.id} className="rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <Badge variant={item.intent === "warn" ? "destructive" : "secondary"}>{item.intent}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-2 flex gap-2">
                  <Button size="sm" variant="secondary">
                    Apply
                  </Button>
                  <Button size="sm" variant="ghost">
                    Snooze
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function getStudentName(id: string) {
  return students.find((s) => s.id === id)?.name ?? "Unknown";
}

function QueueRow({ label, count, icon: Icon }: { label: string; count: number; icon: typeof AlertCircle }) {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-muted/60 px-3 py-2">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <p className="text-sm font-medium">{label}</p>
      </div>
      <Badge variant={count > 0 ? "secondary" : "outline"}>{count}</Badge>
    </div>
  );
}
