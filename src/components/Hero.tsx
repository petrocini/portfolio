import { ContactButton } from './ContactButton';

export function Hero() {
  return (
    <section className="hero shell" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">Desenvolvimento full stack · Brasil</p>
        <h1>Projetos digitais que tornam o próximo passo mais claro.</h1>
        <p className="hero-lede">
          Eu ajudo negócios a transformar uma ideia, serviço ou operação em uma
          experiência digital útil, rápida e pronta para crescer.
        </p>
        <div className="hero-actions">
          <ContactButton phoneNumber={import.meta.env.VITE_WHATSAPP_NUMBER} />
          <a
            className="text-link"
            href="https://github.com/petrocini"
            target="_blank"
            rel="noreferrer"
          >
            Conhecer meu GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <aside className="hero-note" aria-label="Como posso ajudar">
        <span className="note-index">01—</span>
        <p>
          Landing pages, sistemas web e produtos digitais feitos com visão de negócio e
          rigor técnico.
        </p>
      </aside>
    </section>
  );
}
