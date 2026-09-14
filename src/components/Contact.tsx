import { ContactButton } from './ContactButton';

export function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="shell contact-wrap">
        <p className="eyebrow">Próximo passo</p>
        <h2>Vamos tirar seu projeto da lista e colocar no ar.</h2>
        <p>
          Se você tem uma ideia, uma operação pedindo organização ou uma página que
          precisa trabalhar melhor pelo seu negócio, podemos conversar.
        </p>
        <ContactButton phoneNumber={import.meta.env.VITE_WHATSAPP_NUMBER} />
        <div className="contact-links">
          <a href="mailto:lucaspetrocinireis@gmail.com">lucaspetrocinireis@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/lucas-petrocini-57843321b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="https://github.com/petrocini" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
