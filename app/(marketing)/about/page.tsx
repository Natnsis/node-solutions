import {
  AboutPageHero,
  AboutIntroSection,
  StorySection,
  AboutPageCta,
} from "@/features/about";
import { ScrollToSectionButton } from "@/shared/components/common/scroll-to-section-button";

export default function AboutPage() {
  return (
    <main className="">
      <AboutPageHero />
      <AboutIntroSection />
      <StorySection />
      <AboutPageCta />
      <ScrollToSectionButton targetId="about-top" />
    </main>
  );
}