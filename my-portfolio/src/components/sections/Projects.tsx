import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section className="section-shell content-section" id="projects">
      <SectionHeading
        label="04 / Selected work"
        title="Projects"
        subtitle="A selection of engineering projects, experiments, and ideas."
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal
            key={project.name}
            as="article"
            className={`project-card${project.featured ? " is-featured" : ""}`}
            delay={index * 0.08}
          >
            <div className="project-visual" aria-hidden="true">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-initial">{project.name.charAt(0)}</span>
            </div>

            <div className="project-body">
              <div className="project-topline">
                <p className="project-category">{project.category}</p>
                {project.featured && <span className="badge">Featured</span>}
              </div>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub size={15} /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <ArrowUpRight size={15} /> Live
                  </a>
                )}
                {!project.github && !project.live && (
                  <a href="#contact">
                    <ArrowUpRight size={15} /> Ask me about it
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
