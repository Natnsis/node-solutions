"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { SectionHeading } from "@/shared/components/ui/section-heading";
import { faqs } from "@/features/faq/data/faq.data";

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-space pt-0">
      <SectionHeading
        title="Frequently Asked Questions"
        description="Answers to common questions about our services, process, timelines, and support."
      />

      <div className="container-main mt-10 grid gap-4 lg:grid-cols-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="glass-card rounded-xl p-5 shadow-card"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <div>
                  <p className="text-sm font-medium text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-base font-medium text-white">
                    {faq.question}
                  </h3>
                </div>

                <span className="mt-1 text-primary">
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              {isOpen && (
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}