import { SectionHeading } from './SectionHeading';

export function Services() {
  return (
    <section className="section services-section" id="servicos">
      <div className="shell">
        <SectionHeading number="02" title="Site, SEO e Google" />
        <div className="services-intro">
          <h3>Um site que explica seu serviço e ajuda as pessoas a encontrá-lo.</h3>
          <p>
            Além do visual, preparo a estrutura da página e as ferramentas para você
            entender como ela aparece nas buscas e como as pessoas chegam até você.
          </p>
        </div>
        <div className="services-grid">
          <article className="service-card glass-card">
            <span className="service-label">01 / ser encontrado</span>
            <h4>SEO, sem mistério</h4>
            <p>
              SEO ajuda buscadores a entender seu site. Textos úteis, títulos claros,
              estrutura organizada e uma boa experiência no celular tornam a página mais
              fácil de encontrar e usar.
            </p>
          </article>
          <article className="service-card glass-card">
            <span className="service-label">02 / acompanhar resultados</span>
            <h4>Ferramentas do Google</h4>
            <p>
              Configuro o Search Console para acompanhar sua presença na Busca e o
              Analytics para entender as visitas. Para negócios locais elegíveis, também
              ajudo com o Perfil da Empresa.
            </p>
          </article>
        </div>
        <a className="services-link" href="#contato">
          Vamos conversar sobre seu site <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
