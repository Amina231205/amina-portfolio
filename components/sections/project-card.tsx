import { Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IconTile } from "@/components/shared/icon-tile";
import { TRACK_ICON, TRACK_COLOR_CLASS } from "@/components/shared/track-icon";
import { TRACKS } from "@/lib/data";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col transition-colors duration-250 hover:border-lens lens-transition">
      <CardHeader className="flex-row items-start justify-between gap-3 pb-0">
        <div className="flex gap-1.5">
          {project.tracks.map((t) => (
            <IconTile
              key={t}
              icon={TRACK_ICON[t]}
              colorClassName={TRACK_COLOR_CLASS[t]}
              size="sm"
              title={TRACKS.find((tr) => tr.id === t)?.label}
            />
          ))}
        </div>
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="text-ink-faint transition-colors duration-250 hover:text-lens lens-transition"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </CardHeader>

      <CardContent className="flex flex-1 flex-col pt-4">
        <h3 className="font-display text-lg font-semibold leading-snug text-ink">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.blurb}</p>

        {project.metrics && (
          <dl className="mt-4 grid grid-cols-2 gap-3 border-y border-hairline py-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dd className="font-mono text-sm font-semibold text-ink">{metric.value}</dd>
                <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((s) => (
            <Badge key={s} variant="outline">
              {s}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-5">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-lens lens-transition"
            >
              View repository
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          ) : (
            <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
              repository not public yet
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
