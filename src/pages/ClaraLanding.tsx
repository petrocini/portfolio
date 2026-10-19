import { createWhatsAppUrl } from '../lib/contact';

const focusAreas = [
  {
    number: '01',
    title: 'Começar pelo que é possível',
    description:
      'Uma conversa sobre sua rotina, preferências e objetivos antes de pensar em mudanças.',
  },
  {
    number: '02',
    title: 'Encontrar seu próprio ritmo',
    description:
      'Orientações alimentares construídas para fazer sentido no seu dia a dia.',
  },
  {
    number: '03',
    title: 'Seguir com apoio',
    description:
      'Um espaço para rever escolhas, tirar dúvidas e ajustar o caminho quando necessário.',
  },
] as const;

const steps = [
  {
    number: '01',
    title: 'A gente conversa',
    description:
      'Você conta sua história, sua rotina e o que gostaria de cuidar agora.',
  },
  {
    number: '02',
    title: 'Construímos um caminho',
    description:
      'As orientações partem do seu contexto, sem uma receita igual para todos.',
  },
  {
    number: '03',
    title: 'Ajustamos juntos',
    description:
      'O acompanhamento abre espaço para dúvidas e mudanças ao longo do tempo.',
  },
] as const;

const questions = [
  {
    question: 'A consulta pode ser online?',
    answer:
      'Nesta demonstração, a página apresenta formatos online e presencial. Em um site real, essa informação seria definida pela profissional e acompanhada das orientações de agendamento.',
  },
  {
    question: 'Preciso já saber qual é meu objetivo?',
    answer:
      'Não. Uma primeira conversa pode ajudar a entender sua rotina e organizar o que você deseja trabalhar com a profissional.',
  },
  {
    question: 'Existe uma dieta pronta para seguir?',
    answer:
      'A proposta ilustrada aqui valoriza orientações individualizadas. O atendimento e qualquer conduta seriam definidos por uma profissional habilitada.',
  },
] as const;

export function ClaraLanding() {
  const whatsapp = createWhatsAppUrl(
    import.meta.env.VITE_WHATSAPP_NUMBER,
    'Olá, Lucas! Vi o projeto conceito Clara Nutrição e gostaria de conversar sobre uma landing page para meu trabalho.',
  );
  const businessContact = whatsapp ?? 'mailto:lucaspetrocinireis@gmail.com';

  return (
    <div className="clara-page">
      <div className="clara-demo-bar">
        <span>
          <strong>Projeto conceito</strong> · marca e atendimento fictícios
        </span>
        <a href="/#projetos">
          Voltar ao portfólio <span aria-hidden="true">↗</span>
        </a>
      </div>

      <header className="clara-header">
        <div className="clara-container clara-header-inner">
          <a
            className="clara-brand"
            href="#inicio"
            aria-label="Clara Nutrição, ir para o início"
          >
            <span className="clara-brand-mark" aria-hidden="true">
              ✳
            </span>
            <span>
              clara<span className="clara-brand-dot">.</span>
              <small>nutrição</small>
            </span>
          </a>
          <nav aria-label="Navegação da Clara Nutrição">
            <a href="#proposta">A proposta</a>
            <a href="#processo">Como funciona</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a className="clara-header-cta" href="#contato">
            Conhecer o próximo passo <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="clara-hero" id="inicio" aria-labelledby="clara-title">
          <div className="clara-container clara-hero-grid">
            <div className="clara-hero-copy">
              <span className="clara-kicker">
                <span className="clara-kicker-line" /> Um jeito mais gentil de cuidar
              </span>
              <h1 id="clara-title">
                Nutrição que cabe na vida que você tem<span>.</span>
              </h1>
              <p>
                Alimentação não acontece fora da rotina. Um acompanhamento começa com
                escuta, considera o seu contexto e encontra caminhos possíveis para
                você.
              </p>
              <div className="clara-hero-actions">
                <a className="clara-button" href="#proposta">
                  Conhecer o atendimento <span aria-hidden="true">↗</span>
                </a>
                <a className="clara-text-link" href="#processo">
                  Como funciona <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="clara-hero-note">
                <span aria-hidden="true">✳</span>
                <span>
                  Um exemplo de experiência digital para profissionais de nutrição.
                </span>
              </div>
            </div>
            <div className="clara-hero-media">
              <img
                src="/images/clara-nutricao-portrait.webp"
                alt="Retrato ilustrativo de uma profissional em um ambiente de atendimento"
                width="1584"
                height="1024"
                fetchPriority="high"
              />
              <div className="clara-media-caption">
                <span className="clara-caption-spark" aria-hidden="true">
                  ✳
                </span>
                <span>
                  Um espaço para conversar
                  <br />
                  sobre o que faz sentido para você.
                </span>
              </div>
            </div>
          </div>
          <div className="clara-hero-bottom" aria-hidden="true">
            <span>escuta</span>
            <span>rotina</span>
            <span>possibilidades</span>
          </div>
        </section>

        <section
          className="clara-proposal clara-section"
          id="proposta"
          aria-labelledby="proposal-title"
        >
          <div className="clara-container">
            <div className="clara-section-head">
              <span className="clara-eyebrow">O atendimento</span>
              <h2 id="proposal-title">
                Cuidar da alimentação começa por entender <em>você.</em>
              </h2>
              <p>
                Sem um roteiro igual para todas as pessoas. A proposta é criar espaço
                para olhar o que já faz parte da sua vida e o que pode mudar com leveza.
              </p>
            </div>
            <div className="clara-focus-grid">
              {focusAreas.map((area) => (
                <article className="clara-focus-card" key={area.number}>
                  <span>{area.number}</span>
                  <div className="clara-focus-icon" aria-hidden="true">
                    ✳
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="clara-thought" aria-label="Ideia central do atendimento">
          <div className="clara-container clara-thought-inner">
            <span className="clara-thought-mark" aria-hidden="true">
              “
            </span>
            <p>Comer bem não deveria exigir uma vida perfeita.</p>
            <span className="clara-thought-leaf" aria-hidden="true">
              ✳
            </span>
          </div>
        </section>

        <section
          className="clara-process clara-section"
          id="processo"
          aria-labelledby="process-title"
        >
          <div className="clara-container clara-process-grid">
            <div className="clara-process-intro">
              <span className="clara-eyebrow">Como funciona</span>
              <h2 id="process-title">Um processo simples, de pessoa para pessoa.</h2>
              <p>
                Do primeiro contato ao acompanhamento, cada etapa tem espaço para suas
                perguntas e para a realidade da sua rotina.
              </p>
              <a className="clara-outline-link" href="#contato">
                Ver o próximo passo <span aria-hidden="true">↗</span>
              </a>
            </div>
            <ol className="clara-steps">
              {steps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="clara-faq clara-section"
          id="duvidas"
          aria-labelledby="faq-title"
        >
          <div className="clara-container clara-faq-grid">
            <div>
              <span className="clara-eyebrow">Antes de começar</span>
              <h2 id="faq-title">Algumas perguntas são parte do caminho.</h2>
              <p>
                Informações simples ajudam a chegar à primeira conversa com mais
                tranquilidade.
              </p>
            </div>
            <div className="clara-faq-list">
              {questions.map(({ question, answer }) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="clara-contact" id="contato" aria-labelledby="contact-title">
          <div className="clara-container clara-contact-inner">
            <div>
              <span className="clara-eyebrow">
                Um projeto para imaginar possibilidades
              </span>
              <h2 id="contact-title">
                Uma página assim pode apresentar o seu trabalho.
              </h2>
            </div>
            <div>
              <p>
                Clara Nutrição é uma demonstração fictícia. Se você atende pessoas e
                quer uma presença digital com a sua identidade, converse com Lucas sobre
                uma landing page feita para você.
              </p>
              <a
                className="clara-button clara-button-light"
                href={businessContact}
                target={whatsapp ? '_blank' : undefined}
                rel={whatsapp ? 'noopener noreferrer' : undefined}
              >
                Quero uma landing page assim <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="clara-footer">
        <div className="clara-container clara-footer-inner">
          <span>
            clara<span>.</span> <small>nutrição</small>
          </span>
          <p>
            Projeto conceito desenvolvido por Lucas Petrocini. Profissional, marca e
            atendimento são fictícios.
          </p>
          <a href="/#projetos">
            Voltar ao portfólio <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
