import type { Project } from '../data/portfolio';

function ProjectPreview({ variant }: { variant: Project['preview'] }) {
  if (variant === 'caiado') {
    return (
      <div className="preview preview-caiado">
        <img
          src="/images/caiado-fifa-card.webp"
          alt="Página inicial do site Caiado FIFA"
          loading="lazy"
          width="800"
          height="450"
        />
      </div>
    );
  }

  if (variant === 'pdv') {
    return (
      <div className="preview preview-pdv" aria-label="Prévia ilustrativa do PDV Fácil">
        <div className="pdv-side">
          <b>PDV</b>
          <i />
          <i />
          <i />
        </div>
        <div className="pdv-main">
          <span>Visão geral</span>
          <div>
            <i />
            <i />
            <i />
          </div>
          <p />
          <p />
        </div>
      </div>
    );
  }

  return (
    <div className="preview preview-clara">
      <img
        src="/images/clara-nutricao-800.webp"
        alt="Prévia do projeto conceito Clara Nutrição"
        loading="lazy"
        width="800"
        height="500"
      />
      <div className="preview-clara-copy" aria-hidden="true">
        <span>clara. nutrição</span>
        <strong>Nutrição que cabe na vida que você tem.</strong>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card glass-card">
      <div className="window-bar">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="window-domain">{project.domain}</span>
      </div>
      <ProjectPreview variant={project.preview} />
      <div className="project-body">
        <span className="project-status">
          {project.visibility === 'concept' ? 'Projeto conceito' : 'Projeto público'}
        </span>
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
        {project.url && (
          <a
            className="project-link"
            href={project.url}
            target={project.url.startsWith('http') ? '_blank' : undefined}
            rel={project.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {project.urlLabel}{' '}
            <span aria-hidden="true">{project.url.startsWith('http') ? '↗' : '→'}</span>
          </a>
        )}
      </div>
    </article>
  );
}
