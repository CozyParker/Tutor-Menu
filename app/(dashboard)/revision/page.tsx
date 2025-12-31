import { CalendarRange, RefreshCw, Sparkles } from "lucide-react";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { revisionPlans } from "@/lib/mock";

export default function RevisionPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Revision & Reinforcement Planner</h1>
            <p className="text-sm text-slate-600">Generate weak-area plans and keep them on cadence.</p>
          </div>
          <QuickActions
            actions={[
              { label: "Generate plan", icon: <Sparkles className="h-4 w-4" /> },
              { label: "Reschedule", icon: <RefreshCw className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex items-center gap-2">
            <CalendarRange className="h-4 w-4 text-brand-600" />
            <p className="text-sm font-semibold text-slate-900">Weak-area inputs</p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Focus area (e.g., Stoichiometry)" />
            <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Cohort or student" />
            <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
              <option>Cadence</option>
              <option>Daily</option>
              <option>3x week</option>
              <option>Weekly</option>
            </select>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            <Sparkles className="h-4 w-4" />
            Generate plan
          </button>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {revisionPlans.map((plan) => (
            <div key={plan.id} className="card space-y-2 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">{plan.focus}</p>
                <span className="badge bg-slate-100 text-slate-700">{plan.status}</span>
              </div>
              <p className="text-xs text-slate-600">Owner: {plan.owner}</p>
              <p className="text-xs text-slate-600">Cadence: {plan.cadence}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-700">Next step: sync drills</span>
                <button className="font-semibold text-brand-700">Open plan</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <InsightPanel
        insights={[
          { title: "Revision saturation", description: "Limit to 3 simultaneous plans per cohort to avoid overload.", badge: "Guidance" },
          { title: "Reinforce errors", description: "Tag careless vs concept errors to auto-pull drills." },
          { title: "Parent-ready", description: "Generate parent-ready recap after 2 sessions of the plan." }
        ]}
      />
    </div>
  );
}
