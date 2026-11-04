"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Sticky header that blends into the page at the top and gains a hairline and soft blur once scrolled.
 * The blur sits on a pseudo-element: backdrop-filter on the header itself would trap the fixed mobile menu.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      data-scrolled={scrolled || undefined}
      className="group/header sticky top-0 z-40 border-b border-transparent transition-colors duration-500 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-paper before:transition-[background-color,backdrop-filter] before:duration-500 data-scrolled:border-ink/8 data-scrolled:before:bg-paper/80 data-scrolled:before:backdrop-blur-md"
    >
      {children}
    </header>
  );
}
