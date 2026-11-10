const services = [
  "AI, Data & Cognitive Technologies",
  "Enterprise Cybersecurity",
  "Enterprise Application Development",
  "Cloud & Infrastructure Modernization",
  "Data Analytics & Business Intelligence",
  "Quality Engineering",
  "Managed IT Services",
  "Digital Transformation & Smart Automation",
  "Maintaining services",
];

export default function ServicesSection() {
  return (
    <section id="services" className="section services-section" aria-labelledby="services-heading">
      <div className="shell">
        <div className="section-heading"><h2 id="services-heading">Our services.</h2></div>
        <ul className="services-list">
          {services.map((service) => (
            <li key={service}>
              <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 24 24" fill="none"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
