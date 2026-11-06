import { Brain, Cloud, Code2, Puzzle } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { overview, type FocusArea } from "@/data/site";

const icons: Record<FocusArea["icon"], typeof Code2> = {
  code: Code2,
  cloud: Cloud,
  brain: Brain,
  puzzle: Puzzle,
};

export default function Overview() {
  return (
    <section className="section-shell content-section" id="about">
      <SectionHeading label="01 / Introduction" title="Overview" />

      <Reveal>
        <p className="overview-copy">{overview.summary}</p>
      </Reveal>

      <hr className="divider" />

      <div className="focus-grid">
        {overview.focusAreas.map((area, index) => {
          const Icon = icons[area.icon];
          return (
            <Reveal key={area.title} className="focus-card" delay={index * 0.08}>
              <span className="focus-icon">
                <Icon size={28} strokeWidth={1.6} />
              </span>
              <h3>{area.title}</h3>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
