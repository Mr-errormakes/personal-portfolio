import BootScreen from "@/components/BootScreen";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Showcase from "@/components/sections/Showcase";
import Overview from "@/components/sections/Overview";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <>
      <BootScreen />
      <Nav />
      <main className="page">
        <Hero />
        <Showcase />
        <Overview />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>
          <span className="accent-text">{siteConfig.initials}.</span> ©{" "}
          {siteConfig.copyrightYear} {siteConfig.name}
        </span>
        <span>Designed with intent. Built with code.</span>
      </footer>
    </>
  );
}
