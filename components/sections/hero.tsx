"use client";

import * as React from "react";
import Image from "next/image";
import { m, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLens } from "@/components/providers/lens-provider";
import { TRACKS, CV_BY_LENS } from "@/lib/data";
import { TRACK_ICON } from "@/components/shared/track-icon";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const { lens, setLens } = useLens();
  const shouldReduceMotion = useReducedMotion();
  const activeTrack = TRACKS.find((t) => t.id === lens) ?? TRACKS[0]!;

  // Gently cycle the lens automatically on first load so all three are demonstrated,
  // stopping the moment a person interacts (handled inside LensSwitcher via setLens).
  // This is a JS-driven behavior change (not a framer-motion animation), so it needs
  // its own reduced-motion gate — MotionConfig's reducedMotion="user" only governs
  // framer-motion's own animations, not arbitrary timers like this one.
  const [autoCycled, setAutoCycled] = React.useState(false);
  React.useEffect(() => {
    if (shouldReduceMotion || autoCycled) return;
    const order = [TRACKS[1]!, TRACKS[2]!, TRACKS[0]!];
    let i = 0;
    const id = setInterval(() => {
      if (i >= order.length) {
        clearInterval(id);
        setAutoCycled(true);
        return;
      }
      setLens(order[i]!.id);
      i += 1;
    }, 1600);
    return () => clearInterval(id);
    // run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ActiveIcon = TRACK_ICON[activeTrack.id];

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* ambient grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-lens opacity-[0.12] blur-[120px] lens-transition"
      />

      <m.div
        className="container-wide relative grid gap-12 pb-24 sm:pb-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div>
          <m.p variants={item} className="eyebrow mb-6 flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-lens lens-transition" />
            </span>
            system.status :: open_to_work
          </m.p>

          <m.h1 variants={item} className="font-display text-display-xl font-semibold text-ink">
            Amina Emad
          </m.h1>

          <m.div variants={item} className="mt-4 flex h-9 items-center gap-2.5 sm:h-10">
            <AnimatePresence mode="wait">
              <m.div
                key={activeTrack.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2.5"
              >
                <ActiveIcon className="h-5 w-5 text-lens lens-transition sm:h-6 sm:w-6" aria-hidden="true" />
                <span className="font-display text-display-md font-medium text-lens lens-transition">
                  {activeTrack.label} student
                </span>
              </m.div>
            </AnimatePresence>
          </m.div>

          <m.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            Building at the intersection of machine learning, network security, and data
            analysis — currently interning in data analytics at CodeAlpha and finishing a
            Cybersecurity-specialized AI degree at Delta University for Science and Technology.
          </m.p>

          <m.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="#projects">View work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={CV_BY_LENS[lens].href}
                download
                aria-label={`Download CV — ${CV_BY_LENS[lens].label}`}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </Button>
          </m.div>

          <m.div variants={item} className="mt-12 flex items-center gap-2 text-ink-faint">
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-wide">scroll to explore</span>
          </m.div>
        </div>

        <m.div variants={item} className="relative mx-auto w-full max-w-sm justify-self-center">
          <div aria-hidden className="absolute -inset-4 rounded-2xl bg-lens opacity-20 blur-2xl lens-transition" />
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface shadow-card">
            <Image
              src="/images/avatar.jpg"
              alt="Portrait of Amina Emad holding her graduation project binder"
              width={480}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 shadow-card">
            <span className="h-2 w-2 rounded-full bg-lens lens-transition" />
            <span className="font-mono text-xs text-ink-muted">Delta University &apos;27</span>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
