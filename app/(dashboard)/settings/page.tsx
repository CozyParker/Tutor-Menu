import { Save, SlidersHorizontal } from "lucide-react";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";

export default function SettingsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Tutor Settings & Preferences</h1>
            <p className="text-sm text-slate-600">Control tone, strictness, and guardrails for your workflow.</p>
          </div>
          <QuickActions
            actions={[
              { label: "Save settings", icon: <Save className="h-4 w-4" /> },
              { label: "Reset", icon: <SlidersHorizontal className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>
        <div className="card space-y-4 p-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">Strictness</label>
              <input type="range" min="0" max="10" defaultValue="6" className="w-full accent-slate-900" />
              <p className="text-xs text-slate-600">Higher strictness applies tougher review gates.</p>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">Tone</label>
              <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
                <option>Confident</option>
                <option>Warm</option>
                <option>Direct</option>
              </select>
              <p className="text-xs text-slate-600">Adjust the tone used in parent-ready messages.</p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">Daily limits</label>
              <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Max sessions per day" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">Notifications</label>
              <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
                <option>Smart</option>
                <option>All</option>
                <option>Muted</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">Communication</label>
              <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
                <option>Parents: email</option>
                <option>Parents: SMS</option>
                <option>Tutor team: Slack</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">Escalation guardrails</label>
            <textarea className="h-24 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Describe when to escalate to parents or leads..." />
          </div>
          <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Save preferences</button>
        </div>
      </div>
      <InsightPanel
        insights={[
          { title: "Tone guidelines", description: "Parents prefer concise bullet updates with next steps.", badge: "Tip" },
          { title: "Limits", description: "Limit sessions to 5/day to protect quality." },
          { title: "Escalation", description: "Auto-escalate when risk score > 80 or 2 missed tasks." }
        ]}
      />
    </div>
  );
}
