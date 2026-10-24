import { notFound } from "next/navigation";

/**
 * Any unknown path inside a locale renders the localized not-found page
 * instead of Next's global fallback, so the document keeps its lang attribute
 * and the site chrome.
 */
export default function CatchAllPage() {
  notFound();
}
