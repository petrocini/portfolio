import type { Project } from '../data/portfolio';

function ProjectPreview({ variant }: { variant: Project['preview'] }) {
  if (variant === 'caiado') {
    return (
      <div
        className="preview preview-caiado"
        aria-label="Prévia ilustrativa do projeto Caiado FIFA"
      >
        <span className="preview-mini">CAIADO / EA FC</span>
        <strong>
          O jogo
          <br />é só o começo.
        </strong>
        <span className="preview-line" />
        <span className="preview-orbit" aria-hidden="true" />
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
    <div
      className="preview preview-systems"
      aria-label="Representação de sistemas privados"
    >
      <span>system.config</span>
      <strong>
        {'{'} soluções sob medida {'}'}
      </strong>
      <i />
      <i />
      <i />
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
          {project.visibility === 'public' ? 'Projeto público' : 'Projeto privado'}
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
        {project.url ? (
          <a
            className="project-link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            {project.urlLabel} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="project-private">
            Acesso restrito por confidencialidade.
          </span>
        )}
      </div>
    </article>
  );
}
