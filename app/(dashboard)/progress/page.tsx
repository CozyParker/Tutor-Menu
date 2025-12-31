"use client";

import { useState } from "react";
import { Filter, NotebookPen, Sparkles, UserRound } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { students } from "@/lib/mock";
import type { Student } from "@/lib/types";

const columns = [
  { key: "name", header: "Student" },
  { key: "cohort", header: "Cohort" },
  {
    key: "mastery",
    header: "Mastery",
    render: (value: number) => <span className="font-semibold text-slate-900">{value}%</span>
  },
  {
    key: "risk",
    header: "Risk",
    render: (value: Student["risk"]) => {
      const map: Record<Student["risk"], string> = {
        low: "bg-emerald-100 text-emerald-700",
        medium: "bg-amber-100 text-amber-700",
        high: "bg-rose-100 text-rose-700"
      };
      return <span className={`chip ${map[value]}`}>{value}</span>;
    }
  },
  {
    key: "notes",
    header: "Notes"
  }
];

export default function ProgressPage() {
  const [active, setActive] = useState<Student | null>(students[0] ?? null);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Student Progress & Evaluation</h1>
            <p className="text-sm text-slate-600">Track mastery and open student snapshots instantly.</p>
          </div>
          <QuickActions
            actions={[
              { label: "Filter cohort", icon: <Filter className="h-4 w-4" /> },
              { label: "Add tutor note", icon: <NotebookPen className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserRound className="h-4 w-4 text-brand-600" />
              <p className="text-sm font-semibold text-slate-900">Cohort roster</p>
            </div>
            <span className="text-xs text-slate-500">Select a row for details</span>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  {columns.map((col) => (
                    <th key={String(col.key)} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                      {col.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {students.map((student) => (
                  <tr
                    key={student.id}
                    onClick={() => setActive(student)}
                    className="cursor-pointer hover:bg-slate-50"
                    aria-label={`Open details for ${student.name}`}
                  >
                    {columns.map((col) => {
                      const value = student[col.key as keyof Student];
                      return (
                        <td key={String(col.key)} className="px-4 py-3 text-sm text-slate-700">
                          {col.render ? col.render(value as never, student) : String(value)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {active && (
          <div className="card space-y-3 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Student detail drawer</p>
              <span className="badge bg-slate-100 text-slate-700">{active.cohort}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs text-slate-600">Mastery</p>
                <p className="text-xl font-semibold text-slate-900">{active.mastery}%</p>
                <p className="text-xs text-slate-500">Snapshot updated today</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs text-slate-600">Recent errors</p>
                <p className="text-sm font-semibold text-slate-900">Pacing and accuracy</p>
                <p className="text-xs text-slate-500">Focus: careless mistakes during timed drills</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs text-slate-600">Tutor notes</p>
                <p className="text-sm font-semibold text-slate-900">{active.notes}</p>
                <p className="text-xs text-slate-500">Next: send micro-plan</p>
              </div>
            </div>
            <QuickActions
              actions={[
                { label: "Generate mastery snapshot", icon: <Sparkles className="h-4 w-4" /> },
                { label: "Log tutor note", icon: <NotebookPen className="h-4 w-4" />, variant: "ghost" }
              ]}
            />
          </div>
        )}
      </div>
      <InsightPanel
        title="At-risk suggestions"
        insights={[
          { title: "Pacing friction", description: "3 students slowed during mock tests. Offer speed lap drill set.", badge: "Action" },
          { title: "Notes quality", description: "Parent notes missing for 2 cohorts. Generate parent-ready copy." },
          { title: "Error tags", description: "Tag careless vs concept errors to auto-route drills." }
        ]}
      />
    </div>
  );
}
