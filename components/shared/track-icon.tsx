import {
  BrainCircuit,
  ScanEye,
  ShieldCheck,
  ChartSpline,
  LayoutTemplate,
  Terminal,
  Cpu,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Track } from "@/types";

/** Skill-category icon registry — one glyph per category, used consistently across Skills section */
export const ICON_REGISTRY: Record<string, LucideIcon> = {
  BrainCircuit,
  ScanEye,
  ShieldCheck,
  ChartSpline,
  LayoutTemplate,
  Terminal,
  Cpu,
  Wrench,
};

export function resolveIcon(name: string): LucideIcon {
  return ICON_REGISTRY[name] ?? Wrench;
}

/** Track glyph + Tailwind color token — kept consistent everywhere a track is referenced */
export const TRACK_ICON: Record<Track, LucideIcon> = {
  ai: BrainCircuit,
  cyber: ShieldCheck,
  data: ChartSpline,
};

export const TRACK_COLOR_CLASS: Record<Track, string> = {
  ai: "text-track-ai",
  cyber: "text-track-cyber",
  data: "text-track-data",
};

export const TRACK_BORDER_CLASS: Record<Track, string> = {
  ai: "border-track-ai/35",
  cyber: "border-track-cyber/35",
  data: "border-track-data/35",
};
