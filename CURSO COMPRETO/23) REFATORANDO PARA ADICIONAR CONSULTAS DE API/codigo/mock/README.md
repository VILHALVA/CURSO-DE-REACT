# TUTORIAL
Se você deseja refatorar seu projeto para adicionar consultas de API ao JSON Server, você precisa seguir alguns passos:

1. **Instalação do JSON Server:**
   Primeiro, você precisa instalar o JSON Server globalmente ou localmente em seu projeto. Você pode usar npm ou yarn para isso. Se você ainda não instalou globalmente, pode fazê-lo usando o seguinte comando:

   ```
   npm install -g json-server
   ```

   ou

   ```
   yarn global add json-server
   ```

2. **Criando um arquivo JSON para a API:**
   Você precisa criar um arquivo JSON que servirá como sua base de dados simulada. Por exemplo, crie um arquivo chamado `db.json` e adicione os dados que você gostaria de simular.

3. **Iniciando o servidor JSON:**
   No mesmo diretório onde o seu arquivo `db.json` está localizado, você pode iniciar o JSON Server usando o seguinte comando:

   ```
   json-server --watch db.json --port 3001
   ```

   Isso iniciará o servidor JSON na porta 3001.

4. **Consultando a API no seu aplicativo React:**
   Agora, você pode fazer consultas para sua API simulada no seu aplicativo React usando bibliotecas como `fetch`, `axios` ou `axios`.

   Por exemplo, você pode usar o `fetch` API da seguinte maneira:

   ```javascript
   fetch('http://localhost:3001/posts')
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error('Error fetching data:', error));
   ```

   Ou usando axios:

   ```javascript
   import axios from 'axios';

   axios.get('http://localhost:3001/posts')
     .then(response => console.log(response.data))
     .catch(error => console.error('Error fetching data:', error));
   ```

   Isso retornará os dados da sua API simulada para serem usados ​​no seu aplicativo React.

Esses são os passos básicos para refatorar seu projeto e adicionar consultas de API ao JSON Server. Certifique-se de que o JSON Server esteja sendo executado enquanto você desenvolve e teste seu aplicativo React.