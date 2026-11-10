import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "../../site-data";

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  return <main className="detail-page"><div className="shell detail-nav"><Link href="/" className="detail-brand">SARAI<span>GROUP</span></Link><Link href="/#work">← All case studies</Link></div><section className="shell detail-content"><p>CASE STUDY</p><h1>{study.title}</h1><div className="detail-rule" /><h2>{study.summary}</h2><Link href="/#work" className="button button-dark">Explore more projects <span aria-hidden="true">→</span></Link></section><footer className="shell detail-footer">© {new Date().getFullYear()} Sarai Group</footer></main>;
}
