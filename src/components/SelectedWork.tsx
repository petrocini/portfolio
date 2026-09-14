import { projects } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

export function SelectedWork() {
  return (
    <section className="work-section" id="projetos">
      <div className="shell">
        <div className="section-heading inverse">
          <p className="eyebrow">Projetos selecionados</p>
          <h2>O que acontece quando produto e operação conversam.</h2>
          <p>
            Cases públicos, trabalhos privados e estudos que mostram diferentes partes
            do meu processo.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
