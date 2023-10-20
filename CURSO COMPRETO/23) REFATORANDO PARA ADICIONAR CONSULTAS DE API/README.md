# REFATORANDO PARA ADICIONAR CONSULTAS DE API
Para refatorar seu aplicativo React para adicionar consultas de API usando o JSON Server como backend, siga estas etapas:

## Configurando o JSON Server:
1. **Instale o JSON Server:**
   Se você ainda não instalou o JSON Server, siga as etapas mencionadas anteriormente na resposta "Apresentando o JSON Server".

2. **Crie um arquivo `db.json`:**
   Crie um arquivo JSON que representará o banco de dados simulado do seu aplicativo. Por exemplo, crie um arquivo `db.json` com as informações das tarefas:

   ```json
   {
     "tarefas": [
       { "id": 1, "titulo": "Tarefa 1", "concluida": false },
       { "id": 2, "titulo": "Tarefa 2", "concluida": true },
       { "id": 3, "titulo": "Tarefa 3", "concluida": false }
     ]
   }
   ```

3. **Inicie o JSON Server:**
   Execute o JSON Server apontando para o arquivo `db.json`:

   ```
   json-server --watch db.json
   ```

## Atualizando seu Aplicativo React:
4. **Faça solicitações para a API no seu aplicativo React:**
   Agora que o JSON Server está em execução, você pode fazer solicitações para a API REST simulada a partir do seu aplicativo React. Use as funções JavaScript como `fetch` ou bibliotecas como Axios para fazer solicitações GET, POST, PUT e DELETE para os endpoints da API, conforme necessário.

   Aqui está um exemplo de como fazer uma solicitação GET para obter a lista de tarefas:

   ```jsx
   import React, { useEffect, useState } from 'react';

   function App() {
     const [tarefas, setTarefas] = useState([]);

     useEffect(() => {
       fetch('http://localhost:3000/tarefas')
         .then((response) => response.json())
         .then((data) => setTarefas(data));
     }, []);

     return (
       <div>
         <h1>Minhas Tarefas</h1>
         <ul>
           {tarefas.map((tarefa) => (
             <li key={tarefa.id}>{tarefa.titulo}</li>
           ))}
         </ul>
       </div>
     );
   }

   export default App;
   ```

   Você também pode criar funções para fazer solicitações POST, PUT e DELETE para criar, atualizar e excluir tarefas.

5. **Integre as solicitações da API com seus componentes:**
   À medida que você faz solicitações para a API, você pode integrar os dados recebidos com seus componentes React. Por exemplo, você pode renderizar a lista de tarefas com base nos dados recebidos da API.

6. **Atualize a API com novos dados:**
   Quando você criar ou atualizar tarefas em seu aplicativo, lembre-se de fazer as solicitações POST e PUT correspondentes para a API para manter os dados sincronizados com o JSON Server.

Com essas etapas, você configurou o JSON Server como backend simulado e atualizou seu aplicativo React para fazer consultas à API REST. Isso permitirá que seu aplicativo React tenha persistência de dados e possa interagir com o JSON Server para criar, ler, atualizar e excluir tarefas. Certifique-se de lidar com erros e adicionar validações, conforme necessário, à medida que trabalha com consultas de API.