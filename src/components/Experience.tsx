import { experience, skillGroups } from '../data/portfolio';

export function Experience() {
  return (
    <section className="section shell" id="experiencia">
      <div className="split-heading">
        <div className="section-heading">
          <p className="eyebrow">Experiência profissional</p>
          <h2>
            Tecnologia é ferramenta. Contexto é o que transforma entrega em resultado.
          </h2>
        </div>
        <div className="skills">
          {skillGroups.map(([group, skills]) => (
            <div key={group}>
              <p>{group}</p>
              <span>{skills.join(' · ')}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`}>
            <p>{item.period}</p>
            <div>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
