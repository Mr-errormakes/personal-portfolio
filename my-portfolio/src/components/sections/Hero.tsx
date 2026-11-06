import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site";

// Checked at build time so the hero falls back to a monogram until a photo
// is added at public/<siteConfig.photo>.
const hasPhoto = existsSync(join(process.cwd(), "public", siteConfig.photo));

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <Reveal className="hero-content">
        <div className="status-pill">
          <span className="status-dot" />
          {siteConfig.availability}
        </div>

        <p className="eyebrow">HELLO WORLD — I&apos;M {siteConfig.name}</p>

        <h1>
          I build things
          <br />
          that <span className="accent-text">matter.</span>
        </h1>

        <p className="hero-role">{siteConfig.role}</p>
        <p className="hero-description">{siteConfig.description}</p>

        <div className="hero-actions">
          <a href="#projects" className="button-primary">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a href="#about" className="button-secondary">
            Get to know me <ArrowDownRight size={17} />
          </a>
        </div>

        <div className="hero-meta">
          <span>{siteConfig.location}</span>
          <span className="meta-separator" />
          <span>{siteConfig.graduation}</span>
        </div>
      </Reveal>

      <Reveal className="hero-portrait" from="scale" delay={0.2}>
        <div className="portrait-frame">
          {hasPhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`/${siteConfig.photo}`}
              alt={`Portrait of ${siteConfig.name}`}
              className="portrait-image"
            />
          ) : (
            <div className="portrait-fallback" aria-label="Photo coming soon">
              <span>{siteConfig.initials}</span>
            </div>
          )}
          <span className="portrait-corner tl" aria-hidden="true" />
          <span className="portrait-corner br" aria-hidden="true" />
        </div>

        <div className="portrait-tag tag-top">
          <span className="status-dot" />
          {siteConfig.location}
        </div>
        <div className="portrait-tag tag-bottom">
          <span className="accent-text">{"</>"}</span> Building since day one
        </div>
      </Reveal>

      <a href="#showcase" className="scroll-cue">
        <span className="scroll-line" />
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}
