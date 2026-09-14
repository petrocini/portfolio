# Portfólio — Lucas Petrocini

Landing page para apresentar serviços de desenvolvimento full stack, projetos selecionados e canais de contato. Construída com React, TypeScript e Vite.

## Pré-requisitos

- Node.js LTS (22 ou superior)
- npm

## Desenvolvimento local

Instale as dependências:

```powershell
npm install
```

Crie o arquivo de ambiente e informe o número profissional do WhatsApp usando somente dígitos, incluindo `55` e DDD:

```powershell
Copy-Item .env.example .env.local
```

Exemplo de valor:

```dotenv
VITE_WHATSAPP_NUMBER=5511999999999
```

Inicie o servidor local:

```powershell
npm run dev
```

Sem `VITE_WHATSAPP_NUMBER`, o botão principal usa o e-mail como alternativa segura. O número nunca deve ser incluído em commits.

## Qualidade e build

```powershell
npm run format:check
npm run lint
npm run test
npm run build
```

O build estático é criado em `dist/`.

## Publicação na Vercel

1. Envie o repositório para o GitHub.
2. Na [Vercel](https://vercel.com/new), importe o repositório.
3. O framework será detectado como **Vite**. Mantenha `npm run build` como Build Command e `dist` como Output Directory.
4. Em **Settings → Environment Variables**, adicione `VITE_WHATSAPP_NUMBER` para os ambientes Production, Preview e Development.
5. Faça o deploy. Toda alteração enviada à branch principal terá um novo deploy de produção.

## Estrutura

- `src/data/portfolio.ts`: conteúdo e metadados dos cases.
- `src/components/`: seções e componentes reutilizáveis.
- `src/lib/contact.ts`: geração segura do link do WhatsApp.
- `src/styles/global.css`: tokens e design responsivo.

Os cards identificam com transparência cases públicos, privados e demonstrativos. Para atualizar um projeto, altere somente `src/data/portfolio.ts`.
