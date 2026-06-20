import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconTileProps {
  icon: LucideIcon;
  /** Tailwind color utility class for the icon glyph, e.g. "text-track-ai" or "text-lens" */
  colorClassName?: string;
  size?: "sm" | "md" | "lg";
  title?: string;
  className?: string;
}

const DIMENSIONS = {
  sm: { box: "h-7 w-7", icon: 14 },
  md: { box: "h-9 w-9", icon: 18 },
  lg: { box: "h-12 w-12", icon: 20 },
} as const;

export function IconTile({
  icon: Icon,
  colorClassName = "text-ink-muted",
  size = "md",
  title,
  className,
}: IconTileProps) {
  const { box, icon } = DIMENSIONS[size];
  return (
    <span
      title={title}
      className={cn(
        "flex shrink-0 items-center justify-center rounded-md border border-hairline bg-canvas lens-transition",
        box,
        colorClassName,
        className
      )}
    >
      <Icon size={icon} aria-hidden="true" />
    </span>
  );
}
