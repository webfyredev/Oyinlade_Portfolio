import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import FeaturedProjects from "@/components/FeaturedProjects";
import MoreWork from "@/components/MoreWork";
import Skills from "@/components/Skills";
import Approach from "@/components/Approach";
import ArchitectureVisual from "@/components/ArchitectureVisual";
import Journey from "@/components/Journey";
import BuildingSection from "@/components/BuildingSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CredibilityStrip />
        <About />
        <Capabilities />
        <FeaturedProjects />
        <MoreWork />
        <Skills />
        <Approach />
        <ArchitectureVisual />
        <Journey />
        <BuildingSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
