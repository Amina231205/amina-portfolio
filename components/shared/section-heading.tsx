import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-display-lg font-semibold text-ink">{title}</h2>
      {description && <p className="mt-4 text-base text-ink-muted leading-relaxed">{description}</p>}
    </div>
  );
}
