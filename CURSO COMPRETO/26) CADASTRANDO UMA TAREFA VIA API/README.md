# CADASTRANDO UMA TAREFA VIA API
Para cadastrar uma tarefa via API utilizando o serviço que você construiu nas aulas anteriores, siga estas etapas:

## No Serviço
1. **No seu serviço de acesso ao backend (por exemplo, `apiService.js`), adicione uma função para criar uma tarefa:**

   ```jsx
   export async function criarTarefa(tarefa) {
     try {
       const response = await api.post('/tarefas', tarefa);
       return response.data;
     } catch (error) {
       throw error;
     }
   }
   ```

   A função `criarTarefa` utiliza uma solicitação POST para adicionar uma nova tarefa à API. Em caso de sucesso, ela retorna os dados da nova tarefa; em caso de erro, ela lança a exceção para tratamento posterior.

## No Componente React
2. **Importe a função do serviço no seu componente:**

   ```jsx
   import React, { useState } from 'react';
   import { criarTarefa } from './apiService';
   ```

3. **Crie um estado para a nova tarefa no seu componente:**

   ```jsx
   const [novaTarefa, setNovaTarefa] = useState({
     titulo: '',
     concluida: false,
   });
   ```

   Este estado vai armazenar as informações da nova tarefa antes de serem enviadas à API.

4. **Crie uma função para lidar com a submissão do formulário de criação de tarefa:**

   ```jsx
   const handleCriarTarefa = async () => {
     try {
       const novaTarefaCriada = await criarTarefa(novaTarefa);
       // Lógica para lidar com a nova tarefa criada (por exemplo, atualizar a lista de tarefas)
     } catch (error) {
       console.error('Erro ao criar tarefa:', error);
     }
   };
   ```

   Esta função utiliza a função `criarTarefa` do serviço para enviar a nova tarefa à API. Em caso de sucesso, ela recebe a nova tarefa criada e pode implementar a lógica necessária para lidar com ela (por exemplo, adicioná-la à lista de tarefas). Em caso de erro, ela lida com a exceção e pode exibir mensagens de erro ou realizar outras ações apropriadas.

5. **Renderize um formulário para criar uma nova tarefa:**

   ```jsx
   return (
     <div>
       <h1>Minhas Tarefas</h1>
       <form>
         <input
           type="text"
           placeholder="Nova tarefa"
           value={novaTarefa.titulo}
           onChange={(e) => setNovaTarefa({ ...novaTarefa, titulo: e.target.value })}
         />
         <button type="button" onClick={handleCriarTarefa}>
           Adicionar Tarefa
         </button>
       </form>
       {/* Renderize a lista de tarefas */}
     </div>
   );
   ```

   Este código renderiza um formulário com um campo de entrada de texto para o título da nova tarefa e um botão para criar a tarefa. O evento `onClick` no botão chama a função `handleCriarTarefa` que envia a nova tarefa para a API.

Com estas etapas, você configurou a criação de uma nova tarefa através da sua API utilizando o serviço que você construiu. Lembre-se de que você pode adicionar lógica adicional para lidar com a nova tarefa criada (por exemplo, atualizar a lista de tarefas) e tratar erros de acordo com as necessidades específicas do seu aplicativo.