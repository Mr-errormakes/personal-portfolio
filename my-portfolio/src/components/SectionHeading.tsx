import Reveal from "./Reveal";

type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal from="above" className={`section-heading align-${align}`}>
      <p className="section-label">{label}</p>
      <h2>
        {title}
        <span className="accent-text">.</span>
      </h2>
      <span className="heading-rule" aria-hidden="true" />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}
