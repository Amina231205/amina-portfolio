import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CERTIFICATIONS } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding border-t border-hairline">
      <div className="container-wide">
        <SectionHeading eyebrow="05 // certifications" title="Certifications" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 3) * 0.06}>
              <div className="card-surface flex h-full gap-3.5 p-5 transition-colors duration-250 hover:border-lens lens-transition">
                <BadgeCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-lens lens-transition"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium leading-snug text-ink">{cert.name}</p>
                  <p className="mt-1 text-xs text-ink-muted">{cert.issuer}</p>
                  {cert.note && (
                    <p className="mt-1.5 font-mono text-xs text-ink-faint">{cert.note}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
