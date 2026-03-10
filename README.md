# Software Labs X - Next.js Website

Site institucional moderno da Software Labs X desenvolvido com Next.js 14, React 18 e TypeScript.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **CSS Modules** - Estilos escopados
- **Google Fonts** - Outfit & Space Grotesk

## 📁 Estrutura do Projeto

```
softwarelabsx/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout principal
│   │   ├── page.tsx             # Página inicial
│   │   │
│   │   ├── projetos/            # Página de portfólio
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── projetos.module.css
│   │   │
│   │   ├── sobre/               # Página sobre nós
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── sobre.module.css
│   │   │
│   │   ├── servicos/            # Página de serviços
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── servicos.module.css
│   │   │
│   │   ├── contato/             # Página de contato
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── contato.module.css
│   │   │
│   │   └── privacidade/         # Política de privacidade
│   │       ├── page.tsx
│   │       ├── layout.tsx
│   │       └── privacidade.module.css
│   │
│   ├── components/
│   │   ├── Navbar/              # Navegação
│   │   ├── Hero/                # Seção hero
│   │   ├── Services/            # Serviços
│   │   ├── About/               # Sobre nós
│   │   ├── Projects/            # Projetos
│   │   ├── Values/              # Valores
│   │   ├── CTA/                 # Call to action
│   │   ├── Contact/             # Formulário de contato
│   │   ├── Footer/              # Rodapé
│   │   └── index.ts             # Exportações
│   │
│   └── styles/
│       └── globals.css          # Estilos globais
│
├── public/
│   └── images/
│       ├── logo.png             # Logo da empresa
│       └── projects/            # Imagens dos projetos
│
├── next.config.js               # Configuração Next.js
├── tsconfig.json                # Configuração TypeScript
└── package.json                 # Dependências
```

## 📄 Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial com todas as seções |
| `/projetos` | Portfólio completo com filtros |
| `/sobre` | História, missão, valores e equipe |
| `/servicos` | Detalhes de cada serviço oferecido |
| `/contato` | Formulário completo e FAQ |
| `/privacidade` | Política de privacidade (LGPD) |

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 💻 Desenvolvimento

O servidor de desenvolvimento roda em `http://localhost:3000`

### Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm start` | Inicia servidor de produção |
| `npm run lint` | Executa linting |

## 🎨 Personalização

### Cores

Edite as variáveis CSS em `src/styles/globals.css`:

```css
:root {
  --primary: #2541B2;
  --primary-light: #3B5DD8;
  --primary-dark: #1A2F8C;
  --accent: #4D6FFF;
}
```

### Componentes

Cada componente tem sua própria pasta com:
- `ComponentName.tsx` - Lógica React
- `ComponentName.module.css` - Estilos
- `index.ts` - Exportação

### Imagens

Coloque as imagens em `public/images/`:
- `logo.png` - Logo da empresa
- `projects/` - Imagens dos projetos

## 📱 Responsividade

Breakpoints principais:
- **1200px** - Tablets grandes
- **1024px** - Tablets
- **768px** - Mobile

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Outros

O projeto pode ser exportado como site estático:

```bash
npm run build
# Os arquivos estarão em .next/
```

## 📝 Notas

- As imagens externas (Unsplash) estão configuradas em `next.config.js`
- O formulário de contato simula envio - conecte com seu backend
- Todos os componentes são Client Components ('use client')

## 📄 Licença

© 2025 Software Labs X. Todos os direitos reservados.
