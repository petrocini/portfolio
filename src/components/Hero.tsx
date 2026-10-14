export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="shell hero-inner">
        <p className="hero-kicker">Olá, eu sou</p>
        <h1>Lucas Petrocini.</h1>
        <p className="hero-role">
          Desenvolvedor <span>Full Stack</span>.
        </p>
        <p className="hero-lede">
          Crio landing pages, sites modernos e aplicações web que apresentam negócios
          com clareza e transformam ideias em experiências digitais úteis.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Ver Projetos <span aria-hidden="true">→</span>
          </a>
          <a
            className="button button-outline"
            href="https://github.com/petrocini"
            target="_blank"
            rel="noreferrer"
          >
            Meu GitHub
          </a>
        </div>
      </div>
      <a className="scroll-cue" href="#projetos" aria-label="Ir para projetos">
        ↓
      </a>
    </section>
  );
}
