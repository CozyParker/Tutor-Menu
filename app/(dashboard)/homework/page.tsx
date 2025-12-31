"use client";

import { useMemo, useState } from "react";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { homeworkQueue } from "@/lib/mock";
import { ClipboardList, CheckCheck, Clock3, ListChecks } from "lucide-react";

export default function HomeworkPage() {
  const [tab, setTab] = useState("pending");
  const filtered = useMemo(() => homeworkQueue.filter((h) => h.status === tab), [tab]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Homework & Practice Manager</h1>
          <p className="text-sm text-muted-foreground">Batch-review submissions and keep assignments on schedule.</p>
        </div>
        <QuickActions actions={[{ label: "Assign", icon: ClipboardList }, { label: "Bulk approve", icon: CheckCheck }]} />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Queues by status</CardTitle>
            <CardDescription>Switch tabs to focus.</CardDescription>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ListChecks className="h-4 w-4" />
            <span>{homeworkQueue.length} total</span>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList>
              <TabsTrigger value="pending">Pending Review</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="pending" className="pt-2">
              <HomeworkTable items={filtered} empty="No pending homework." />
            </TabsContent>
            <TabsContent value="scheduled" className="pt-2">
              <HomeworkTable items={filtered} empty="No scheduled items." />
            </TabsContent>
            <TabsContent value="completed" className="pt-2">
              <HomeworkTable items={filtered} empty="No completed homework." />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function HomeworkTable({ items, empty }: { items: typeof homeworkQueue; empty: string }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
        <span>Bulk actions ready</span>
        <div className="flex gap-2">
          <Button size="sm" variant="secondary">
            Approve selected
          </Button>
          <Button size="sm" variant="ghost">
            Send reminder
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Assignment</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Submissions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.dueDate}</TableCell>
              <TableCell>
                <Badge variant={item.status === "pending" ? "destructive" : item.status === "completed" ? "secondary" : "outline"}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-muted-foreground" />
                {item.submissions}
              </TableCell>
            </TableRow>
          ))}
          {items.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-muted-foreground">
                {empty}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
