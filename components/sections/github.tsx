import { Github, ArrowUpRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { GITHUB_REPOS, CONTACT } from "@/lib/data";

const LANG_COLOR: Record<string, string> = {
  Python: "bg-track-data",
  JavaScript: "bg-track-cyber",
  HTML: "bg-lens",
  CSS: "bg-track-ai",
};

export function GitHubSection() {
  return (
    <section id="github" className="section-padding border-t border-hairline">
      <div className="container-wide">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="07 // github"
            title="Pinned repositories"
            description="Live code, not just claims. Language breakdown pulled from each repo."
            className="mb-0"
          />
          <Button asChild variant="outline">
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" aria-hidden="true" />
              View full profile
            </a>
          </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {GITHUB_REPOS.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 0.08}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-surface flex h-full flex-col p-6 transition-colors duration-250 hover:border-lens lens-transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-ink-faint" aria-hidden="true" />
                    <h3 className="font-mono text-sm font-semibold text-ink">{repo.name}</h3>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-ink-faint transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lens lens-transition"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {repo.description}
                </p>

                <div className="mt-5">
                  <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-canvas">
                    {repo.languages.map((lang) => (
                      <span
                        key={lang.name}
                        style={{ width: `${lang.percent}%` }}
                        className={LANG_COLOR[lang.name] ?? "bg-ink-faint"}
                      />
                    ))}
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
                    {repo.languages.map((lang) => (
                      <span key={lang.name} className="font-mono text-xs text-ink-faint">
                        {lang.name} {lang.percent}%
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 flex items-center gap-1.5 font-mono text-xs text-ink-faint">
          <Star className="h-3 w-3" aria-hidden="true" />
          more projects from coursework and internships live on the full profile
        </p>
      </div>
    </section>
  );
}
