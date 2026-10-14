import { projects } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

export function SelectedWork() {
  return (
    <section className="section" id="projetos">
      <div className="shell">
        <SectionHeading number="01" title="Soluções & Projetos" />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
