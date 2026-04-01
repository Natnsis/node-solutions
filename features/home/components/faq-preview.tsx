"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/shared/components/ui/section-heading";
import { faqs } from "@/features/faq/data/faq.data";

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-space pt-0">
      <SectionHeading
        title="Frequently Asked Questions"
        description="Everything you need to know before starting your project with Node Solution."
      />

      <div className="container-main mt-10 grid gap-4 lg:grid-cols-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="glass-card rounded-xl p-5">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <div>
                  <p className="text-sm text-primary">0{index + 1}</p>
                  <h3 className="mt-2 text-base font-medium">{faq.question}</h3>
                </div>
                <span className="mt-1 text-primary">
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              {isOpen && (
                <p className="mt-4 text-sm leading-7 text-text-muted">
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