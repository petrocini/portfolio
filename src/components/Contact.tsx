import { ContactButton } from './ContactButton';

export function Contact() {
  return (
    <section className="section contact-section" id="contato">
      <div className="shell contact-wrap">
        <p className="contact-kicker">05. Qual é o próximo passo?</p>
        <h2>Vamos Construir o Seu Projeto</h2>
        <p>
          Precisa de uma landing page para apresentar seu serviço ou de um sistema web
          sob medida? Conte o que você tem em mente e podemos definir juntos o melhor
          caminho.
        </p>
        <ContactButton phoneNumber={import.meta.env.VITE_WHATSAPP_NUMBER} />
        <div className="contact-links">
          <a href="mailto:lucaspetrocinireis@gmail.com" aria-label="E-mail">
            ✉
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-petrocini-57843321b"
            target="_blank"
            rel="noreferrer"
            aria-label="in LinkedIn"
          >
            <span aria-hidden="true">in</span>
          </a>
          <a
            href="https://github.com/petrocini"
            target="_blank"
            rel="noreferrer"
            aria-label="gh GitHub"
          >
            <span aria-hidden="true">gh</span>
          </a>
        </div>
      </div>
    </section>
  );
}
