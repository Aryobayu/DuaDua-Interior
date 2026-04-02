import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { MaterialSwatches } from "@/components/sections/material-swatches";
import { PortfolioSection } from "@/components/sections/portfolio";
import { QuoteEstimator } from "@/components/sections/quote-estimator";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFab } from "@/components/ui/whatsapp-fab";
import { ScrollRevealScript } from "@/components/ui/scroll-reveal-script";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MaterialSwatches />
        <PortfolioSection />
        <QuoteEstimator />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
      <ScrollRevealScript />
    </>
  );
}
