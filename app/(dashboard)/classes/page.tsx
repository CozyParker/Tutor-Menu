"use client";

import { QuickActions } from "@/components/dashboard/quick-actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { classGroups } from "@/lib/mock";
import { Layers, Plus, Users } from "lucide-react";

export default function ClassesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Classes & Cohorts</h1>
          <p className="text-sm text-muted-foreground">Keep rosters aligned and know where each cohort is headed.</p>
        </div>
        <QuickActions actions={[{ label: "New class", icon: Plus }, { label: "Add cohort", icon: Layers }]} />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Active groups</CardTitle>
            <CardDescription>Timelines and headcounts at a glance.</CardDescription>
          </div>
          <Badge variant="secondary">{classGroups.length} cohorts</Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Students</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classGroups.map((group) => (
                <TableRow key={group.id}>
                  <TableCell className="font-medium">{group.name}</TableCell>
                  <TableCell>{group.level}</TableCell>
                  <TableCell>{group.schedule}</TableCell>
                  <TableCell>
                    <div className="inline-flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      {group.students}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Manage</Button>
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
