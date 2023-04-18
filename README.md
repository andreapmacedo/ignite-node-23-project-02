

#### RF (Requisitos Funcionais)

- [x] O usuário pode criar uma nova transação;
- [x] O usuário pode ter um resumo da sua conta;
- [x] O usuário pode listar todas as transações que já foram realizadas;
- [x] O usuário pode visualizar uma transação única;

#### RN (Regras de Negócio)

- [x] A transação pode ser do tipo crédito ou débito;
- [x] Deve ser possível identificarmos o usuário entre as transações;
- [x] O usuário só pode visualizar transações o qual ele criou;


#### RNF (Requisitos Não Funcionais)

- [x] A aplicação deve ser desenvolvida em Node.js;



> Criando um migration com o knex

```bash	
npm run knex -- migrate:make create-documents
```

```bash	
 npm run knex -- migrate:latest
 ```

 > Instalando o vitest

```bash
npm i vitest -D
```

> Executando o vitest

```bash
npx vitest
```

Com script no package.json
```bash
npm run test
```
```bash
npm test
```

> Usando o supertest

```bash
npm i supertest -D
```

> Instalando o tsup -D (para rodar o server)

```bash
npm i tsup -D
```

> Executando o tsup

```bash
tsup src
```

Com script no package.json
```bash
npm run build

```

> Testar o server a partir dos arquivos em build

```bash
node build/server.js
```

> Instalando o driver do postgres

```bash
npm i pg
```
