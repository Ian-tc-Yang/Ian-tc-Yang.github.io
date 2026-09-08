import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Research and Projects — Ian Yang',
  description: 'Research focus, projects, publications, and technical skills from Ian Yang.',
  openGraph: {
    title: 'Research and Projects — Ian Yang',
    description: 'Research focus, projects, publications, and technical skills from Ian Yang.',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: 'Research and Projects — Ian Yang',
    description: 'Research focus, projects, publications, and technical skills from Ian Yang.',
    images: [],
  },
};

const researchAreas = [
  ['01', 'Multimodal reasoning', 'How vision-language models represent geometry, context, and task constraints.'],
  ['02', 'Robust computer vision', 'Reliability under limited data, occlusion, perturbation, and distribution shift.'],
  ['03', 'Design agents', 'Systems that connect model outputs to editable CAD representations and validation.'],
  ['04', 'Robotics', 'Perception and planning for autonomous systems operating in physical environments.'],
];

const projects = [
  {
    title: 'Agentic AI pipeline for conformal cooling design',
    context: 'Industrial Technology Research Institute · 2025–2026',
    description:
      'Built an end-to-end pipeline connecting multi-view CAD preprocessing, Qwen3-VL image-to-CadQuery generation, Nemotron-based channel design, retrieval, geometric reconstruction, and STEP validation.',
    result: 'Reported 96% reduction in design time and 97% image-to-CadQuery accuracy.',
    tools: ['Qwen3-VL-32B', 'LoRA', 'Nemotron 30B', 'RAG', 'CadQuery', 'NVIDIA H200'],
    href: '/resume/ian-yang-resume.pdf',
  },
  {
    title: 'UC Berkeley visual computing portfolio',
    context: 'Computer Vision · 2025–2026',
    description:
      'A collection of computational photography and vision projects covering camera geometry, image blending, feature-based methods, neural rendering, and image synthesis.',
    result: 'Six documented course projects, including a featured final project.',
    tools: ['Python', 'PyTorch', 'Computer Vision', 'Image Processing'],
    href: 'https://ian-tc-yang.github.io/cs180/',
  },
  {
    title: 'Synthetic data for industrial inspection',
    context: 'Industrial Technology Research Institute · 2026',
    description:
      'Expanded a limited industrial-defect dataset using NVIDIA Cosmos and trained a YOLO-based automated optical inspection model.',
    result: 'Reported 24% improvement in defect-detection accuracy under low-data conditions.',
    tools: ['NVIDIA Cosmos', 'YOLO', 'Synthetic Data', 'Computer Vision'],
    href: '/resume/ian-yang-resume.pdf',
  },
  {
    title: 'Autonomous robotics aboard the ISS',
    context: 'JAXA Kibo Robot Programming Challenge · 2023',
    description:
      'Programmed autonomous free-flying robots to perform astronaut-assistance and maintenance tasks inside JAXA’s Kibo module on the International Space Station.',
    result: 'World champion among 2,700+ contestants from 35+ countries.',
    tools: ['Robotics', 'Autonomy', 'Path Planning', 'Java'],
    href: 'https://humans-in-space.jaxa.jp/krpc/4th/',
  },
];

const publications = [
  {
    year: '2023',
    title: 'Solution for Open Questions in Yen (2021), Osler (2001), and Çalışkan (2020, 2022)',
    venue: 'IAENG International Journal of Applied Mathematics, 53(1), 48–57',
    href: 'https://www.iaeng.org/IJAM/issues_v53/issue_1/IJAM_53_1_07.pdf',
  },
  {
    year: '2022',
    title: 'Customer Responses for Menu-Less Restaurants under Information Asymmetry',
    venue: 'Mathematical Problems in Engineering, Volume 2022',
    href: 'https://doi.org/10.1155/2022/8059340',
  },
  {
    year: '2023',
    title: 'Optimizing LINE Virtual Assistant’s Responses Using Similarity Measure',
    venue: 'Distinction, Taiwan National High School Project Contest',
    href: '/resume/ian-yang-resume.pdf',
  },
];

const toolbox = [
  {
    group: 'Languages',
    items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Swift', 'HTML / CSS'],
  },
  {
    group: 'AI / Data',
    items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'Pandas', 'NeMo AutoModel', 'LoRA', 'RAG'],
  },
  {
    group: 'Systems / Product',
    items: ['Docker', 'Git / GitHub', 'AWS', 'NVIDIA H200', 'DGX Spark', 'React', 'Expo', 'RISC-V'],
  },
];

export default function WorkPage() {
  return (
    <>
      <SiteHeader active="work" />
      <main>
        <section className="work-intro page-width">
          <h1>Research and Projects</h1>
          <p>Multimodal AI, computer vision, intelligent design systems, and robotics.</p>
        </section>

        <section className="work-section page-width">
          <div className="work-section-title work-section-title-simple">
            <h2>Projects</h2>
          </div>
          <div className="work-list">
            {projects.map((project, index) => (
              <a
                className="work-item"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
                aria-label={`View project: ${project.title}`}
              >
                <span className="work-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="work-main">
                  <p className="work-context">{project.context}</p>
                  <h3>{project.title}</h3>
                  <p className="work-description">{project.description}</p>
                  <p className="work-result">{project.result}</p>
                  <div className="tool-tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                </div>
                <span className="work-link">View project <ArrowUpRight size={14} aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="work-section page-width">
          <div className="work-section-title work-section-title-simple">
            <h2>Publications</h2>
          </div>
          <div className="publication-list-clean">
            {publications.map((publication) => (
              <a href={publication.href} target="_blank" rel="noreferrer" key={publication.title}>
                <span>{publication.year}</span>
                <div><h3>{publication.title}</h3><p>{publication.venue}</p></div>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="work-section page-width">
          <div className="work-section-title work-section-title-simple">
            <h2>Research Focus</h2>
          </div>
          <div className="research-area-list">
            {researchAreas.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section page-width toolbox-section">
          <div className="work-section-title">
            <p className="section-label">Toolbox</p>
            <h2>Technical skills</h2>
          </div>
          <div className="toolbox-grid">
            {toolbox.map((group) => (
              <article key={group.group}>
                <h3>{group.group}</h3>
                <p>{group.items.join(' · ')}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
