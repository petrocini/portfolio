import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="shell">
        <SectionHeading number="04" title="Sobre Mim" />
        <div className="about-grid">
          <div className="about-copy">
            <p>
              Olá! Sou <strong>Lucas Petrocini</strong>, desenvolvedor full stack e
              bacharel em Ciência da Computação. Crio desde{' '}
              <strong>landing pages de alto impacto</strong> até sistemas web que
              organizam operações de negócio.
            </p>
            <p>
              Minha experiência combina design, software e operação. Busco entender o
              contexto de cada projeto para entregar interfaces rápidas, responsivas e
              simples de usar.
            </p>
            <p>
              Se você precisa apresentar melhor seu serviço ou tirar uma ideia do papel,
              vamos conversar.
            </p>
          </div>
          <div
            className="about-visual"
            aria-label="Assinatura visual de Lucas Petrocini"
          >
            <span>&lt; LP /&gt;</span>
            <div>
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
