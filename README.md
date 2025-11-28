# UniFECAF Flix – API de Filmes

API REST para listagem e consulta de filmes, desenvolvida em Node.js com Express, Prisma e MySQL,
seguindo arquitetura MVC, para o desafio da disciplina Programação Web para Back-End (UniFECAF).

## Tecnologias

- Node.js
- Express
- Prisma ORM
- MySQL
- Arquitetura MVC
- REST

## Estrutura de Pastas

```text
unifecaf-flix-project/
├─ prisma/
│  └─ schema.prisma
├─ src/
│  ├─ config/
│  │  └─ prismaClient.js
│  ├─ controllers/
│  │  └─ filmeController.js
│  ├─ models/
│  │  └─ filmeModel.js
│  ├─ routes/
│  │  └─ filmeRoutes.js
│  └─ app.js
├─ server.js
├─ package.json
└─ README.md
```

## Configuração

1. Instale as dependências:

```bash
npm install
```

2. Configure o arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/unifecaf_flix"
PORT=3000
```

3. Configure o banco de dados MySQL usando um script como este:

```sql
CREATE DATABASE IF NOT EXISTS unifecaf_flix;
USE unifecaf_flix;

CREATE TABLE IF NOT EXISTS tbl_filme (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    duracao INT NOT NULL,
    ano_lancamento INT NOT NULL
);
```

4. Gere o Prisma Client:

```bash
npx prisma generate
```

## Executar a API

```bash
npm run dev
```

Servidor padrão: `http://localhost:3000`

## Endpoints

### GET /v1/controle-filmes/filme
Lista todos os filmes.

### GET /v1/controle-filmes/filme/:id
Busca um filme pelo ID.

### GET /v1/controle-filmes/filtro/filme?nome=xxx
Filtra filmes pelo nome ou sinopse contendo o termo informado.
```

