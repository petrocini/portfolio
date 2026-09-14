import type { Project } from '../data/portfolio';

const visibilityLabel = {
  public: 'Projeto público',
  demonstrative: 'Projeto demonstrativo',
  private: 'Projeto privado',
} as const;

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`project-card accent-${project.accent} ${featured ? 'featured' : ''}`}
    >
      <div className="project-art" aria-hidden="true">
        <span>{project.title.slice(0, 2).toUpperCase()}</span>
        <i />
        <i />
        <i />
      </div>
      <div className="project-body">
        <p className="project-status">{visibilityLabel[project.visibility]}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul
          className="tag-list"
          aria-label={`Tecnologias e características de ${project.title}`}
        >
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.url ? (
          <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
            {project.urlLabel} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="private-note">
            {project.visibility === 'private'
              ? 'Acesso restrito por confidencialidade.'
              : 'Conceito em desenvolvimento.'}
          </span>
        )}
      </div>
    </article>
  );
}
