import { Plus, Settings2, Zap } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { automationRules } from "@/lib/mock";
import type { AutomationRule } from "@/lib/types";

const columns = [
  { key: "name", header: "Rule" },
  { key: "trigger", header: "Trigger" },
  { key: "action", header: "Action" },
  { key: "channel", header: "Channel" },
  {
    key: "status",
    header: "Status",
    render: (value: AutomationRule["status"]) => (
      <span className={`chip ${value === "active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700"}`}>{value}</span>
    )
  }
];

export default function AutomationsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Automation & Rules</h1>
            <p className="text-sm text-slate-600">Define tutor-side triggers and actions to reduce manual work.</p>
          </div>
          <QuickActions
            actions={[
              { label: "Create rule", icon: <Plus className="h-4 w-4" /> },
              { label: "Pause all", icon: <Settings2 className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>
        <div className="card space-y-3 p-4">
          <p className="text-sm font-semibold text-slate-900">Rules list</p>
          <DataTable columns={columns} data={automationRules} emptyMessage="No automation rules yet." />
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-brand-600" />
            <p className="text-sm font-semibold text-slate-900">Create rule</p>
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
              <option>Trigger</option>
              <option>Missed practice</option>
              <option>Risk score</option>
              <option>Session completed</option>
            </select>
            <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
              <option>Action</option>
              <option>Send SMS</option>
              <option>Send email</option>
              <option>Create task</option>
            </select>
            <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
              <option>Channel</option>
              <option>SMS</option>
              <option>Email</option>
              <option>Internal</option>
            </select>
          </div>
          <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Add rule</button>
        </div>
      </div>
      <InsightPanel
        insights={[
          { title: "High-signal triggers", description: "Use risk score + missed practice to avoid noise.", badge: "Tip" },
          { title: "Parent channels", description: "Default to email for parents; use SMS only when urgent." },
          { title: "Audit log", description: "Keep logs for automated actions for transparency." }
        ]}
      />
    </div>
  );
}
