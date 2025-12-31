import { AlarmClock, AlertTriangle, CheckCircle2, Play, Send, Sparkles, TriangleAlert } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { classGroups, evaluationItems, homeworkItems, sessions, students } from "@/lib/mock";
import type { Session } from "@/lib/types";

const sessionColumns = [
  { key: "time", header: "Time" },
  { key: "topic", header: "Topic" },
  { key: "group", header: "Group" },
  {
    key: "status",
    header: "Status",
    render: (value: Session["status"]) => {
      const colors: Record<Session["status"], string> = {
        live: "bg-emerald-100 text-emerald-700",
        upcoming: "bg-amber-100 text-amber-700",
        completed: "bg-slate-100 text-slate-700"
      };
      return <span className={`chip ${colors[value]}`}>{value}</span>;
    }
  },
  {
    key: "joinLink",
    header: "",
    render: () => (
      <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
        <Play className="h-4 w-4" />
        Join
      </button>
    )
  }
];

const pendingHomework = homeworkItems.filter((h) => h.status === "pending").slice(0, 3);
const pendingEvaluations = evaluationItems.filter((e) => e.status === "pending").slice(0, 3);
const flaggedStudents = students.filter((s) => s.risk === "high").slice(0, 3);

export default function DashboardPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Today’s Command Center</h1>
            <p className="text-sm text-slate-600">
              Prioritize sessions, approvals, and follow-through without leaving this view.
            </p>
          </div>
          <QuickActions
            actions={[
              { label: "Send reminder", icon: <Send className="h-4 w-4" /> },
              { label: "Approve all", icon: <CheckCircle2 className="h-4 w-4" /> },
              { label: "Create revision plan", icon: <Sparkles className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="card space-y-3 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Today’s sessions</p>
              <span className="chip bg-brand-50 text-brand-700">{sessions.length} slots</span>
            </div>
            <DataTable columns={sessionColumns} data={sessions} />
          </div>

          <div className="grid gap-3">
            <div className="card space-y-3 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">Homework to review</p>
                <span className="badge bg-amber-50 text-amber-700">{pendingHomework.length} pending</span>
              </div>
              {pendingHomework.length ? (
                <div className="space-y-2">
                  {pendingHomework.map((item) => (
                    <div key={item.id} className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-600">
                          {item.student} • Due {item.due}
                        </p>
                      </div>
                      <button className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">Approve</button>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState title="Nothing queued" description="All homework is cleared for today." />
              )}
            </div>

            <div className="card grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
              <div className="space-y-2 rounded-lg border border-slate-100 bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">Evaluations pending</p>
                {pendingEvaluations.map((item) => (
                  <div key={item.id} className="flex items-center justify-between rounded-md bg-white px-3 py-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.student}</p>
                      <p className="text-xs text-slate-600">{item.metric}</p>
                    </div>
                    <button className="text-xs font-semibold text-brand-700">Review</button>
                  </div>
                ))}
              </div>
              <div className="space-y-2 rounded-lg border border-slate-100 bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">Students flagged</p>
                {flaggedStudents.map((student) => (
                  <div key={student.id} className="flex items-center justify-between rounded-md bg-white px-3 py-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{student.name}</p>
                      <p className="text-xs text-slate-600">{student.notes}</p>
                    </div>
                    <span className="badge bg-rose-50 text-rose-700">High</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="card space-y-3 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">Cohorts overview</p>
            <span className="text-xs text-slate-500">Sorted by attention needed</span>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {classGroups.map((group) => (
              <div key={group.id} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">{group.name}</p>
                  <span className="badge bg-slate-100 text-slate-700">{group.status}</span>
                </div>
                <p className="text-xs text-slate-600">{group.schedule}</p>
                <p className="text-xs text-slate-600">Subject: {group.subject}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-700">
                  <span>{group.students} students</span>
                  <button className="text-xs font-semibold text-brand-700">Open</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <InsightPanel
          title="At-risk insights"
          insights={[
            { title: "Elias Kim", description: "Missed 2 practices. Auto-schedule a 15m check-in.", badge: "High risk" },
            { title: "Chem Readiness", description: "Stoichiometry errors up 12%. Push targeted drills." },
            { title: "SAT Mastery", description: "Verbal pacing slow. Recommend speed lap drills." }
          ]}
        />
        <div className="card space-y-3 p-4">
          <div className="flex items-center gap-2">
            <AlarmClock className="h-4 w-4 text-amber-600" />
            <p className="text-sm font-semibold text-slate-900">One-click actions</p>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              { label: "Send reminders", icon: Send },
              { label: "Approve all homework", icon: CheckCircle2 },
              { label: "Create revision sprint", icon: Sparkles },
              { label: "Flag student for review", icon: TriangleAlert }
            ].map((action) => (
              <button
                key={action.label}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300"
              >
                <span>{action.label}</span>
                <action.icon className="h-4 w-4 text-slate-500" />
              </button>
            ))}
          </div>
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-rose-600" />
            <p className="text-sm font-semibold text-slate-900">Evaluation queue</p>
          </div>
          <DataTable
            columns={[
              { key: "student", header: "Student" },
              { key: "metric", header: "Metric" },
              { key: "status", header: "Status" }
            ]}
            data={evaluationItems}
            emptyMessage="No evaluations waiting."
          />
        </div>
      </div>
    </div>
  );
}
