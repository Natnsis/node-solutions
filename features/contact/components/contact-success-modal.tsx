"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { AnimatedLogo } from "@/shared/components/common/animated-logo";

type ContactSuccessModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ContactSuccessModal({
  open,
  onClose,
}: ContactSuccessModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-[28px] border border-border bg-[var(--background-soft)] p-6 shadow-glow md:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close success modal"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-secondary hover:text-primary"
        >
          <X size={16} />
        </button>

        <div className="flex flex-col items-center text-center">
          <AnimatedLogo size={72} mode="loop" />

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Inquiry Sent
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            Thank You!
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground md:text-base">
            Your inquiry has been sent successfully. Our team will review your
            message and get back to you as soon as possible.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              Close
            </button>

            <Link
              href="/"
              className="flex-1 rounded-xl bg-primary px-5 py-3 text-center text-sm font-medium text-[var(--color-primary-foreground)] transition hover:brightness-110"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}