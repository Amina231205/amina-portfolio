"use client";

import * as React from "react";
import { m } from "framer-motion";
import { BrainCircuit, ShieldCheck, ChartSpline, type LucideIcon } from "lucide-react";
import { useLens } from "@/components/providers/lens-provider";
import { TRACKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Track } from "@/types";

const ICONS: Record<Track, LucideIcon> = {
  ai: BrainCircuit,
  cyber: ShieldCheck,
  data: ChartSpline,
};

export function LensSwitcher({ className }: { className?: string }) {
  const { lens, setLens } = useLens();

  return (
    <div
      role="radiogroup"
      aria-label="Switch portfolio lens"
      className={cn(
        "relative inline-flex items-center gap-0.5 rounded-full border border-hairline bg-surface p-1",
        className
      )}
    >
      {TRACKS.map((t) => {
        const Icon = ICONS[t.id];
        const active = lens === t.id;
        return (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={active}
            title={t.label}
            onClick={() => setLens(t.id)}
            className={cn(
              "relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors duration-250",
              active ? "text-lens-foreground" : "text-ink-muted hover:text-ink"
            )}
          >
            {active && (
              <m.span
                layoutId="lens-pill"
                className="absolute inset-0 -z-10 rounded-full bg-lens"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">{t.shortLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
