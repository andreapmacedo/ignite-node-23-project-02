

# RF (Requisitos Funcionais)

- [ ] O usuário pode criar uma nova transação;
- [ ] O usuário pode ter um resumo da sua conta;
- [ ] O usuário pode listar todas as transações que já foram realizadas;
- [ ] O usuário pode visualizar uma transação única;

# RN (Regras de Negócio)

- [ ] A transação pode ser do tipo crédito ou débito;
- [ ] Deve ser possível identificarmos o usuário entre as transações;
- [ ] O usuário só pode visualizar transações o qual ele criou;


# RNF (Requisitos Não Funcionais)

- [ ] A aplicação deve ser desenvolvida em Node.js;



> Criando um migration com o knex

```bash	
npm run knex -- migrate:make create-documents
```

```bash	
 npm run knex -- migrate:latest
 ```