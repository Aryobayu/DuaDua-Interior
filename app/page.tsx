import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { getAllProjects } from "@/features/projects/repository";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection projects={projects} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
