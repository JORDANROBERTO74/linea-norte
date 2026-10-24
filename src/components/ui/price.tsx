import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

export function Price({
  value,
  className,
  size = "md",
}: {
  value: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-2xl",
  };

  return (
    <span className={cn("font-semibold tabular-nums text-ink", sizes[size], className)}>
      {formatPrice(value)}
    </span>
  );
}
