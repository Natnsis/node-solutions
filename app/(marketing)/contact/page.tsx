import {
  ContactPageHero,
  ContactInfoCards,
  ContactCta,
  ContactForm,
} from "@/features/contact";

export default function ContactPage() {
  return (
    <main className="bg-background">
      <ContactPageHero />
      <ContactInfoCards />
      <ContactCta />
      <ContactForm />
    </main>
  );
}