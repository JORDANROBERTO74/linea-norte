"use client";

import { MinusIcon, PlusIcon } from "@/components/icons";

export function QuantityStepper({
  value,
  onChange,
  label,
  min = 1,
  max = 20,
}: {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
  max?: number;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-line bg-white/60">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label={`${label}: −1`}
        className="grid size-9 place-items-center rounded-full text-ink transition hover:bg-ink/5 disabled:opacity-40"
      >
        <MinusIcon className="size-4" />
      </button>
      <span aria-live="polite" className="min-w-8 text-center text-sm font-semibold tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label={`${label}: +1`}
        className="grid size-9 place-items-center rounded-full text-ink transition hover:bg-ink/5 disabled:opacity-40"
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
}
