import { ContactButton } from './ContactButton';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="shell hero-inner">
        <p className="hero-kicker">Desenvolvedor full stack</p>
        <h1>Lucas Petrocini.</h1>
        <p className="hero-role">
          Landing pages para <span>seu negócio</span>.
        </p>
        <p className="hero-lede">
          Crio sites que apresentam seu serviço com clareza, facilitam o contato e já
          nascem com uma base para serem encontrados no Google.
        </p>
        <div className="hero-actions">
          <ContactButton phoneNumber={import.meta.env.VITE_WHATSAPP_NUMBER} />
          <a className="button button-outline" href="#projetos">
            Ver projetos <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <a className="scroll-cue" href="#projetos" aria-label="Ir para projetos">
        ↓
      </a>
    </section>
  );
}
