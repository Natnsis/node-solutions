import {
  ContactPageHero,
  ContactInfoCards,
  ContactCta,
  ContactForm,
} from "@/features/contact";
import { ScrollToSectionButton } from "@/shared/components/common/scroll-to-section-button";

export default function ContactPage() {
  return (
    <main className="">
      <ContactPageHero />
      <ContactInfoCards />
      <ContactCta />
      <ContactForm />
       <ScrollToSectionButton targetId="contact-top" />
    </main>
  );
}