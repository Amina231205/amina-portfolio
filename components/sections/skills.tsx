import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { IconTile } from "@/components/shared/icon-tile";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/lib/data";
import { resolveIcon, TRACK_COLOR_CLASS } from "@/components/shared/track-icon";

export function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-hairline bg-surface/40">
      <div className="container-wide">
        <SectionHeading
          eyebrow="02 // skills"
          title="What I work with"
          description="Grouped by the three lenses, plus the foundational tools underneath all of them."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category, i) => {
            const Icon = resolveIcon(category.icon);
            const colorClassName =
              category.track !== "core" ? TRACK_COLOR_CLASS[category.track] : "text-ink-muted";
            return (
              <Reveal key={category.title} delay={(i % 3) * 0.06}>
                <div className="card-surface h-full p-6 transition-colors duration-250 hover:border-lens lens-transition">
                  <div className="mb-4 flex items-center gap-3">
                    <IconTile icon={Icon} colorClassName={colorClassName} size="md" />
                    <h3 className="font-display text-base font-semibold text-ink">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
