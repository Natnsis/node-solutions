"use client";

import { useMemo } from "react";

const brands = ["zapier", "spotify", "zoom", "slack", "amazon", "adobe"];

export function BrandLogos() {
  const repeatedBrands = useMemo(() => [...brands, ...brands], []);

  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--background-soft)]">
      <div className="container-main py-10 md:py-12">
        <div className="relative overflow-hidden">
          <div className="brand-marquee-wrapper">
            <div className="brand-marquee flex w-max items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20">
              {repeatedBrands.map((brand, index) => (
                <div
                  key={`${brand}-${index}`}
                  className="shrink-0 text-center text-xs font-medium uppercase tracking-[0.24em] text-foreground/70 transition duration-300 hover:text-foreground sm:text-sm"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-14 md:w-20 lg:w-24"
            style={{
              background:
                "linear-gradient(to right, var(--background-soft), color-mix(in srgb, var(--background-soft) 88%, transparent), transparent)",
            }}
          />

          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-14 md:w-20 lg:w-24"
            style={{
              background:
                "linear-gradient(to left, var(--background-soft), color-mix(in srgb, var(--background-soft) 88%, transparent), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}