import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="contact-layout">
        <Reveal className="contact-panel" from="left">
          <p className="section-label">06 / Get in touch</p>
          <h2>
            Let&apos;s build something{" "}
            <span className="accent-text">remarkable.</span>
          </h2>
          <p className="section-subtitle">
            Open to internships, freelance collaborations, research, and
            interesting engineering problems.
          </p>

          <ul className="contact-details">
            <li>
              <Mail size={16} />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>{siteConfig.location}</span>
            </li>
          </ul>

          <div className="social-links">
            {siteConfig.socials.github && (
              <a href={siteConfig.socials.github} target="_blank" rel="noreferrer">
                <FaGithub size={17} /> GitHub
              </a>
            )}
            {siteConfig.socials.linkedin && (
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin size={17} /> LinkedIn
              </a>
            )}
          </div>
        </Reveal>

        <Reveal className="contact-card" from="right">
          <ContactForm email={siteConfig.email} />
        </Reveal>
      </div>
    </section>
  );
}
