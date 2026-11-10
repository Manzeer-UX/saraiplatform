import { BrainCircuit, Lightbulb, Sparkles } from "lucide-react";

const orbitChips = [
  { label: "Ideas.", width: 80, rotation: -28, duration: "22s", delay: "0s" },
  { label: "Intelligence.", width: 108, rotation: 31, duration: "27s", delay: "-9s" },
  { label: "Impact.", width: 84, rotation: 90, duration: "24s", delay: "-16s" },
] as const;

export default function HeroIntelligenceGraphic() {
  return (
    <div className="hero-intelligence-graphic" role="img" aria-label="Three moving orbital paths carrying the words Ideas, Intelligence, and Impact.">
      <svg viewBox="0 0 620 620" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="orbit-gradient" x1="0" x2="1">
            <stop offset="0" stopColor="#6defff" stopOpacity=".3" />
            <stop offset=".48" stopColor="#fff" stopOpacity=".95" />
            <stop offset="1" stopColor="#c9a6ff" stopOpacity=".45" />
          </linearGradient>
          <linearGradient id="orbit-gradient-light" x1="0" x2="1">
            <stop offset="0" stopColor="#0d0d95" stopOpacity=".46" />
            <stop offset=".48" stopColor="#661d77" stopOpacity=".92" />
            <stop offset="1" stopColor="#168ba9" stopOpacity=".54" />
          </linearGradient>
          <path id="atom-orbit" d="M52 310a258 126 0 1 0 516 0 258 126 0 1 0-516 0" />
        </defs>

        <AtomOrbit orbit={orbitChips[0]} className="hero-graphic-orbit-ideas" />
        <AtomOrbit orbit={orbitChips[1]} className="hero-graphic-orbit-intelligence" />
        <AtomOrbit orbit={orbitChips[2]} className="hero-graphic-orbit-impact" />
        <CenterSequence />
      </svg>
    </div>
  );
}

function AtomOrbit({ orbit, className }: { orbit: (typeof orbitChips)[number]; className: string }) {
  return <g className={`hero-graphic-orbit ${className}`}><g transform={`rotate(${orbit.rotation} 310 310)`}><use href="#atom-orbit" /><OrbitChip label={orbit.label} width={orbit.width} duration={orbit.duration} delay={orbit.delay} /></g></g>;
}

function OrbitChip({ label, width, duration, delay }: Pick<(typeof orbitChips)[number], "label" | "width" | "duration" | "delay">) {
  return <g className="hero-graphic-chip"><rect x={-width / 2} y="-15" width={width} height="30" rx="15" /><text textAnchor="middle" dominantBaseline="middle">{label}</text><animateMotion dur={duration} begin={delay} repeatCount="indefinite" rotate="auto"><mpath href="#atom-orbit" /></animateMotion></g>;
}

function CenterSequence() {
  return <g className="hero-graphic-center" aria-hidden="true">
    <g className="hero-graphic-center-stage hero-graphic-center-ideas"><circle cx="310" cy="310" r="55" className="hero-graphic-center-disc" /><Lightbulb x="282" y="282" width="56" height="56" className="hero-graphic-react-icon" /></g>
    <g className="hero-graphic-center-stage hero-graphic-center-intelligence"><circle cx="310" cy="310" r="55" className="hero-graphic-center-disc" /><BrainCircuit x="282" y="282" width="56" height="56" className="hero-graphic-react-icon" /></g>
    <g className="hero-graphic-center-stage hero-graphic-center-impact"><circle cx="310" cy="310" r="55" className="hero-graphic-center-disc" /><Sparkles x="282" y="282" width="56" height="56" className="hero-graphic-react-icon" /></g>
  </g>;
}
