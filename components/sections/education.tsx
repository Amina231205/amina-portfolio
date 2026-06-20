import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { IconTile } from "@/components/shared/icon-tile";
import { Badge } from "@/components/ui/badge";
import { EDUCATION } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section-padding border-t border-hairline bg-surface/40">
      <div className="container-wide">
        <SectionHeading eyebrow="04 // education" title="Academic background" />

        <Reveal>
          <div className="card-surface flex flex-col gap-6 p-7 sm:flex-row sm:items-start sm:gap-8">
            <IconTile icon={GraduationCap} colorClassName="text-lens lens-transition" size="lg" />

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {EDUCATION.degree}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                  expected {EDUCATION.expected}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{EDUCATION.institution}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="lens">{EDUCATION.status}</Badge>
                {EDUCATION.specialization && (
                  <Badge variant="default">Specialization: {EDUCATION.specialization}</Badge>
                )}
              </div>

              <p className="mt-5 font-mono text-xs uppercase tracking-wide text-ink-faint">
                Relevant coursework
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {EDUCATION.coursework.map((c) => (
                  <Badge key={c} variant="outline">
                    {c}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
