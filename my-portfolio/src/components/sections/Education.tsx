import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/site";

export default function Education() {
  return (
    <section className="section-shell content-section" id="education">
      <SectionHeading
        label="02 / The path so far"
        title="Education"
        align="center"
      />

      <ol className="timeline">
        <span className="timeline-line" aria-hidden="true" />

        {education.map((entry, index) => {
          const side = index % 2 === 0 ? "left" : "right";
          return (
            <li
              key={entry.degree}
              className={`timeline-row side-${side}${entry.placeholder ? " is-placeholder" : ""}`}
            >
              <span className={`timeline-node${entry.current ? " is-current" : ""}`}>
                <GraduationCap size={16} />
              </span>

              <span className="timeline-date">{entry.period}</span>

              <Reveal
                as="article"
                className="timeline-card"
                from={side === "left" ? "left" : "right"}
              >
                <span className="timeline-arrow" aria-hidden="true" />
                {entry.current && <span className="badge">Current</span>}
                <h3>{entry.degree}</h3>
                <p className="timeline-institution">{entry.institution}</p>
                <p className="timeline-date-inline">{entry.period}</p>
                {entry.score && <p className="timeline-score">{entry.score}</p>}
                <ul className="dot-list">
                  {entry.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
