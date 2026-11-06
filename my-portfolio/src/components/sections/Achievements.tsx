import { Award, BadgeCheck, GitBranch, Medal, Trophy, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  achievementStats,
  achievements,
  projects,
  type Achievement,
} from "@/data/site";

const icons: Record<Achievement["category"], LucideIcon> = {
  Hackathon: Trophy,
  Certification: BadgeCheck,
  Competition: Medal,
  "Open Source": GitBranch,
  Recognition: Award,
};

export default function Achievements() {
  const stats = [
    { value: String(projects.length).padStart(2, "0"), label: "Projects built" },
    { value: achievementStats.hackathons, label: "Hackathons" },
    { value: achievementStats.certifications, label: "Certifications" },
    { value: achievementStats.awards, label: "Awards & ranks" },
  ];

  return (
    <section className="section-shell content-section" id="achievements">
      <SectionHeading
        label="05 / The journey so far"
        title="Achievements"
        subtitle="Hackathons, certifications, competitions and milestones — always building, always learning."
      />

      <div className="stat-row">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} className="stat-card" delay={index * 0.06}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </Reveal>
        ))}
      </div>

      <div className="achievement-grid">
        {achievements.map((item, index) => {
          const Icon = icons[item.category];
          const card = (
            <>
              <div className="achievement-top">
                <span className="achievement-icon">
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <span className="tag">{item.category}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="achievement-meta">
                {item.issuer} · {item.date}
              </p>
              <p className="achievement-description">{item.description}</p>
            </>
          );

          return (
            <Reveal
              key={item.title}
              as="article"
              className={`achievement-card${item.placeholder ? " is-placeholder" : ""}`}
              delay={index * 0.06}
            >
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {card}
                </a>
              ) : (
                card
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
