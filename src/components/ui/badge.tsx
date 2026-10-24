import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "olive";
  className?: string;
}) {
  const tones = {
    neutral: "bg-ink/5 text-ink-soft",
    accent: "bg-accent/12 text-accent",
    olive: "bg-forest/10 text-forest",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
