<h1 align="center">Boas-vindas ao repositório do UOL Customers! 👨🏼‍💼</h1>

<h2 align="center">
  <a href="https://uol-customers.up.railway.app/" target="_blank">
    Link da aplicação!
  </a>
</h2>

## O que foi desenvolvido?

O <strong>UOL Customers</strong> é um desafio técnico da empresa <strong>UOL</strong>, e o objetivo foi criar uma aplicação full stack para o gerenciamento de clientes. O backend foi desenvolvido em node.js, typescript, express.js e prisma como ORM. O banco de dados na etapa de desenvolvimento foi o sqlite, devido sua facilidade de implementação, e na etapa de produção foi feita a migração para o postgreSQL. A estrutura de pastas foi seguida pelo modelo MSC (Model, Service e Controller), e a validação dos dados foi realizada com a bibilioteca zod, por possuir uma excelente integração com o typescript. Desenvolvi também um middleware que captura todas as exceções que ocorrem no fluxo da aplicação, com o auxilio da biblioteca express async errors. As rotas oferecem a possibilidade de criação, atualização e listagem de todos os clientes, há também um rota de autenticação de login por parte do usuário.

O frontend foi desenvolvido com o next.js versão 14 usando o router app. Para a estilização fiz uso da biblioteca styled components. A aplicação conta com uma página de login, onde é possivel entrar com um email e senha cadastrado no banco de dados, entrar com sua conta do github ou entrar como visitante (no modo visitante é possível desfrutar de todas as funcionalidades dos demais modos de login). Existe também uma página home onde é possivel observar todos os clientes cadastrados no banco de dados e também uma página de criação de atualização dos clientes, que só é possível após passar por uma validação de todos os campos do formulário.

Os testes unitários foram escritos com jest no backend, e com jest e react testing library no frontend. Todos os testes estão na pasta "\__tests__\"

## Linguagens e ferramentas

- Node.js
- Express.js
- Typescript
- Sqlite
- Prisma
- PostgreSQL
- Next.js
- Styled Components
- Zod
- Jest
- React Testing Library
- Eslint

## Instalação e execução

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/test-fullstack.git
```

### 2 - Entre no repositório
```
cd test-fullstack
```

### 3 - Instale as dependências:
#### ➜ Entre na pasta backend e instale as dependências:
```
cd backend/
```
Caso utilize o npm
```
npm install
```
Caso utilize o yarn
```
yarn install
```
#### ➜ Entre na pasta frontend e instale as dependências:
```
cd frontend/
```
Caso utilize o npm
```
npm install
```
Caso utilize o yarn
```
yarn install
```

### 4 - Inicie o projeto:
#### ➜ Dentro da pasta /backend

Caso utilize o npm
```
npm run dev
```
Caso utilize o yarn
```
yarn run dev
```

#### ➜ Dentro da pasta /frontend

Caso utilize o npm
```
npm run dev
```
Caso utilize o yarn
```
yarn run dev
```

<strong>O next.js irá executar a aplicação na porta 3000. Para o bom funcionamento da aplicação é importante deixar a porta 3000 reservada para o uso do Next.js</strong>
<br/>
➜ http://localhost:3000/
<br/>
<br/>
<strong>O node.js irá executar a aplicação na porta 3001.</strong>
<br/>
➜ http://localhost:3001/

## Execução dos testes
#### ➜ Dentro da pasta /backend
```
npm run test
```
#### ➜ Dentro da pasta /frontend
```
npm run test
```

## Variáveis de ambiente

#### ➜ O backend necessita das variáveis para conexão com o banco de dados postgreSQL e uma porta para rodar a aplicação (.env).
```javascript
PORT=3001
DATABASE_URL="postgres://default:a2OgzyG1jWSL@ep-sparkling-forest-a42ymh7g.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
```

#### ➜ O frontend necessita das variáveis para autenticação com o github e o endereço da API (.env.local).
```javascript
NEXT_PUBLIC_API_BASE_URL="https://uol-customers-api.up.railway.app"
GITHUB_ID=1a9f20399365b9e3afb8
GITHUB_SECRET=f0a79d5eba87040c556428bf530fe616ac6d5770
NEXTAUTH_SECRET=1YKefTL6PJzen6abzJGk39U8KpJocbzZ2fPE3zpnEms=
```

##

<div align="center">
  🐺
</div>