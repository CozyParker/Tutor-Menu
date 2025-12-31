import { CalendarClock, Filter, Plus } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { classGroups } from "@/lib/mock";
import type { ClassGroup } from "@/lib/types";

const columns = [
  { key: "name", header: "Class" },
  { key: "schedule", header: "Schedule" },
  { key: "subject", header: "Subject" },
  { key: "students", header: "Students" },
  {
    key: "status",
    header: "Status",
    render: (value: ClassGroup["status"]) => {
      const map: Record<ClassGroup["status"], string> = {
        active: "bg-emerald-100 text-emerald-700",
        paused: "bg-slate-100 text-slate-700",
        upcoming: "bg-amber-100 text-amber-700"
      };
      return <span className={`chip ${map[value]}`}>{value}</span>;
    }
  }
];

export default function ClassesPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Classes & Cohorts</h1>
            <p className="text-sm text-slate-600">Monitor cohorts, schedules, and health so tutors can act quickly.</p>
          </div>
          <QuickActions
            actions={[
              { label: "New class", icon: <Plus className="h-4 w-4" /> },
              { label: "Filter by risk", icon: <Filter className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">All cohorts</p>
            <span className="text-xs text-slate-500">Sorted by status</span>
          </div>
          <DataTable columns={columns} data={classGroups} emptyMessage="No cohorts created yet." />
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex items-center gap-2">
            <CalendarClock className="h-4 w-4 text-brand-600" />
            <p className="text-sm font-semibold text-slate-900">Upcoming sessions</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {classGroups.slice(0, 4).map((group) => (
              <div key={group.id} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">{group.name}</p>
                <p className="text-xs text-slate-600">{group.schedule}</p>
                <p className="text-xs text-slate-600">Subject: {group.subject}</p>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-700">{group.students} students</span>
                  <button className="font-semibold text-brand-700">Open roster</button>
                </div>
              </div>
            ))}
            {!classGroups.length && (
              <EmptyState title="No upcoming sessions" description="Add a class to begin scheduling and tracking sessions." />
            )}
          </div>
        </div>
      </div>
      <InsightPanel
        insights={[
          { title: "SAT Mastery", description: "High attendance this week. Consider adding speed lab blocks." },
          { title: "Chem Readiness", description: "3 students flagged as high risk. Suggest parent-ready updates.", badge: "Attention" },
          { title: "Algebra Sprint A", description: "Practice completion up 8%. Celebrate in next session." }
        ]}
      />
    </div>
  );
}
