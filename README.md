# Cypress Test Automation

Este repositório contém a automação de testes utilizando **Cypress**, cobrindo a interação entre três projetos distintos.

## 📌 Visão Geral

O projeto tem como objetivo garantir a qualidade e a integração entre os três sistemas, validando fluxos principais de interação entre eles.

## 🏗 Estrutura do Projeto

```
/cypress
  ├── fixtures       # Dados de teste
  ├── integration    # Testes de interface
  ├── support        # Comandos customizados e configurações globais
  ├── plugins        # Plugins adicionais
  ├── downloads      # Arquivos baixados nos testes
  ├── screenshots    # Capturas de tela automáticas (em caso de falha)
  ├── videos         # Gravações das execuções
  ├── cypress.env.json # Variáveis de ambiente (NÃO VERSIONAR)
  └── cypress.config.js # Configuração do Cypress
```

## 📦 Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Acesse a pasta do projeto e instale as dependências:
   ```sh
   cd seu-repositorio
   npm install
   ```

## 🚀 Executando os Testes

### Via Interface Gráfica:
```sh
npx cypress open
```

### Via Linha de Comando:
```sh
npx cypress run
```

## 🔑 Configuração de Variáveis de Ambiente
Para evitar expor credenciais, utilize **variáveis de ambiente**:

### Usando `cypress.env.json` (NÃO VERSIONAR!)
Crie um arquivo `cypress.env.json` com:
```json
{
  "login": "meu_usuario",
  "senha": "minha_senha_segura"
}
```

E acesse no teste com:
```js
cy.get('#username').type(Cypress.env('login'));
cy.get('#password').type(Cypress.env('senha'), { log: false });
```

### Usando Variáveis de Ambiente no Terminal (CI/CD)
#### Linux/macOS:
```sh
export CYPRESS_login=meu_usuario
export CYPRESS_senha=minha_senha_segura
npx cypress run
```
#### Windows CMD:
```cmd
set CYPRESS_login=meu_usuario
set CYPRESS_senha=minha_senha_segura
npx cypress run
```

## 📋 Testes e Interação Entre os Projetos
Os testes cobrem a comunicação entre os três projetos, incluindo:
- **Autenticação e sessão**
- **Integração entre APIs**
- **Fluxo de dados entre os sistemas**
- **Testes de regressão e interface**

## 📊 Relatórios de Testes
Os relatórios podem ser gerados usando o [Mochawesome](https://www.npmjs.com/package/mochawesome):
```sh
npx cypress run --reporter mochawesome
```

## 🛠 Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework de testes
- [Mocha](https://mochajs.org/) - Estrutura de testes
- [Chai](https://www.chaijs.com/) - Biblioteca de asserções
- [Mochawesome](https://www.npmjs.com/package/mochawesome) - Geração de relatórios

## 🤝 Contribuição
1. Crie um *fork* do repositório
2. Crie uma *branch* para sua feature (`git checkout -b feature-nova`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para o repositório (`git push origin feature-nova`)
5. Abra um *Pull Request*

## 📄 Licença
Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

