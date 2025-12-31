import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({ title, description, action }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-slate-200 bg-white p-10 text-center">
      <p className="text-lg font-semibold text-slate-900">{title}</p>
      <p className="max-w-lg text-sm text-slate-600">{description}</p>
      {action}
    </div>
  );
}
