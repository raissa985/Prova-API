# Prova-API - 05/06/2025 - Raíssa Carvalho - RA 82612

*Instruções para rodar o projeto:*

1- Instale as seguintes dependências:

npm init -y
npm i express @types/express
npm i cors @types/cors
npm i typescript
npm i ts-node
npm i @types/typescript
npx tsc -init
npm i mysql2
npm i nodemon -D
npm i dotenv
npm install bcrypt
npm install --save-dev @types/bcrypt
npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken

2 - Entre no arquivo ts.config.json e altere o "// "noImplicitAny": True," para "noImplicitAny": false,"

3- Crie um banco de dados chamado "database_teste", contendo uma tabela chamada "teste" e colunas nome, email, senha e papel do tipo VARCHAR (100).

4- Rode npm run dev no terminal. Deverá aparecer "Servidor rodando na porta:  3000".

*Descrição das escolhas técnicas feitas:*
O projeto backend foi desenvolvido com TypeScript e Express.js, priorizando segurança, organização e escalabilidade. A autenticação é feita com JWT, e as senhas são protegidas com bcrypt, garantindo criptografia no armazenamento e comparação segura durante o login. A estrutura do código é modular, com separação entre controllers, models, middlewares e utilitários.

O banco de dados utilizado é o MySQL, acessado via mysql2/promise, e a conexão é configurada com variáveis de ambiente para proteger dados sensíveis. As rotas protegidas exigem token JWT, validado por middleware. O projeto foi estruturado para facilitar testes com Thunder Client, adotando boas práticas como uso de SQL seguro e organização clara do código. Essas escolhas oferecem uma base sólida para manutenção e futuras expansões.

*Exemplos de requisições:*

GET: Utilizando a URL http://localhost:3000/, faça uma requisição do tipo GET no Thunder Client. O resultado será um "status-code 200 OK" e um JSON com a seguinte informação:

  {
    "id": 2,
    "nome": "raissa",
    "email": "raissa@gmail.com",
    "senha": "123456",
    "papel": "admin"
  },


POST: Utilizando a URL http://localhost:3000/user, faça uma requisição do tipo POST no Thunder Client. O resultado será um status-code "201 Created", informando que seu cadastro foi um sucesso. Para verificar se a nova informação foi inserida corretamente, refaça um GET (conforme informado acima) e você verá um JSON que além das informações que já estavam no banco, também retorná o cadastro que você acaba de inserir, com a senha criptografada.

