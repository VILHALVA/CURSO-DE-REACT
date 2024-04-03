# TUTORIAL
O JSON Server é uma ferramenta que permite simular uma API RESTful completa com um único arquivo JSON. Isso é extremamente útil durante o desenvolvimento de aplicativos front-end, pois permite que você trabalhe com dados de forma rápida e fácil sem a necessidade de configurar um servidor real.

Vou fornecer um exemplo básico de como você pode usar o JSON Server para criar uma API REST simulada:

1. **Instalação:**
   Primeiro, você precisa instalar o JSON Server globalmente usando npm ou yarn. Você pode fazer isso executando o seguinte comando no terminal:

   ```
   npm install -g json-server
   ```

   ou

   ```
   yarn global add json-server
   ```

2. **Criando um arquivo JSON:**
   Em seguida, crie um arquivo JSON que representará sua base de dados simulada. Por exemplo, você pode criar um arquivo chamado `db.json` com o seguinte conteúdo:

   ```json
   {
     "posts": [
       { "id": 1, "title": "Hello World" },
       { "id": 2, "title": "Introduction to JSON Server" }
     ]
   }
   ```

3. **Iniciando o servidor:**
   No mesmo diretório do arquivo `db.json`, execute o seguinte comando no terminal:

   ```
   json-server --watch db.json --port 3001
   ```

   Isso iniciará o servidor JSON com base no arquivo `db.json` na porta 3001.

4. **Acessando os dados:**
   Agora você pode acessar os dados da sua "API" em `http://localhost:3001/posts`. Você pode usar métodos HTTP como GET, POST, PUT, DELETE para interagir com os dados, assim como faria com uma API REST real.

   Por exemplo, você pode usar o fetch API ou axios para fazer requisições HTTP para a sua API a partir do seu aplicativo React.

