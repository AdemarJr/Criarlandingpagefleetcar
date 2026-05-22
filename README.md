# FleetCar — Landing Page

Landing page institucional da **FleetCar**, gerada a partir do design no [Figma](https://www.figma.com/design/mLPv1HxDPqpmP4fjcVquoF/Criar-landing-page-profissional).

Stack: **React 18**, **Vite 6**, **Tailwind CSS 4**, **React Router 7**.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

O build gera a pasta `dist/`.

## Deploy na Vercel

O projeto já está configurado para a Vercel (SPA com Vite).

### Opção 1 — Dashboard

1. Acesse [vercel.com/new](https://vercel.com/new) e importe este repositório.
2. A Vercel detecta **Vite** automaticamente:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
3. Clique em **Deploy**.

### Opção 2 — CLI

```bash
npm i -g vercel
vercel
```

Na primeira execução, siga o assistente (link ao projeto, confirme as configurações padrão).

### Rotas (SPA)

O arquivo `vercel.json` redireciona rotas do React Router para `index.html`, evitando erro 404 em recarregamentos ou links diretos.

## Estrutura principal

| Caminho | Descrição |
|---------|-----------|
| `src/app/pages/LandingPage.tsx` | Conteúdo da landing |
| `src/app/components/Layout.tsx` | Layout (header/footer) |
| `src/assets/` | Imagens exportadas do Figma |
| `vite.config.ts` | Vite + alias `@` + resolver `figma:asset/` |

## Nota sobre assets

Imagens usam o prefixo `figma:asset/` (plugin customizado no Vite). Os arquivos ficam em `src/assets/`. Se faltar alguma imagem no build, adicione o `.png` correspondente nessa pasta.
