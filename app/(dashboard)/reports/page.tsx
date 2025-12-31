import { Download, FileOutput, Send } from "lucide-react";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { reports } from "@/lib/mock";

export default function ReportsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Reports & Parent-Ready Summaries</h1>
            <p className="text-sm text-slate-600">Generate concise summaries and export-ready packets.</p>
          </div>
          <QuickActions
            actions={[
              { label: "Generate report", icon: <FileOutput className="h-4 w-4" /> },
              { label: "Send to parents", icon: <Send className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>
        <div className="card space-y-3 p-4">
          <p className="text-sm font-semibold text-slate-900">Report generator</p>
          <div className="grid gap-2 md:grid-cols-2">
            <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
              <option>Select audience</option>
              <option>Parents</option>
              <option>Academic lead</option>
              <option>Counselor</option>
            </select>
            <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
              <option>Time window</option>
              <option>Today</option>
              <option>This week</option>
              <option>This month</option>
            </select>
          </div>
          <textarea className="h-24 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Notes or highlights to include..." />
          <div className="flex items-center gap-2">
            <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Generate</button>
            <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800">Save preset</button>
          </div>
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">Recent reports</p>
            <span className="text-xs text-slate-500">Latest first</span>
          </div>
          <div className="space-y-2">
            {reports.map((report) => (
              <div key={report.id} className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{report.type}</p>
                  <p className="text-xs text-slate-600">
                    Audience: {report.audience} • {report.period}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="badge bg-slate-100 text-slate-700">{report.status}</span>
                  <button className="inline-flex items-center gap-1 font-semibold text-brand-700">
                    <Download className="h-4 w-4" />
                    Export
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <InsightPanel
        insights={[
          { title: "Parent-ready tone", description: "Keep language concise; limit jargon and add next steps.", badge: "Tip" },
          { title: "At-risk alerts", description: "Auto-attach risk notes for flagged students in weekly reports." },
          { title: "Export options", description: "Offer PDF and email for quick send-offs." }
        ]}
      />
    </div>
  );
}
