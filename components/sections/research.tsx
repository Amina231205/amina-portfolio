import { FileText } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { IconTile } from "@/components/shared/icon-tile";
import { Badge } from "@/components/ui/badge";
import { RESEARCH } from "@/lib/data";

const STATUS_LABEL: Record<typeof RESEARCH.status, string> = {
  submitted: "Under review",
  rejected: "Not accepted — revising for resubmission",
  accepted: "Accepted",
  published: "Published",
};

export function Research() {
  return (
    <section id="research" className="section-padding border-t border-hairline bg-surface/40">
      <div className="container-wide">
        <SectionHeading eyebrow="06 // research" title="Research experience" />

        <Reveal>
          <div className="card-surface p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <IconTile icon={FileText} colorClassName="text-lens lens-transition" size="lg" />
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                    {RESEARCH.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    {RESEARCH.role} · {RESEARCH.venue}
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="shrink-0">
                {STATUS_LABEL[RESEARCH.status]}
              </Badge>
            </div>

            <div className="mt-5 space-y-3 border-t border-hairline pt-5 text-sm leading-relaxed text-ink-muted">
              {RESEARCH.summary.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
