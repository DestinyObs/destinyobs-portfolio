import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  );
}
