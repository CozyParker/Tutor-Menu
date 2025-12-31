import { Bell, Search, User } from "lucide-react";
import { tutor } from "@/lib/mock";

export function TopBar() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4">
      <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 shadow-sm">
        <Search className="h-4 w-4 text-slate-500" />
        <input
          type="search"
          placeholder="Search sessions, students, tasks"
          className="w-64 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative rounded-full border border-slate-200 bg-white p-2 shadow-sm hover:bg-slate-50">
          <Bell className="h-4 w-4 text-slate-600" />
          <span className="absolute -right-0.5 -top-0.5 inline-flex h-2 w-2 rounded-full bg-rose-500" />
        </button>
        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <div className="rounded-full bg-brand-100 px-2 py-1 text-xs font-semibold text-brand-700">{tutor.name.split(" ")[0]}</div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{tutor.name}</p>
            <p className="text-xs text-slate-500">{tutor.role}</p>
          </div>
          <User className="h-4 w-4 text-slate-500" />
        </div>
      </div>
    </header>
  );
}
