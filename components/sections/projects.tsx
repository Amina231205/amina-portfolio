"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/sections/project-card";
import { useLens } from "@/components/providers/lens-provider";
import { PROJECTS, TRACKS, EXPERIENCE } from "@/lib/data";
import type { Track } from "@/types";

type Filter = "all" | Track;

export function Projects() {
  const { setLens } = useLens();
  const [filter, setFilter] = React.useState<Filter>("all");

  const handleChange = (value: string) => {
    const next = value as Filter;
    setFilter(next);
    if (next !== "all") setLens(next);
  };

  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.tracks.includes(filter));

  const featuredFirst = [...visible].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section id="projects" className="section-padding border-t border-hairline">
      <div className="container-wide">
        <SectionHeading
          eyebrow="03 // featured work"
          title="Projects, filtered by lens"
          description="Every project tagged by which lens it draws on most. Some sit across two."
        />

        {EXPERIENCE.map((exp) => (
          <div
            key={exp.org}
            className="mb-10 flex flex-wrap items-center gap-3 rounded-lg border border-hairline bg-surface px-5 py-3.5"
          >
            <span className="h-2 w-2 rounded-full bg-lens lens-transition" />
            <p className="text-sm text-ink-muted">
              <span className="font-medium text-ink">{exp.role}</span> at{" "}
              <span className="font-medium text-ink">{exp.org}</span> — {exp.status}
            </p>
          </div>
        ))}

        <Tabs value={filter} onValueChange={handleChange}>
          <TabsList>
            <TabsTrigger value="all">All ({PROJECTS.length})</TabsTrigger>
            {TRACKS.map((t) => (
              <TabsTrigger key={t.id} value={t.id}>
                {t.label} ({PROJECTS.filter((p) => p.tracks.includes(t.id)).length})
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={filter}>
            <m.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {featuredFirst.map((project) => (
                  <m.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProjectCard project={project} />
                  </m.div>
                ))}
              </AnimatePresence>
            </m.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
