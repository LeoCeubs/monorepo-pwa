PWA + API + Testes + Docker + CI/CD — Monorepo

Este projeto é um PWA completo, integrado com uma API Node.js, organizado em monorepo, containerizado com Docker, testado com Playwright, e utilizando CI/CD com GitHub Actions para build, testes e deploy automático no GitHub Pages.

Projeto desenvolvido para avaliação do módulo de Progressive Web Apps.

📁 Estrutura do Projeto monorepo-pwa/ ├── apps/ │ ├── web/ → PWA feito com Vite │ └── api/ → API Node.js com Express ├── docker-compose.yml └── .github/workflows/ci.yml

🚀 Tecnologias Utilizadas


📱 PWA com Service Worker + Manifest

🔌 Node.js + Express (API)

🐳 Docker e Docker Compose

🎭 Playwright (testes E2E)

🔄 GitHub Actions (CI/CD completo)

🌐 GitHub Pages (deploy automático)

🐳 Como Rodar com Docker docker compose up --build

Serviços rodando:

🌐 Web (PWA)

🔌 API

🧪 Testes E2E 



🔗 Links da Entrega (Requisitos do Trabalho) 📦 Repositório Monorepo

👉 https://github.com/alexandren18/monorepo-pwa

🌐 PWA publicado (GitHub Pages)

👉 https://LeoCeubs.github.io/monorepo-pwa

🔄 Última Execução do CI (build + testes + deploy)

👉 https://github.com/LeoCeubs/monorepo-pwa/actions/runs/19401371640

📁 Artefatos gerados pelo CI

✔ github-pages.zip — build final publicado

✔ playwright-report/ — relatório dos testes E2E

✔ Build final: apps/web/dist

