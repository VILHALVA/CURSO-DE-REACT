# APAGANDO UMA TAREFA VIA API
Para apagar uma tarefa via API e atualizar o estado no frontend quando a resposta do backend for bem-sucedida, siga estas etapas:

## No Serviço
1. **No seu serviço de acesso ao backend (por exemplo, `apiService.js`), adicione uma função para excluir uma tarefa:**

   ```jsx
   export async function apagarTarefa(id) {
     try {
       await api.delete(`/tarefas/${id}`);
     } catch (error) {
       throw error;
     }
   }
   ```

   A função `apagarTarefa` utiliza uma solicitação DELETE para remover uma tarefa específica na API. Ela recebe o ID da tarefa que deve ser excluída. Em caso de erro, ela lança a exceção para tratamento posterior.

## No Componente React
2. **Importe a função do serviço no seu componente:**

   ```jsx
   import React, { useState, useEffect } from 'react';
   import { getTarefas, apagarTarefa } from './apiService';
   ```

3. **Crie um estado para armazenar a lista de tarefas no seu componente:**

   ```jsx
   const [tarefas, setTarefas] = useState([]);
   ```

4. **Crie uma função para carregar as tarefas a partir da API:**

   ```jsx
   const carregarTarefas = async () => {
     try {
       const data = await getTarefas();
       setTarefas(data);
     } catch (error) {
       console.error('Erro ao carregar tarefas:', error);
     }
   };
   ```

   Essa função utiliza a função `getTarefas` do serviço para buscar a lista de tarefas da API e atualiza o estado `tarefas`.

5. **Chame a função de carregar tarefas usando o `useEffect` para buscar as tarefas na montagem do componente:**

   ```jsx
   useEffect(() => {
     carregarTarefas();
   }, []);
   ```

   Com esse `useEffect`, as tarefas serão carregadas automaticamente quando o componente for montado.

6. **Crie uma função para apagar uma tarefa:**

   ```jsx
   const handleApagarTarefa = async (id) => {
     try {
       await apagarTarefa(id);
       carregarTarefas(); // Recarrega a lista de tarefas após a exclusão bem-sucedida
     } catch (error) {
       console.error('Erro ao apagar tarefa:', error);
     }
   };
   ```

   Esta função utiliza a função `apagarTarefa` do serviço para excluir a tarefa com o ID fornecido. Em caso de sucesso, ela recarrega a lista de tarefas chamando a função `carregarTarefas`. Em caso de erro, ela lida com a exceção.

7. **Renderize a lista de tarefas e adicione um botão para apagar cada tarefa:**

   ```jsx
   return (
     <div>
       <h1>Minhas Tarefas</h1>
       <ul>
         {tarefas.map((tarefa) => (
           <li key={tarefa.id}>
             {tarefa.titulo}{' '}
             <button onClick={() => handleApagarTarefa(tarefa.id)}>Apagar</button>
           </li>
         ))}
       </ul>
     </div>
   );
   ```

   Neste exemplo, para cada tarefa, é renderizado um botão "Apagar" que chama a função `handleApagarTarefa` ao ser clicado.

Com estas etapas, você configurou a exclusão de uma tarefa via API e atualizou a lista de tarefas no frontend após a exclusão bem-sucedida. Certifique-se de adicionar lógica adicional, como confirmações de exclusão ou feedback visual, conforme necessário para aprimorar a experiência do usuário em seu aplicativo.