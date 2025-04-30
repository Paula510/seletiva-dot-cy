# 🧪 Projeto Cypress – Seletiva

Este projeto contém testes automatizados desenvolvidos com Cypress, aplicados sobre a aplicação [Sauce Demo](https://www.saucedemo.com/), como parte de um processo seletivo.

---

## 📦 Requisitos

- **Node.js v20 ou superior** (recomenda-se v23 ou superior)
- **npm** ou **yarn** instalado

---

## 📥 Como clonar o projeto

```bash
git clone https://github.com/Paula510/seletiva-dot-cy.git
cd seletiva-dot-cy
```

---

## 📦 Instalação das dependências

```bash
npm install
```

ou

```bash
yarn install
```

---

## ▶️ Executar os testes

### Interface interativa (GUI)

```bash
npx cypress open
```

### Modo headless (linha de comando)

```bash
npx cypress run
```

---

## 📁 Estrutura do projeto

- `cypress/e2e/` – Testes organizados em arquivos `.cy.js`
- `cypress/fixtures/` – Arquivos JSON usados como mock de dados
- `cypress/support/commands.js` – Comandos customizados (ex: login)
- `cypress.config.js` – Configuração geral do Cypress

---

## 📝 Observações

Este projeto tem fins exclusivamente avaliativos para o processo seletivo.  
Caso precise de instruções extras ou melhorias, fique à vontade para sugerir!