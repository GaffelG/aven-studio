import { notFound } from "next/navigation";

// Catches unknown paths so they render this demo's own 404 page inside its layout.
export default function CatchAll() {
  notFound();
}
