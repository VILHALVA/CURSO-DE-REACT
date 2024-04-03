# APRESENTANDO O JSON SERVER
O JSON Server é uma ferramenta útil para criar rapidamente uma API REST simulada com base em um arquivo JSON. Isso pode ser útil durante o desenvolvimento de aplicativos, especialmente quando você deseja prototipar uma API ou quando está trabalhando em um projeto de front-end que requer acesso a dados de um back-end que ainda não foi desenvolvido. O JSON Server permite que você defina um conjunto de endpoints REST personalizados, gerados automaticamente a partir de um arquivo JSON, e execute uma API simulada que responde a solicitações HTTP. Aqui estão as etapas para começar com o JSON Server:

1. **Instalação do JSON Server:**

   Para começar, você precisará instalar o JSON Server globalmente (certifique-se de que você tenha o Node.js instalado):

   ```
   npm install -g json-server
   ```

2. **Crie um arquivo JSON:**

   Crie um arquivo JSON que conterá seus dados simulados. Por exemplo, você pode criar um arquivo chamado `db.json` com os dados de exemplo:

   ```json
   {
     "pessoas": [
       { "id": 1, "nome": "Alice" },
       { "id": 2, "nome": "Bob" },
       { "id": 3, "nome": "Charlie" }
     ]
   }
   ```

3. **Inicie o JSON Server:**

   No terminal, navegue até a pasta onde está seu arquivo `db.json` e execute o seguinte comando para iniciar o JSON Server:

   ```
   json-server --watch db.json
   ```

   O JSON Server estará disponível em `http://localhost:3000` por padrão.

4. **Acesse os endpoints REST simulados:**

   O JSON Server gera automaticamente endpoints REST com base nas chaves do seu arquivo JSON. Por exemplo, o arquivo JSON acima resultará nos seguintes endpoints:

   - `GET http://localhost:3000/pessoas`: Retorna a lista de pessoas.
   - `GET http://localhost:3000/pessoas/1`: Retorna a pessoa com ID 1.
   - `POST http://localhost:3000/pessoas`: Adiciona uma nova pessoa.
   - `PUT http://localhost:3000/pessoas/1`: Atualiza a pessoa com ID 1.
   - `DELETE http://localhost:3000/pessoas/1`: Remove a pessoa com ID 1.

   Você pode fazer solicitações HTTP para esses endpoints para interagir com os dados simulados.

O JSON Server é uma ferramenta útil para criar rapidamente uma API simulada para fins de desenvolvimento. No entanto, lembre-se de que ele não é adequado para ambientes de produção, pois não oferece persistência de dados real. É uma solução temporária para facilitar o desenvolvimento e a prototipagem de aplicativos.