import Link from "next/link";
import MetallicPaint from "../components/metallic-paint/MetallicPaint";
import Particles from "../components/particles/Particles";
import CaseStudyCarousel from "./case-study-carousel";
import ExpertiseSection from "./expertise-section";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="arrow-icon">{diagonal ? <path d="M5 19 19 5M7 5h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}</svg>;
}

function Brand() {
  return <Link href="/" className="brand" aria-label="Sarai Group home"><img src="/sarai-logo.svg" alt="Sarai Group" width="217" height="58" /></Link>;
}

export default function Home() {
  return <main>
    <header className="site-header"><div className="shell header-inner"><Brand /><nav aria-label="Main navigation" className="main-nav"><a href="#approach">Our approach</a><a href="#work">Case studies</a><a href="#expertise">Our expertise</a></nav><a href="#expertise" className="header-cta">Sarai Platforms <Arrow diagonal /></a></div></header>

    <section className="hero"><div className="hero-particles" aria-hidden="true"><Particles particleColors={["#ffffff", "#b8acec", "#8585df"]} particleCount={115} particleSpread={12} speed={0.06} particleBaseSize={65} sizeRandomness={1.1} glow={0.35} twinkle={0.2} alphaParticles opacity={0.55} moveParticlesOnHover={false} clickBurst={false} disableRotation intro={false} /></div><div className="shell hero-grid"><div className="hero-copy"><h1>Your bridge to <em>digital transformation</em> excellence.</h1><p className="hero-intro">From the first idea to solutions ready to scale, we bring digital products, data, and AI together.</p><div className="hero-actions"><a href="#approach" className="button button-light">Explore our approach <Arrow /></a><a href="#work" className="text-link hero-link">See our work <Arrow diagonal /></a></div></div><div className="hero-visual hero-logo-visual"><div className="hero-metallic-icon" role="img" aria-label="Sarai emblem with flowing metallic reflections"><MetallicPaint imageSrc="/sarai-icon.svg" scale={0.96} speed={0.45} softness={0.18} dispersion={0.15} distortion={0.05} edgeBend={0.65} mouseTilt={0.35} intro={false} /></div><p className="hero-logo-caption">Ideas. Intelligence. Impact.</p></div></div><div className="hero-bottom shell"><span>STRATEGY</span><span>DATA</span><span>ARTIFICIAL INTELLIGENCE</span><span>DIGITAL PLATFORMS</span></div></section>

    <section id="approach" className="section approach-section"><div className="shell approach-grid"><div className="section-intro"><h2>Agents for bespoke digital transformation.</h2><p>Ideas become useful when they move into the hands of people and businesses. Our work connects strategic thinking with practical delivery.</p></div><div className="capability-list"><div><span>01</span><p>Define digital product concepts and build prototypes quickly.</p></div><div><span>02</span><p>Develop data assets for strategic planning, tactical decisions, and daily operations.</p></div><div><span>03</span><p>Tailor AI solutions to businesses looking to modernize their digital operations.</p></div><div><span>04</span><p>Use AI to enhance business capabilities.</p></div></div></div></section>

    <section className="section journey-section"><div className="shell"><div className="journey-head"><h2>From ideation to implementation.</h2><p>A clear path through the digital modernization lifecycle, from early insight to deployment at scale.</p></div><div className="journey-rail" aria-label="Digital modernization lifecycle"><div className="journey-step"><span className="step-dot" /><strong>01</strong><h3>Idea development</h3><p>Shape the opportunity</p><div className="step-time">4 <span>weeks</span></div></div><div className="journey-step"><span className="step-dot" /><strong>02</strong><h3>Data-informed insights</h3><p>Find what the data reveals</p><div className="step-time">8 <span>weeks</span></div></div><div className="journey-step"><span className="step-dot" /><strong>03</strong><h3>Rapid prototyping</h3><p>Test and refine the solution</p><div className="step-time">12 <span>weeks</span></div></div><div className="journey-step"><span className="step-dot" /><strong>04</strong><h3>Deployment at scale</h3><p>Move into operation</p><div className="step-end">→</div></div></div><div className="journey-bands"><div><span>OUR EXPERTISE</span><p>Data asset curation <b>·</b> AI enhancements <b>·</b> AI and digital platforms</p></div><div><span>THE BENEFITS</span><p>Efficiency <b>·</b> Productivity <b>·</b> Experience <b>·</b> Growth <b>·</b> Impact</p></div></div></div></section>

    <CaseStudyCarousel />

    <ExpertiseSection />

    <footer className="site-footer"><div className="shell footer-top"><div><Brand /><p>Digital transformation, from idea to impact.</p></div><a href="#top" className="back-top">Back to top ↑</a></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Sarai Group. All rights reserved.</span><div><span>Privacy Policy</span><span>Terms &amp; Conditions</span></div></div></footer>
  </main>;
}



