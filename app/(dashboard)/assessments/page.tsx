import { Plus, Sparkles, Wand2 } from "lucide-react";
import { DataTable } from "@/components/dashboard/DataTable";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { questionBank } from "@/lib/mock";
import type { QuestionItem } from "@/lib/types";

const columns = [
  { key: "type", header: "Type" },
  { key: "prompt", header: "Prompt" },
  { key: "subject", header: "Subject" },
  { key: "difficulty", header: "Difficulty" }
];

export default function AssessmentsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Question & Assessment Builder</h1>
            <p className="text-sm text-slate-600">Manage the bank, draft MCQs, and case studies quickly.</p>
          </div>
          <QuickActions
            actions={[
              { label: "Create MCQ", icon: <Plus className="h-4 w-4" /> },
              { label: "Create Case Study", icon: <Wand2 className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">Question bank</p>
            <span className="text-xs text-slate-500">Latest additions</span>
          </div>
          <DataTable columns={columns} data={questionBank} emptyMessage="No questions in the bank yet." />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card space-y-3 p-4">
            <p className="text-sm font-semibold text-slate-900">Create MCQ</p>
            <div className="space-y-2">
              <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Prompt" />
              <div className="grid grid-cols-2 gap-2">
                <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Subject" />
                <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
                  <option>Difficulty</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
              <button className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Add to bank</button>
            </div>
          </div>
          <div className="card space-y-3 p-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-600" />
              <p className="text-sm font-semibold text-slate-900">Create Case Study</p>
            </div>
            <div className="space-y-2">
              <textarea className="h-24 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Scenario prompt" />
              <div className="grid grid-cols-2 gap-2">
                <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Subject" />
                <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Expected outcome" />
              </div>
              <button className="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800">
                Save draft
              </button>
            </div>
          </div>
        </div>
        {!questionBank.length && (
          <EmptyState title="No assessments" description="Add a new question or import a set to get started." />
        )}
      </div>
      <InsightPanel
        insights={[
          { title: "Coverage gaps", description: "Add 3 more hard questions for Algebra to balance the bank.", badge: "Action" },
          { title: "Reuse wins", description: "Case Study q-2 is high performing. Clone for Bio cohort." },
          { title: "Bias check", description: "Review language for clarity before publishing to students." }
        ]}
      />
    </div>
  );
}
