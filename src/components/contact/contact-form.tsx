"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/get-dictionary";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="rounded-card border border-line bg-paper p-6 text-center"
        aria-live="polite"
      >
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-accent/12 text-accent">
          <CheckIcon className="size-6" />
        </span>
        <p className="mt-4 font-display text-xl">{dict.contact.form.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          {dict.contact.form.name}
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-2 h-12 w-full rounded-full border border-line bg-white/70 px-5 text-sm focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          {dict.contact.form.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 h-12 w-full rounded-full border border-line bg-white/70 px-5 text-sm focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          {dict.contact.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-3xl border border-line bg-white/70 px-5 py-4 text-sm focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-accent"
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        {dict.contact.form.submit}
      </Button>
    </form>
  );
}
