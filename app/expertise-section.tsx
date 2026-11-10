"use client";

import { useState } from "react";
import { services } from "./site-data";

const initiallyVisibleServices = 6;

export default function ExpertiseSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleServices = isExpanded ? services : services.slice(0, initiallyVisibleServices);

  return (
    <section id="expertise" className="section expertise-section" aria-labelledby="expertise-heading">
      <div className="shell services-layout">
        <div className="expertise-intro services-intro">
          <h2 id="expertise-heading">Our services.</h2>
          <p>Specialist capabilities that connect strategy, data, technology, and delivery.</p>
        </div>
        <div className="service-card-grid" role="region" aria-label="Services">
          {visibleServices.map((service, index) => (
            <article className="service-card" key={service.name}>
              <span className="service-card-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-tools">
                <span>Typical tools</span>
                <ul>
                  {service.tools.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        {!isExpanded && (
          <button className="services-more" type="button" onClick={() => setIsExpanded(true)}>View more services</button>
        )}
      </div>
    </section>
  );
}
