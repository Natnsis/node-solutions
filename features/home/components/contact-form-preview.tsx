"use client";

import { useState } from "react";

const interestedIn = [
  "Digital Marketing",
  "Creative Printing",
  "Interior Design",
  "IT Solutions",
];

export function ContactFormPreview() {
  const [budgetValue, setBudgetValue] = useState(9000);

  return (
    <section className="pb-20">
      <div className="container-main">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-[var(--background-soft)] p-6 shadow-card md:p-8">
          <form className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-muted-foreground">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-muted-foreground">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm text-muted-foreground">
                Why are you contacting us?
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                {interestedIn.map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm text-white"
                  >
                    <input type="checkbox" className="accent-[var(--primary)]" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm text-muted-foreground">
                Your Budget
              </label>

              <div className="rounded-xl border border-border bg-background p-4">
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="1000"
                  value={budgetValue}
                  onChange={(e) => setBudgetValue(Number(e.target.value))}
                  className="w-full accent-[var(--primary)]"
                />

                <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                  <span>$1K</span>
                  <span className="font-medium text-primary">${budgetValue.toLocaleString()}</span>
                  <span>$20K</span>
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-muted-foreground">
                Your Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="rounded-md bg-primary px-8 py-3 text-sm font-medium text-[var(--color-primary-foreground)] transition hover:brightness-110"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}