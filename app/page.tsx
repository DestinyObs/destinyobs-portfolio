import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
    </>
  );
}
