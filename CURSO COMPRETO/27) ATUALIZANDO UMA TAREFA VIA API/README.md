# ATUALIZANDO UMA TAREFA VIA API
Para atualizar uma tarefa via API utilizando o serviço que você construiu, siga estas etapas:

## No Serviço
1. **No seu serviço de acesso ao backend (por exemplo, `apiService.js`), adicione uma função para atualizar uma tarefa:**

   ```jsx
   export async function atualizarTarefa(id, tarefa) {
     try {
       const response = await api.put(`/tarefas/${id}`, tarefa);
       return response.data;
     } catch (error) {
       throw error;
     }
   }
   ```

   A função `atualizarTarefa` utiliza uma solicitação PUT para atualizar uma tarefa específica na API. Ela recebe o ID da tarefa que deve ser atualizada e os dados da tarefa atualizados. Em caso de sucesso, ela retorna os dados da tarefa atualizada; em caso de erro, ela lança a exceção para tratamento posterior.

## No Componente React
2. **Importe a função do serviço no seu componente:**

   ```jsx
   import React, { useState } from 'react';
   import { atualizarTarefa } from './apiService';
   ```

3. **Crie um estado para a tarefa que será atualizada no seu componente:**

   ```jsx
   const [tarefaAtualizada, setTarefaAtualizada] = useState({
     titulo: '',
     concluida: false,
   });
   ```

   Este estado armazenará as informações da tarefa que será atualizada.

4. **Crie uma função para lidar com a submissão do formulário de atualização de tarefa:**

   ```jsx
   const handleAtualizarTarefa = async () => {
     try {
       const tarefaAtualizada = await atualizarTarefa(tarefaId, tarefaAtualizada);
       // Lógica para lidar com a tarefa atualizada (por exemplo, atualizar a lista de tarefas)
     } catch (error) {
       console.error('Erro ao atualizar tarefa:', error);
     }
   };
   ```

   Esta função utiliza a função `atualizarTarefa` do serviço para enviar as informações atualizadas da tarefa à API. Em caso de sucesso, ela recebe a tarefa atualizada e pode implementar a lógica necessária para lidar com ela (por exemplo, atualizá-la na lista de tarefas). Em caso de erro, ela lida com a exceção e pode exibir mensagens de erro ou realizar outras ações apropriadas.

5. **Renderize um formulário para atualizar a tarefa:**

   ```jsx
   return (
     <div>
       <h1>Minhas Tarefas</h1>
       <form>
         <input
           type="text"
           placeholder="Novo título"
           value={tarefaAtualizada.titulo}
           onChange={(e) => setTarefaAtualizada({ ...tarefaAtualizada, titulo: e.target.value })}
         />
         <button type="button" onClick={handleAtualizarTarefa}>
           Atualizar Tarefa
         </button>
       </form>
       {/* Renderize a lista de tarefas */}
     </div>
   );
   ```

   Este código renderiza um formulário com um campo de entrada de texto para o novo título da tarefa e um botão para atualizar a tarefa. O evento `onClick` no botão chama a função `handleAtualizarTarefa` que envia as informações atualizadas da tarefa para a API.

Com essas etapas, você configurou a atualização de uma tarefa via API utilizando o serviço que você construiu. Lembre-se de que você pode adicionar lógica adicional para lidar com a tarefa atualizada (por exemplo, atualizar a lista de tarefas) e tratar erros de acordo com as necessidades específicas do seu aplicativo. Certifique-se de passar o ID correto da tarefa que está sendo atualizada, para que a API saiba qual tarefa atualizar.