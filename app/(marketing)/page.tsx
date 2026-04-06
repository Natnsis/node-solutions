import {
  HeroSection,
  BrandLogos,
  HomeServicesPreview,
  WhyChooseUs,
  TestimonialsPreview,
  FaqPreview,
} from "@/features/home";
import { ContactCta, ContactForm } from "@/features/contact";
import { ScrollToSectionButton } from "@/shared/components/common/scroll-to-section-button";

export default function HomePage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <BrandLogos />
      <HomeServicesPreview />
      <WhyChooseUs />
      <TestimonialsPreview />
      <FaqPreview />
      <ContactCta />
      <ContactForm />

      <ScrollToSectionButton targetId="home-top" />
    </main>
  );
}