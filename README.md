# 🚀 MENTORA

## Plataforma Nacional de Diagnóstico Educacional Inteligente com IA

**Mentora** é uma plataforma educacional baseada em Inteligência Artificial cujo núcleo não é conteúdo, mas **diagnóstico educacional contínuo**, preditivo e acionável.

Ela funciona como o **"sistema nervoso da educação"**, identificando lacunas de aprendizado, prevendo desempenho futuro e prescrevendo trilhas personalizadas — para alunos, pais, escolas e governos.

> 🔑 *Se o ENEM mede o passado, a Mentora prevê o futuro.*

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Características Principais](#características-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## 🎯 Sobre o Projeto

A **Mentora** é um **Sistema Inteligente de Diagnóstico Educacional (SIDE)** que resolve problemas estruturais do sistema educacional brasileiro:

- ✅ Avaliações contínuas (não apenas anuais)
- ✅ Diagnóstico por habilidade da BNCC em tempo real
- ✅ Ensino personalizado para cada aluno
- ✅ Visibilidade completa para pais e educadores
- ✅ Redução de custos através de eficiência

### Problema que Resolve

- ❌ Apenas **9% dos alunos do ensino médio** aprendem matemática no nível adequado (SAEB)
- ❌ **Mais de 70%** das escolas não usam dados para personalização
- ❌ O ENEM avalia **1x por ano** — tarde demais para correção

**Conclusão:** O problema não é falta de aula. É falta de diagnóstico contínuo.

---

## ✨ Características Principais

### Para Alunos
- 📊 Diagnóstico adaptativo inicial
- 🎯 Score por habilidade BNCC
- 🛤️ Trilhas personalizadas de aprendizado
- 📈 Microavaliações semanais
- 🔄 Reavaliação automática

### Para Pais
- 📱 Dashboard com evolução por habilidade
- ⚠️ Alertas de risco de reprovação
- 🔮 Previsão de desempenho futuro
- 💡 Recomendações automáticas

### Para Escolas e Governos
- 📊 Analytics educacionais em tempo real
- 🏫 Visão consolidada de múltiplos alunos
- 📈 Relatórios de impacto e performance
- 🎓 Integração com sistemas existentes

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca UI moderna
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápida
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes UI acessíveis
- **tRPC** - API type-safe
- **Wouter** - Roteamento leve
- **Framer Motion** - Animações
- **React Query** - Gerenciamento de estado servidor

### Backend
- **Node.js + Express** - Servidor
- **tRPC** - API type-safe end-to-end
- **Drizzle ORM** - ORM moderno
- **MySQL** - Banco de dados
- **JWT (JOSE)** - Autenticação
- **AWS S3** - Armazenamento de arquivos

### IA & Dados
- **LLMs** - Modelos de linguagem para diagnósticos
- **Item Response Theory (IRT)** - Avaliação adaptativa
- **Machine Learning** - Previsão de desempenho

### Ferramentas de Desenvolvimento
- **Vitest** - Testes
- **Prettier** - Formatação de código
- **ESBuild** - Bundling
- **Drizzle Kit** - Migrações de banco

---

## 📁 Estrutura do Projeto

```
mentora-plataforma/
├── client/                 # Frontend React
│   ├── public/            # Assets estáticos
│   └── src/
│       ├── components/   # Componentes React
│       │   ├── ui/       # Componentes shadcn/ui
│       │   └── ...       # Componentes customizados
│       ├── pages/        # Páginas da aplicação
│       ├── hooks/        # React Hooks customizados
│       ├── contexts/     # Contextos React
│       ├── lib/          # Utilitários e configurações
│       └── styles/       # Estilos CSS
│
├── server/               # Backend Node.js
│   ├── _core/           # Core do servidor
│   │   ├── context.ts   # Contexto tRPC
│   │   ├── trpc.ts      # Configuração tRPC
│   │   ├── db.ts        # Conexão com banco
│   │   ├── llm.ts       # Integração com IA
│   │   └── ...          # Outros módulos core
│   ├── routers.ts       # Rotas tRPC
│   └── storage.ts       # Gerenciamento de arquivos
│
├── shared/               # Código compartilhado
│   ├── _core/           # Core compartilhado
│   └── types.ts         # Tipos TypeScript compartilhados
│
├── drizzle/             # Schema e migrações do banco
│   ├── schema.ts        # Schema do banco
│   ├── relations.ts     # Relações entre tabelas
│   └── migrations/      # Migrações SQL
│
├── docs/                # Documentação
│   ├── 🎓 BRIEFING ESTRATÉGICO FINAL...
│   └── 🚨 REGRAS INVIOLÁVEI
│
├── patches/             # Patches de dependências
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração TypeScript
├── vite.config.ts       # Configuração Vite
└── README.md           # Este arquivo
```

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** >= 18.x
- **pnpm** >= 10.x (gerenciador de pacotes)
- **MySQL** >= 8.0 (banco de dados)
- **Git** (controle de versão)

### Instalando o pnpm

Se você ainda não tem o pnpm instalado:

```bash
npm install -g pnpm
```

---

## 🚀 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/AbnadabyBonaparte/Mentora.git
cd Mentora
```

2. **Instale as dependências**

```bash
pnpm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Banco de Dados
DATABASE_URL="mysql://usuario:senha@localhost:3306/mentora"

# Autenticação
JWT_SECRET="seu-secret-jwt-aqui"

# AWS S3 (opcional)
AWS_ACCESS_KEY_ID="sua-chave"
AWS_SECRET_ACCESS_KEY="seu-secret"
AWS_REGION="us-east-1"
AWS_BUCKET_NAME="mentora-bucket"

# Ambiente
NODE_ENV="development"
```

4. **Configure o banco de dados**

```bash
# Execute as migrações
pnpm db:push
```

---

## 💻 Como Usar

### Modo Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

O servidor estará disponível em `http://localhost:3000` (ou a porta configurada).

### Modo Produção

1. **Build do projeto**

```bash
pnpm build
```

2. **Inicie o servidor**

```bash
pnpm start
```

---

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `pnpm dev` | Inicia o servidor de desenvolvimento com hot-reload |
| `pnpm build` | Compila o projeto para produção |
| `pnpm start` | Inicia o servidor em modo produção |
| `pnpm check` | Verifica erros de TypeScript sem compilar |
| `pnpm format` | Formata o código com Prettier |
| `pnpm test` | Executa os testes |
| `pnpm db:push` | Gera e aplica migrações do banco de dados |

---

## 🎨 Design System

O projeto utiliza um design system baseado em:

- **Paleta de Cores:**
  - Azul Cobalto (#2962FF) - Primária
  - Verde Neon Soft (#00E676) - Secundária
  - Roxo Orquídea (#9C27B0) - Destaque/Inovação
  - Cinza Quântico (#ECEFF1) - Fundo/Neutro
  - Coral Digital (#FF7043) - Acento/Interações

- **Tipografia:**
  - **Manrope Bold** - Títulos (Display)
  - **Inter Regular** - Texto corrido
  - **Fredoka One** - Gamificação

- **Componentes:**
  - Todos os componentes UI são baseados em **shadcn/ui**
  - Suporte a temas (claro/escuro)
  - Totalmente responsivo (mobile-first)

---

## 🧪 Testes

Execute os testes com:

```bash
pnpm test
```

Para modo watch (desenvolvimento):

```bash
pnpm test --watch
```

---

## 📚 Documentação Adicional

- [📖 Briefing Estratégico](./docs/🎓%20BRIEFING%20ESTRATÉGICO%20FINAL%20–%20PLATAFORMA%20EDUCACIONAL%20COM%20IA) - Visão completa do projeto
- [🚨 Regras Invioláveis](./docs/🚨%20REGRAS%20INVIOLÁVEI) - Diretrizes de desenvolvimento

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Regras de Desenvolvimento

⚠️ **IMPORTANTE:** Leia as [Regras Invioláveis](./docs/🚨%20REGRAS%20INVIOLÁVEI) antes de contribuir.

Principais diretrizes:
- ✅ Tudo deve ser 100% real (sem mock data)
- ✅ Zero placeholders ou "em construção"
- ✅ Banco de dados primeiro
- ✅ Tratamento obrigatório dos 4 estados (loading, error, empty, success)
- ✅ Segurança e LGPD (dados de menores)
- ✅ Nunca cores hardcoded (usar CSS variables)
- ✅ Componentes shadcn/ui obrigatórios
- ✅ Build e typecheck devem passar

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autores

- **AbnadabyBonaparte** - *Desenvolvimento inicial* - [GitHub](https://github.com/AbnadabyBonaparte)

---

## 🙏 Agradecimentos

- Comunidade open source
- Todos os contribuidores do projeto
- Educadores que validaram a ideia

---

## 📞 Contato

Para dúvidas, sugestões ou suporte, abra uma [Issue](https://github.com/AbnadabyBonaparte/Mentora/issues) no GitHub.

---

<div align="center">

**Mentora** - *Transformando educação através de diagnóstico inteligente*

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>

