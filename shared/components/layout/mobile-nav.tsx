"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/shared/constants/nav-links";
import { Button } from "@/shared/components/ui/button";
import { ThemeToggle } from "@/shared/components/common/theme-toggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-card transition hover:bg-secondary"
        aria-label="Toggle menu"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <div
        className={`absolute left-0 right-0 top-full z-50 border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="container-main py-5">
          <div className="rounded-2xl border border-border bg-[var(--background-soft)] p-4 shadow-card">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
              <ThemeToggle />

              <Button href="/contact" className="px-4 py-2" >
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}