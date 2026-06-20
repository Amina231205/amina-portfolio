import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ABOUT } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <SectionHeading eyebrow="01 // about" title="A bit about my path" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-4">
              {ABOUT.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-surface lens-transition p-5 transition-colors hover:border-lens"
                >
                  <dd className="font-display text-2xl font-semibold text-ink">{stat.value}</dd>
                  <dt className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-muted">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
