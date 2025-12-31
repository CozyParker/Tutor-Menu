"use client";

import { Search, Bell, Clock3 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { tutor } from "@/lib/mock";

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b bg-white/80 px-6 py-4 backdrop-blur">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock3 className="h-4 w-4" />
        <span>GMT-5</span>
      </div>
      <div className="flex flex-1 items-center gap-3">
        <div className="relative hidden max-w-xl flex-1 items-center lg:flex">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search classes, students, rules" className="pl-9" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1">
            <Avatar>{tutor.name.split(" ").map((p) => p[0]).join("")}</Avatar>
            <div className="hidden leading-tight lg:block">
              <p className="text-sm font-semibold">{tutor.name}</p>
              <p className="text-xs text-muted-foreground">{tutor.subjectFocus.join(" · ")}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
