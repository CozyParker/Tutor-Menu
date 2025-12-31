import { Image, PlayCircle, Sparkles } from "lucide-react";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";

export default function VisualsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Visual Teaching Tools</h1>
            <p className="text-sm text-slate-600">Generate diagrams and keep explainer assets handy.</p>
          </div>
          <QuickActions
            actions={[
              { label: "Generate diagram", icon: <Sparkles className="h-4 w-4" /> },
              { label: "Start board", icon: <PlayCircle className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex items-center gap-2">
            <Image className="h-4 w-4 text-brand-600" />
            <p className="text-sm font-semibold text-slate-900">Generate diagram</p>
          </div>
          <textarea className="h-24 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Describe the concept or process..." />
          <div className="flex items-center gap-2">
            <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Generate</button>
            <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800">Save preset</button>
          </div>
        </div>
        <div className="card space-y-3 p-4">
          <p className="text-sm font-semibold text-slate-900">Preview</p>
          <div className="flex min-h-[180px] items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50">
            <EmptyState title="No preview yet" description="Generate a diagram to view the latest visual aid." />
          </div>
        </div>
      </div>
      <InsightPanel
        insights={[
          { title: "Diagram cues", description: "Students respond better to 3-step visuals with labels.", badge: "Tip" },
          { title: "Reuse wins", description: "Algebra flowchart used 6x last week. Save as favorite." },
          { title: "Accessibility", description: "Add alt text and color-safe palettes to shared visuals." }
        ]}
      />
    </div>
  );
}
