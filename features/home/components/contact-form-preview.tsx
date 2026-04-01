"use client";

import { useState } from "react";

const interestedIn = [
  "Digital Marketing",
  "Creative Printing",
  "Interior Design",
  "IT Solutions",
];

export function ContactFormPreview() {
  const [budget, setBudget] = useState("5000-10000");

  return (
    <section className="pb-20">
      <div className="container-main">
        <div className="mx-auto max-w-4xl rounded-3xl border border-card-border bg-background-soft p-6 shadow-soft md:p-8">
          <form className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-text-muted">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-white outline-none placeholder:text-text-muted"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-text-muted">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-white outline-none placeholder:text-text-muted"
                />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm text-text-muted">
                Why are you contacting us?
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                {interestedIn.map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-card-border bg-background px-4 py-3 text-sm"
                  >
                    <input type="checkbox" className="accent-[#9fc3df]" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm text-text-muted">
                Your Budget
              </label>
              <div className="rounded-xl border border-card-border bg-background p-4">
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="1000"
                  value={budget === "5000-10000" ? 8000 : 15000}
                  onChange={(e) =>
                    setBudget(Number(e.target.value) < 10000 ? "5000-10000" : "10000+")
                  }
                  className="w-full accent-[#9fc3df]"
                />
                <div className="mt-3 flex justify-between text-sm text-text-muted">
                  <span>$5K</span>
                  <span className="text-primary">{budget}</span>
                  <span>$20K+</span>
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-text-muted">
                Your Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-white outline-none placeholder:text-text-muted"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="rounded-md bg-primary px-8 py-3 text-sm font-medium text-black transition hover:bg-white"
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