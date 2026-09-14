import { services } from '../data/portfolio';

export function Services() {
  return (
    <section className="section shell" id="servicos">
      <div className="section-heading">
        <p className="eyebrow">Onde eu entro</p>
        <h2>Do primeiro rascunho à operação que você precisa sustentar.</h2>
      </div>
      <div className="service-list">
        {services.map((service, index) => (
          <article key={service.title}>
            <span>0{index + 1}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
