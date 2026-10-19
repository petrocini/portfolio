import { pdvRelease } from '../data/pdv';

const features = [
  {
    number: '01',
    title: 'Venda sem depender da conexão',
    description:
      'Pedidos e dados ficam no computador, com banco SQLite local para a operação principal continuar offline.',
  },
  {
    number: '02',
    title: 'Catálogo do seu jeito',
    description:
      'Organize produtos, categorias e adicionais. As imagens são otimizadas ao entrar no catálogo.',
  },
  {
    number: '03',
    title: 'Visão clara do movimento',
    description:
      'Acompanhe faturamento, ticket médio, itens mais vendidos e formas de pagamento no painel.',
  },
  {
    number: '04',
    title: 'Pedidos para cozinha e cliente',
    description:
      'Use a impressão térmica de 80 mm e acompanhe o fluxo de pedidos no balcão.',
  },
] as const;

function ProductPreview() {
  return (
    <div
      className="pdv-visual"
      aria-label="Representação ilustrativa da interface do PDV Fácil"
    >
      <div className="pdv-visual-titlebar">
        <span className="pdv-visual-mark">▦</span>
        <span>PDV Fácil</span>
        <span className="pdv-visual-controls" aria-hidden="true">
          — □ ×
        </span>
      </div>
      <div className="pdv-visual-app">
        <aside className="pdv-visual-sidebar">
          <b>
            PDV<span>Fácil</span>
          </b>
          <span className="pdv-visual-selected">▣ &nbsp; Visão geral</span>
          <span>▤ &nbsp; Frente de caixa</span>
          <span>◫ &nbsp; Pedidos</span>
          <span>▦ &nbsp; Catálogo</span>
          <span>▥ &nbsp; Eventos</span>
        </aside>
        <div className="pdv-visual-content">
          <div className="pdv-visual-topline">
            <div>
              <small>Resumo do dia</small>
              <strong>Visão geral</strong>
            </div>
            <span>Caixa local</span>
          </div>
          <div className="pdv-visual-metrics">
            <div>
              <small>Vendas do dia</small>
              <strong>R$ 2.480,00</strong>
              <span>↗ Movimento de hoje</span>
            </div>
            <div>
              <small>Pedidos</small>
              <strong>32</strong>
              <span>Atendidos no balcão</span>
            </div>
            <div>
              <small>Ticket médio</small>
              <strong>R$ 77,50</strong>
              <span>Por pedido</span>
            </div>
          </div>
          <div className="pdv-visual-panels">
            <div className="pdv-visual-chart">
              <b>Movimento de vendas</b>
              <div className="pdv-visual-bars" aria-hidden="true">
                {[35, 62, 50, 76, 58, 91, 72, 100, 83, 96, 69, 88].map(
                  (height, index) => (
                    <i key={index} style={{ height: `${height}%` }} />
                  ),
                )}
              </div>
            </div>
            <div className="pdv-visual-summary">
              <b>Mais vendidos</b>
              <span>
                <i /> Produto 01 <em>24</em>
              </span>
              <span>
                <i /> Produto 02 <em>18</em>
              </span>
              <span>
                <i /> Produto 03 <em>12</em>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PdvLanding() {
  return (
    <div className="pdv-page">
      <header className="pdv-header">
        <div className="pdv-container pdv-header-inner">
          <a
            className="pdv-brand"
            href="/#projetos"
            aria-label="PDV Fácil, voltar ao portfólio de Lucas Petrocini"
          >
            <span className="pdv-brand-icon">▦</span> PDV Fácil
          </a>
          <nav aria-label="Navegação da página PDV Fácil">
            <a href="#recursos">Recursos</a>
            <a href="#download">Download</a>
            <a href={pdvRelease.sourceUrl} target="_blank" rel="noopener noreferrer">
              Código no GitHub ↗
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="pdv-hero pdv-container">
          <div className="pdv-hero-copy">
            <p className="pdv-eyebrow">Frente de caixa para Windows</p>
            <h1>Seu balcão segue em frente. Mesmo sem internet.</h1>
            <p className="pdv-lead">
              Pedidos, catálogo, relatórios e impressão térmica em um aplicativo desktop
              feito para a rotina de vendas.
            </p>
            <div className="pdv-actions">
              <a className="pdv-cta pdv-cta-primary" href={pdvRelease.downloadUrl}>
                Baixar para Windows <span aria-hidden="true">↓</span>
              </a>
              <a
                className="pdv-cta pdv-cta-secondary"
                href={pdvRelease.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver código no GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="pdv-release-note">
              Versão {pdvRelease.version} · Instalador Windows · aprox.{' '}
              {pdvRelease.size}
            </p>
          </div>
          <div className="pdv-hero-art">
            <ProductPreview />
            <p>Prévia ilustrativa · dados de exemplo</p>
          </div>
        </section>

        <section className="pdv-feature-section" id="recursos">
          <div className="pdv-container">
            <div className="pdv-section-intro">
              <p className="pdv-eyebrow">Do pedido ao fechamento</p>
              <h2>O que importa no dia a dia do caixa.</h2>
              <p>
                Uma operação local, com as ferramentas necessárias para vender e
                acompanhar o negócio.
              </p>
            </div>
            <div className="pdv-feature-grid">
              {features.map((feature) => (
                <article className="pdv-feature" key={feature.number}>
                  <span>{feature.number}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pdv-details pdv-container">
          <div>
            <p className="pdv-eyebrow">Projeto aberto</p>
            <h2>Você pode usar, estudar e evoluir o projeto.</h2>
          </div>
          <div>
            <p>
              O PDV Fácil foi desenvolvido com Electron, React e SQLite. O código está
              disponível publicamente no GitHub, junto das instruções para executar e
              compilar o aplicativo.
            </p>
            <a href={pdvRelease.sourceUrl} target="_blank" rel="noopener noreferrer">
              Explorar o repositório <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="pdv-download-section" id="download">
          <div className="pdv-container pdv-download-panel">
            <div>
              <p className="pdv-eyebrow">Pronto para testar?</p>
              <h2>Instale o PDV Fácil no Windows.</h2>
              <p>
                O instalador é publicado no GitHub Releases. A versão disponível para
                download é a {pdvRelease.version}.
              </p>
            </div>
            <div className="pdv-download-actions">
              <a className="pdv-cta pdv-cta-primary" href={pdvRelease.downloadUrl}>
                Baixar instalador <span aria-hidden="true">↓</span>
              </a>
              <a href={pdvRelease.releaseUrl} target="_blank" rel="noopener noreferrer">
                Ver todas as versões no GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="pdv-footer">
        <div className="pdv-container">
          <span>PDV Fácil · Desenvolvido por Lucas Petrocini</span>
          <a href="/#projetos">Voltar ao portfólio ↗</a>
        </div>
      </footer>
    </div>
  );
}
