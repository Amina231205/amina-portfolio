"use client";

import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import * as React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API can reject (no permission, insecure context, unsupported
      // browser) — fail quietly rather than throwing in the UI thread; the
      // email is still visible and selectable as plain text either way.
    }
  };

  return (
    <section id="contact" className="section-padding border-t border-hairline">
      <div className="container-wide">
        <SectionHeading
          eyebrow="08 // contact"
          title="Let's talk"
          description="Open to Data Analyst, AI/ML, and Cybersecurity internships. Reach out directly — I read everything myself."
          align="center"
        />

        <Reveal>
          <div className="mx-auto flex max-w-md flex-col items-center gap-5">
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email address copied to clipboard" : `Copy email address ${CONTACT.email}`}
              className="group flex items-center gap-2.5 rounded-full border border-hairline bg-surface px-5 py-3 font-mono text-sm text-ink transition-colors duration-250 hover:border-lens lens-transition"
            >
              <Mail className="h-4 w-4 text-lens lens-transition" aria-hidden="true" />
              {CONTACT.email}
              {copied ? (
                <Check className="h-3.5 w-3.5 text-lens lens-transition" aria-hidden="true" />
              ) : (
                <Copy className="h-3.5 w-3.5 text-ink-faint transition-colors group-hover:text-ink" aria-hidden="true" />
              )}
            </button>

            <p className="font-mono text-xs text-ink-faint">{CONTACT.phone} · {CONTACT.location}</p>

            <div className="mt-2 flex gap-3">
              <Button asChild>
                <a href={`mailto:${CONTACT.email}`}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email me
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
