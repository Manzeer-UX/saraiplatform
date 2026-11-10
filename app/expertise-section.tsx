"use client";

import { useState } from "react";
import { services } from "./site-data";

const initiallyVisibleServices = 5;

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="arrow-icon"><path d="M5 19 19 5M7 5h12v12" /></svg>;
}

export default function ExpertiseSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleServices = isExpanded ? services : services.slice(0, initiallyVisibleServices);

  return (
    <section id="expertise" className="section expertise-section" aria-labelledby="expertise-heading">
      <div className="shell expertise-grid">
        <div className="expertise-intro">
          <h2 id="expertise-heading">Our services.</h2>
          <p>Specialist capabilities that connect strategy, data, technology, and delivery.</p>
        </div>
        <div>
          <div className="company-list">
            {visibleServices.map((service, index) => (
              <div className="company-row service-expertise-row" key={service}>
                <span className="company-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service}</h3>
                <span className="company-arrow"><Arrow /></span>
              </div>
            ))}
          </div>
          {!isExpanded && (
            <button className="expertise-more" type="button" onClick={() => setIsExpanded(true)}>
              View more services <Arrow />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
