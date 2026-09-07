import { ArrowUpRight, BriefcaseBusiness, FileText, GitBranch, GraduationCap } from 'lucide-react';

type SiteHeaderProps = {
  active: 'home' | 'work' | 'interests';
};

const navItems = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'Research and Projects', href: '/work/', key: 'work' },
  { label: 'Interests', href: '/interests/', key: 'interests' },
] as const;

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-name" href="/" aria-label="Ian Yang, home">Ian Yang</a>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} aria-current={active === item.key ? 'page' : undefined} key={item.key}>
              {item.label}
            </a>
          ))}
        </nav>

        <nav className="profile-links" aria-label="Professional profiles">
          <a href="https://github.com/Ian-tc-Yang" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitBranch size={15} aria-hidden="true" /> <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ian--yang/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <BriefcaseBusiness size={15} aria-hidden="true" /> <span>LinkedIn</span>
          </a>
          <a href="https://scholar.google.com/citations?user=IM4J0G8AAAAJ&hl=zh-TW" target="_blank" rel="noreferrer" aria-label="Google Scholar">
            <GraduationCap size={16} aria-hidden="true" /> <span>Scholar</span>
          </a>
          <a className="resume-link" href="/resume/ian-yang-resume.pdf" target="_blank" rel="noreferrer">
            <FileText size={15} aria-hidden="true" /> <span>Résumé</span> <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
