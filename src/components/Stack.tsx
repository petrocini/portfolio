import { skillGroups } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="shell">
        <SectionHeading number="05" title="Stack e Ferramentas" />
        <div className="stack-intro glass-card">
          <div>
            <span>Como trabalho</span>
            <h3>Da ideia ao deploy.</h3>
            <p>
              Planejo a experiência, construo a interface e cuido da base técnica para
              que o projeto seja simples de usar e de evoluir.
            </p>
          </div>
          <ul>
            <li>Planejamento</li>
            <li>Desenvolvimento</li>
            <li>Publicação</li>
          </ul>
        </div>
        <div className="stack-layout">
          <div className="code-window glass-card" aria-label="Resumo técnico">
            <div className="window-bar">
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>~/lucas.ts</span>
            </div>
            <div className="code-content" aria-hidden="true">
              <p>
                <span>01</span>
                <em>// full stack dev / problem solver</em>
              </p>
              <p>
                <span>02</span>
                <b>const</b> lucas = {'{'}
              </p>
              <p>
                <span>03</span> role: <strong>'Full Stack Engineer'</strong>,
              </p>
              <p>
                <span>04</span> core: [<strong>'Laravel'</strong>,{' '}
                <strong>'React'</strong>],
              </p>
              <p>
                <span>05</span> focus: <strong>'experiências úteis'</strong>,
              </p>
              <p>
                <span>06</span> build(idea) {'{'}
              </p>
              <p>
                <span>07</span> return idea.ship();
              </p>
              <p>
                <span>08</span> {'}'}
              </p>
              <p>
                <span>09</span>
                {'};'}
              </p>
            </div>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card glass-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
