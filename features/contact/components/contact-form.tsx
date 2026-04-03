"use client";

import { useState } from "react";
import { BudgetSlider } from "./budget-slider";
import { ServiceInterestSelector } from "./service-interest-selector";

const interestedIn = [
  "Digital Marketing",
  "Creative Printing",
  "Interior Design",
  "IT Solutions",
];

export function ContactForm() {
  const [budgetValue, setBudgetValue] = useState(9000);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleToggleService = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section className="pb-20">
      <div className="container-main">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-border bg-[var(--background-soft)] p-6 shadow-card md:p-8 lg:p-10">
          <div className="mb-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Contact Form
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Let&apos;s Talk About Your Project
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              Tell us what you need and our team will get back to you with the
              right direction, recommendations, and next steps.
            </p>
          </div>

          <form className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
              />
            </div>

            <ServiceInterestSelector
              options={interestedIn}
              selected={selectedServices}
              onToggle={handleToggleService}
            />

            <BudgetSlider value={budgetValue} onChange={setBudgetValue} />

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Project Details
              </label>
              <p className="mb-4 text-sm leading-6 text-muted-foreground">
                Share any goals, ideas, or requirements you already have in mind.
              </p>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="rounded-xl bg-primary px-8 py-3 text-sm font-medium text-[var(--color-primary-foreground)] transition hover:brightness-110"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}