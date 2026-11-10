"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "./site-data";

export default function CaseStudyCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function goTo(index: number) {
    const node = track.current;
    if (!node) return;
    const next = (index + caseStudies.length) % caseStudies.length;
    const card = node.children[next] as HTMLElement;
    node.scrollTo({ left: card.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <section id="work" className="section stories-section" aria-labelledby="stories-heading">
      <div className="shell">
        <div className="stories-heading">
          <div><h2 id="stories-heading">Work that makes technology useful.</h2><p>Explore six projects across AI, operations, information, testing, and wellbeing.</p></div>
          <div className="stories-controls">
            <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous case study"><ArrowLeft aria-hidden="true" /></button>
            <button type="button" onClick={() => goTo(active + 1)} aria-label="Next case study"><ArrowRight aria-hidden="true" /></button>
          </div>
        </div>
        <div className="stories-track" ref={track} role="region" aria-label="Case studies" tabIndex={0}
          onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "ArrowRight" || event.key === "ArrowLeft")) { event.preventDefault(); goTo(active + (event.key === "ArrowRight" ? 1 : -1)); } }}
          onScroll={() => { const node = track.current; if (!node) return; const first = node.children[0] as HTMLElement; setActive(Math.min(caseStudies.length - 1, Math.round(node.scrollLeft / (first.offsetWidth + 24)))); }}>
          {caseStudies.map((study, index) => (
            <article className={`story-slide story-tone-${index % 3}`} key={study.slug} style={{ backgroundImage: `linear-gradient(90deg, rgba(16,16,61,.35), rgba(16,16,61,.05)), url("/case-study-backgrounds/${index + 1}.png")` }} aria-label={`${index + 1} of ${caseStudies.length}: ${study.title}`}>
              <div className="story-top"><img src={`/case-study-icons/${study.slug}.svg`} width="64" height="64" alt="" /><span>0{index + 1} / 06</span></div>
              <div className="story-content"><h3>{study.title}</h3><p>{study.summary}</p><Link href={`/case-studies/${study.slug}`} className="story-link">View case study <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
            </article>
          ))}
        </div>
        <div className="stories-pagination" aria-label="Choose a case study">
          {caseStudies.map((study, index) => <button type="button" key={study.slug} aria-label={`Show ${study.title}`} aria-current={active === index ? "true" : undefined} onClick={() => goTo(index)} />)}
          <span aria-live="polite">{String(active + 1).padStart(2, "0")} / 06</span>
        </div>
      </div>
    </section>
  );
}
