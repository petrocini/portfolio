import { processSteps } from '../data/portfolio';

export function Process() {
  return (
    <section className="process-section">
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow">Um processo sem ruído</p>
          <h2>Boa execução começa com boas perguntas.</h2>
        </div>
        <ol className="process-list">
          {processSteps.map(([number, title, text]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
