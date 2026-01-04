import About from "@/components/Home/About";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import Testimonials from "@/components/Home/Testimonials";
import WorkSection from "@/components/Home/WorkSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WorkSection />
      <Testimonials />
      <Footer />
    </>
  );
}
