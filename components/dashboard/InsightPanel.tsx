type Insight = {
  title: string;
  description: string;
  badge?: string;
};

type Props = {
  title?: string;
  insights: Insight[];
};

export function InsightPanel({ title = "Insights", insights }: Props) {
  return (
    <aside className="card sticky top-4 h-fit space-y-3 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700">AI assist</span>
      </div>
      <div className="space-y-3">
        {insights.map((insight) => (
          <div key={insight.title} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-slate-900">{insight.title}</p>
              {insight.badge && <span className="chip">{insight.badge}</span>}
            </div>
            <p className="mt-1 text-xs text-slate-600">{insight.description}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}
