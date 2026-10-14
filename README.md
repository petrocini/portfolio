# Portfólio — Lucas Petrocini

Portfólio pessoal para apresentar projetos, experiência e serviços de desenvolvimento web. A interface usa a direção visual do HTML de referência fornecido pelo autor, organizada em componentes React e estilos locais.

## Stack

React, TypeScript, Vite e CSS. Não depende de Tailwind via CDN, Font Awesome ou imagens de placeholder.

## Executar localmente

```bash
npm install
npm run dev
```

Copie `.env.example` para `.env.local` para usar o contato pelo WhatsApp durante o desenvolvimento. O número inicial é `16 99114-6820`. O build de produção lê `.env.production`. Para trocar o número, altere `VITE_WHATSAPP_NUMBER` e gere um novo build; variáveis `VITE_` são incorporadas aos arquivos publicados e não são segredos. Sem essa variável, o botão de orçamento abre o e-mail.

## Publicar na Cloudflare Workers

O site usa arquivos estáticos no Worker `portfolio`. Após autenticar com `npx wrangler login`, execute:

```bash
npm run deploy
```

Esse comando compila o site com o número de `.env.production` e publica os arquivos de `dist`. O Worker atual não tem build automático conectado ao GitHub; um push no repositório, por si só, não publica uma nova versão.

## Comandos

```bash
npm run lint
npm run test
npm run build
npm run format:check
```
