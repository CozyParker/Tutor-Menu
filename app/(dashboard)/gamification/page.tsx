import { ToggleLeft, Trophy, Zap } from "lucide-react";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";

export default function GamificationPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Gamification Controls</h1>
            <p className="text-sm text-slate-600">Tutor-only toggles and rule cards—no student UI.</p>
          </div>
          <QuickActions
            actions={[
              { label: "Toggle all off", icon: <ToggleLeft className="h-4 w-4" /> },
              { label: "Add rule", icon: <Zap className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-brand-600" />
            <p className="text-sm font-semibold text-slate-900">Controls</p>
          </div>
          <div className="space-y-2">
            {["Badges", "Streaks", "XP points", "Leaderboards"].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item}</p>
                  <p className="text-xs text-slate-600">Tutor-controlled only</p>
                </div>
                <button className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">Active</button>
              </div>
            ))}
          </div>
        </div>
        <div className="card space-y-3 p-4">
          <p className="text-sm font-semibold text-slate-900">Rules editor</p>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              { title: "Completion bonus", body: "Trigger: Homework on time → +20 XP → Slack notice" },
              { title: "Recovery plan", body: "Trigger: 2 missed tasks → Assign quick win quest → Email parents" },
              { title: "Streak support", body: "Trigger: Streak < 3 → Send encouragement → Schedule micro-task" }
            ].map((rule) => (
              <div key={rule.title} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">{rule.title}</p>
                <p className="text-xs text-slate-600">{rule.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <InsightPanel
        insights={[
          { title: "Balance", description: "Limit XP boosts to 2 per week to avoid fatigue.", badge: "Tip" },
          { title: "Streak recovery", description: "Auto-enable recovery quests for flagged students." },
          { title: "Parent-safe", description: "Keep rewards academic and transparent for parents." }
        ]}
      />
    </div>
  );
}
