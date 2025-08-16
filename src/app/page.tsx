import GitGuideSection from "@/components/git-guide-section";
import BenefitsCarousel from "../components/benefits-carousel-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
import HeroLanding from "../components/hero-landing-section";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <SidebarProvider className="flex-col">
        <Header />
        <main>
          <HeroLanding />
          <BenefitsCarousel />
          <GitGuideSection />
          <ContactSection />
          <Footer />
        </main>
      </SidebarProvider>
    </>
  );
}
