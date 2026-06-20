import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT, SITE } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline">
      <div className="container-wide py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold text-ink">
              AE<span className="text-lens">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-ink-muted">
              AI, Cybersecurity & Data Analysis student — building across three lenses.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-3">Sections</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-ink-muted">
              <li><a href="#about" className="hover:text-ink">About</a></li>
              <li><a href="#skills" className="hover:text-ink">Skills</a></li>
              <li><a href="#projects" className="hover:text-ink">Work</a></li>
              <li><a href="#education" className="hover:text-ink">Education</a></li>
              <li><a href="#research" className="hover:text-ink">Research</a></li>
              <li><a href="#contact" className="hover:text-ink">Contact</a></li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-3">Elsewhere</p>
            <ul className="flex gap-3">
              <li>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-ink-muted transition-colors duration-250 hover:border-lens hover:text-lens lens-transition"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-ink-muted transition-colors duration-250 hover:border-lens hover:text-lens lens-transition"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  aria-label="Email"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-ink-muted transition-colors duration-250 hover:border-lens hover:text-lens lens-transition"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 font-mono text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. Built with Next.js, Tailwind, and three lenses.</p>
          <p>status: open_to_work :: SOC=cyber AI=ml DATA=analysis</p>
        </div>
      </div>
    </footer>
  );
}
