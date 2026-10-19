# Portfólio — Lucas Petrocini

Portfólio pessoal para apresentar projetos, experiência e serviços de desenvolvimento web. A interface usa a direção visual do HTML de referência fornecido pelo autor, organizada em componentes React e estilos locais.

O cartão do Caiado FIFA usa uma captura otimizada em `public/images/caiado-fifa-card.webp` (original em `public/images/caiado-fifa-site.png`). O PDV Fácil tem uma página própria em `/pdv-facil/`, com links para o código e para o instalador Windows publicado no GitHub Releases. Ao lançar uma nova versão do PDV, atualize os dados em `src/data/pdv.ts`.

Clara Nutrição é um projeto conceito de landing page em `/clara-nutricao/`. Marca, profissional e atendimento são fictícios, e a página informa isso ao visitante. A foto foi gerada para esta demonstração e está em `public/images/clara-nutricao-portrait.webp`. O contato comercial direciona para o WhatsApp configurado no portfólio; sem número configurado, usa e-mail. A página usa `noindex` para não apresentar a marca fictícia como um serviço real nos mecanismos de busca.

As fontes são servidas localmente em `public/fonts/`; as licenças OFL estão em `licenses/fonts/`. `robots.txt` e o sitemap apontam para a publicação principal na Cloudflare.

## Stack

React, TypeScript, Vite e CSS. Não depende de Tailwind via CDN, Font Awesome ou imagens de placeholder.

## Executar localmente

```bash
npm install
npm run dev
```

Copie `.env.example` para `.env.local` para usar o contato pelo WhatsApp durante o desenvolvimento. O número inicial é `16 99114-6820`. O build de produção lê `.env.production`. Para trocar o número, altere `VITE_WHATSAPP_NUMBER` e gere um novo build; variáveis `VITE_` são incorporadas aos arquivos publicados e não são segredos. Sem essa variável, o botão de orçamento abre o e-mail.

## Publicar na Cloudflare Workers

O site usa arquivos estáticos no Worker `portfolio`. O projeto está conectado ao GitHub no Cloudflare Workers Builds; novos commits em `main` iniciam o build e o deploy automaticamente.

Para publicar manualmente com o Wrangler, após autenticar, execute:

```bash
npm run deploy
```

Esse comando compila o site com o número de `.env.production` e publica os arquivos de `dist`.

## Comandos

```bash
npm run lint
npm run test
npm run build
npm run format:check
```
