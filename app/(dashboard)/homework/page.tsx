"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, ClipboardList, Filter, Send } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { homeworkItems } from "@/lib/mock";
import type { HomeworkItem } from "@/lib/types";

const columns = [
  { key: "title", header: "Title" },
  { key: "student", header: "Student / Cohort" },
  { key: "due", header: "Due" },
  {
    key: "status",
    header: "Status",
    render: (value: HomeworkItem["status"]) => {
      const map: Record<HomeworkItem["status"], string> = {
        pending: "bg-amber-100 text-amber-700",
        scheduled: "bg-blue-100 text-blue-700",
        completed: "bg-emerald-100 text-emerald-700"
      };
      return <span className={`chip ${map[value]}`}>{value}</span>;
    }
  },
  {
    key: "difficulty",
    header: "Difficulty",
    render: (value: HomeworkItem["difficulty"]) => <span className="badge bg-slate-100 text-slate-700">{value}</span>
  }
];

const tabs: HomeworkItem["status"][] = ["pending", "scheduled", "completed"];

export default function HomeworkPage() {
  const [activeTab, setActiveTab] = useState<HomeworkItem["status"]>("pending");

  const filtered = useMemo(() => homeworkItems.filter((item) => item.status === activeTab), [activeTab]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Homework & Practice Manager</h1>
            <p className="text-sm text-slate-600">Approve, schedule, and track homework with bulk actions.</p>
          </div>
          <QuickActions
            actions={[
              { label: "Bulk approve", icon: <CheckCircle2 className="h-4 w-4" /> },
              { label: "Send reminder", icon: <Send className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${
                    activeTab === tab ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
          <DataTable columns={columns} data={filtered} emptyMessage="No items in this view." />
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4 text-brand-600" />
            <p className="text-sm font-semibold text-slate-900">Bulk actions</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {["Approve all pending", "Schedule tomorrow", "Send lateness reminders", "Export practice log"].map((action) => (
              <button
                key={action}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-slate-300"
              >
                <span>{action}</span>
                <CheckCircle2 className="h-4 w-4 text-slate-500" />
              </button>
            ))}
          </div>
        </div>
        {!filtered.length && (
          <EmptyState
            title="No homework items"
            description="Everything is cleared. Use quick actions to schedule the next practice block."
            action={<button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Create practice</button>}
          />
        )}
      </div>
      <InsightPanel
        insights={[
          { title: "Approval queue", description: "4 pending reviews. Approve together to unblock practice.", badge: "Now" },
          { title: "Pacing gaps", description: "SAT cohort slow on reading tasks. Assign 15-minute speed lap set." },
          { title: "Difficulty mix", description: "Balance medium and hard items to avoid burnout this week." }
        ]}
      />
    </div>
  );
}
