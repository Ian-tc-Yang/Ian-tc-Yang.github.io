import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Interests — Ian Yang',
  description: 'A future space for Ian Yang’s personal interests.',
  openGraph: { title: 'Interests — Ian Yang', description: 'A future space for Ian Yang’s personal interests.', images: [] },
  twitter: { card: 'summary', title: 'Interests — Ian Yang', description: 'A future space for Ian Yang’s personal interests.', images: [] },
};

export default function InterestsPage() {
  return (
    <>
      <SiteHeader active="interests" />
      <main className="subpage page-width placeholder-page">
        <div className="interest-copy">
          <p className="section-label">Interests</p>
          <h1>Personal interests</h1>
          <p className="subpage-intro">This space is reserved for a future version.</p>
        </div>
        <div className="interest-canvas" aria-hidden="true">
          <span className="interest-orbit interest-orbit-one" />
          <span className="interest-orbit interest-orbit-two" />
          <span className="interest-dot" />
          <span className="interest-line" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
