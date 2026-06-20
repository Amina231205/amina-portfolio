"use client";

import * as React from "react";
import { TRACKS } from "@/lib/data";
import type { Track } from "@/types";

interface LensContextValue {
  lens: Track;
  setLens: (lens: Track) => void;
}

const LensContext = React.createContext<LensContextValue | undefined>(undefined);

const STORAGE_KEY = "amina-portfolio-lens";

// Single source of truth for valid track ids — derived from lib/data.ts
// rather than re-declaring the "ai" | "cyber" | "data" literal set here.
const TRACK_IDS = new Set<string>(TRACKS.map((t) => t.id));

function isTrack(value: unknown): value is Track {
  return typeof value === "string" && TRACK_IDS.has(value);
}

export function LensProvider({ children }: { children: React.ReactNode }) {
  const [lens, setLensState] = React.useState<Track>("ai");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isTrack(stored)) setLensState(stored);
    } catch {
      // localStorage can throw in private/incognito modes or when disabled —
      // falling back to the default lens is a fine degradation.
    }
    setMounted(true);
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-lens", lens);
    if (!mounted) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lens);
    } catch {
      // ignore write failures (quota exceeded, private mode, etc.)
    }
  }, [lens, mounted]);

  const setLens = React.useCallback((next: Track) => setLensState(next), []);

  const value = React.useMemo(() => ({ lens, setLens }), [lens, setLens]);

  return <LensContext.Provider value={value}>{children}</LensContext.Provider>;
}

export function useLens() {
  const ctx = React.useContext(LensContext);
  if (!ctx) throw new Error("useLens must be used within a LensProvider");
  return ctx;
}
