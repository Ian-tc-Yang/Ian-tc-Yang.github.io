import { ArrowUpRight, Mail } from 'lucide-react';
import { InteractivePortrait } from '@/components/interactive-portrait';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const experience = [
  {
    period: 'Nov 2025 — Jul 2026',
    organization: 'Industrial Technology Research Institute',
    role: 'Research Engineer · Generative AI & Computer Vision',
    location: 'Hsinchu, Taiwan',
    summary:
      'Developed multimodal AI systems for CAD design and industrial inspection, including large-model fine-tuning, retrieval pipelines, geometric validation, and production vision systems.',
  },
  {
    period: 'Jun 2024 — Aug 2024',
    organization: 'Tunghai University · Intelligent System Lab',
    role: 'Undergraduate Researcher',
    location: 'Taichung, Taiwan',
    summary:
      'Worked on GAN-based synthetic medical data and adaptive neuro-fuzzy models for disease prediction under limited-data conditions.',
  },
  {
    period: 'Dec 2023 — Jan 2024',
    organization: 'Knowledge and Service Information Corp',
    role: 'Software Engineering Intern',
    location: 'Taichung, Taiwan',
    summary:
      'Built database tools for non-technical users and automated record-to-PDF workflows with Java, JavaScript, and SQL.',
  },
  {
    period: 'Mar 2023 — Oct 2023',
    organization: 'JAXA Kibo Robot Programming Challenge',
    role: 'World Champion · Team Flying Unicorns',
    location: 'Japan / Taiwan',
    summary:
      'Programmed autonomous free-flying robots for tasks inside the International Space Station and placed first among 2,700+ contestants.',
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader active="home" />
      <main>
        <section className="home-intro page-width">
          <div className="intro-copy">
            <span className="intro-decoration" aria-hidden="true" />
            <p className="section-label">Profile</p>
            <h1>Ian Yang</h1>
            <p className="professional-title">Research engineer and UC Berkeley EECS student.</p>
            <p className="intro-summary">
              My work focuses on multimodal AI, computer vision, robotics, and intelligent design systems.
            </p>
            <div className="intro-links">
              <a href="mailto:ianyang@berkeley.edu"><Mail size={16} aria-hidden="true" /> ianyang@berkeley.edu</a>
              <a href="/work/">View research &amp; projects <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>

          <InteractivePortrait />
        </section>

        <section className="profile-facts page-width" aria-label="Personal information">
          <div><span>Education</span><strong>UC Berkeley EECS</strong></div>
          <div><span>Graduation</span><strong>May 2028</strong></div>
          <div><span>Based in</span><strong>Berkeley / Taichung</strong></div>
          <div><span>Focus</span><strong>AI · Vision · Robotics</strong></div>
        </section>

        <section className="content-section page-width" id="experience">
          <div className="section-title-row">
            <div>
              <p className="section-label">Experience</p>
              <h2>Past experience</h2>
            </div>
            <a href="/resume/ian-yang-resume.pdf" target="_blank" rel="noreferrer">Full résumé <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={`${item.organization}-${item.period}`}>
                <time>{item.period}</time>
                <div>
                  <h3>{item.organization}</h3>
                  <p className="role">{item.role}</p>
                  <p className="summary">{item.summary}</p>
                </div>
                <span className="location">{item.location}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section page-width" id="contact">
          <p className="section-label">Contact</p>
          <div className="contact-grid">
            <h2>Get in touch.</h2>
            <div className="contact-details">
              <a href="mailto:ianyang@berkeley.edu">ianyang@berkeley.edu</a>
              <a href="https://www.linkedin.com/in/ian--yang/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="https://github.com/Ian-tc-Yang" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="https://scholar.google.com/citations?user=IM4J0G8AAAAJ&hl=zh-TW" target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
