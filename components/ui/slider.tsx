"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}

export function Slider({ value, min = 0, max = 100, step = 1, onChange }: SliderProps) {
  const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  return (
    <div className="flex w-full items-center gap-3">
      <div className="relative h-2 flex-1 rounded-full bg-muted">
        <div className="absolute inset-y-0 left-0 rounded-full bg-primary" style={{ width: `${pct}%` }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange?.(Number(e.target.value))}
          className={cn(
            "absolute inset-0 h-2 w-full cursor-pointer appearance-none bg-transparent focus-visible:outline-none"
          )}
        />
      </div>
      <span className="text-sm font-medium text-muted-foreground">{value}</span>
    </div>
  );
}
