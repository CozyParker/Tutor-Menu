import { CheckSquare, Flag, ListOrdered } from "lucide-react";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { projects } from "@/lib/mock";

export default function ProjectsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Project & Case Oversight</h1>
            <p className="text-sm text-slate-600">Track milestones and rubric checklists for tutor-led projects.</p>
          </div>
          <QuickActions
            actions={[
              { label: "Add milestone", icon: <Flag className="h-4 w-4" /> },
              { label: "View rubric", icon: <CheckSquare className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>
        <div className="card space-y-3 p-4">
          <div className="flex items-center gap-2">
            <ListOrdered className="h-4 w-4 text-brand-600" />
            <p className="text-sm font-semibold text-slate-900">Milestones timeline</p>
          </div>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{project.title}</p>
                  <p className="text-xs text-slate-600">
                    {project.cohort} • Current: {project.milestone}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="badge bg-slate-100 text-slate-700">{project.status}</span>
                  <button className="font-semibold text-brand-700">Open board</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card space-y-3 p-4">
          <p className="text-sm font-semibold text-slate-900">Rubric checklist</p>
          <div className="grid gap-2 md:grid-cols-2">
            {["Evidence cited", "Clear argument", "Data accuracy", "Presentation ready"].map((item) => (
              <label key={item} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" defaultChecked />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>
      <InsightPanel
        insights={[
          { title: "At-risk project", description: "SAT Parent Dossier behind. Add Saturday review slot.", badge: "Alert" },
          { title: "Rubric gaps", description: "Ensure data accuracy checks for Chem Safety Audit." },
          { title: "Celebrations", description: "Bio Lab Portfolio on-track. Queue parent-ready note." }
        ]}
      />
    </div>
  );
}
