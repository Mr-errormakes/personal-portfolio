import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/site";

const MAX_LEVEL = 5;

export default function Skills() {
  return (
    <section className="section-shell content-section" id="skills">
      <SectionHeading label="03 / Technologies & tools" title="Skills" />

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <div className="skill-group-label">
              <span className="glow-dot" />
              {group.label}
            </div>

            <div className="skill-grid">
              {group.skills.map((skill, index) => (
                <Reveal
                  key={skill.name}
                  className="skill-card"
                  from="scale"
                  delay={index * 0.04}
                >
                  <p>{skill.name}</p>
                  <span
                    className="skill-level"
                    role="img"
                    aria-label={`Proficiency ${skill.level} of ${MAX_LEVEL}`}
                  >
                    {Array.from({ length: MAX_LEVEL }, (_, i) => (
                      <span key={i} className={i < skill.level ? "on" : undefined} />
                    ))}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
