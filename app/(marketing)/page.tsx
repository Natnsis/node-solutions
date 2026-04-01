import {
  HeroSection,
  BrandLogos,
  HomeServicesPreview,
  WhyChooseUs,
  TestimonialsPreview,
  FaqPreview,
  ContactCta,
  ContactFormPreview,
} from "@/features/home";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BrandLogos />
      <HomeServicesPreview />
      <WhyChooseUs />
      <TestimonialsPreview />
      <FaqPreview />
      <ContactCta />
      <ContactFormPreview />
    </main>
  );
}