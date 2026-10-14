import { experience } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="shell narrow">
        <SectionHeading number="03" title="Onde Já Atuei" />
        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`}>
              <div className="experience-top">
                <h3>{item.role}</h3>
                <span>{item.period}</span>
              </div>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
              <ul className="experience-tags">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
