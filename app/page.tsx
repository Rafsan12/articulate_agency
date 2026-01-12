import About from "@/components/Home/About";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import PortfolioPreview from "@/components/Home/PortfolioPreview";
import Process from "@/components/Home/Process";
import ServicesPreview from "@/components/Home/ServicesPreview";
import Testimonials from "@/components/Home/Testimonials";
import WorkSection from "@/components/Home/WorkSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WorkSection />
      <ServicesPreview />
      <Process />
      <PortfolioPreview />

      <Testimonials />
      <Footer />
    </>
  );
}
