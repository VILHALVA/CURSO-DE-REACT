# BUSCANDO TAREFAS NA API
Para buscar tarefas em sua API usando serviços, `useEffect` e lidar com erros de forma eficaz, siga estas etapas:

## Criação do Serviço
1. **Crie um serviço para acessar sua API:**
   Siga as etapas mencionadas anteriormente para criar um serviço de acesso ao backend com Axios. Isso envolve a configuração do Axios e a definição de funções para fazer solicitações à API.

## Uso do `useEffect` no Componente
2. **Importe o serviço no seu componente:**
   Importe o serviço que você criou no seu componente. Por exemplo:

   ```jsx
   import React, { useEffect, useState } from 'react';
   import { getTarefas } from './apiService';
   ```

3. **Defina o estado para armazenar as tarefas e erros:**
   No seu componente, defina o estado para armazenar as tarefas e os erros. Use `useState` para inicializá-los.

   ```jsx
   const [tarefas, setTarefas] = useState([]);
   const [erro, setErro] = useState(null);
   ```

4. **Use o `useEffect` para buscar tarefas na montagem:**
   Use o `useEffect` para fazer a solicitação à API assim que o componente for montado. Lembre-se de lidar com erros usando um bloco `try...catch`.

   ```jsx
   useEffect(() => {
     async function fetchTarefas() {
       try {
         const data = await getTarefas();
         setTarefas(data);
       } catch (error) {
         setErro('Ocorreu um erro ao buscar tarefas. Tente novamente mais tarde.');
       }
     }

     fetchTarefas();
   }, []);
   ```

   Este código faz uma solicitação à API usando o serviço `getTarefas` e armazena os dados no estado de tarefas. Se ocorrer um erro, ele é capturado no bloco `catch` e a mensagem de erro é armazenada no estado `erro`.

5. **Renderize as tarefas e os erros no componente:**
   Em seu componente, renderize as tarefas e os erros conforme necessário. Você pode usar estruturas condicionais para mostrar as tarefas se estiverem disponíveis e os erros se ocorrerem.

   ```jsx
   return (
     <div>
       <h1>Minhas Tarefas</h1>
       {erro ? (
         <p>{erro}</p>
       ) : (
         <ul>
           {tarefas.map((tarefa) => (
             <li key={tarefa.id}>{tarefa.titulo}</li>
           ))}
         </ul>
       )}
     </div>
   );
   ```

   Neste exemplo, se houver um erro, uma mensagem de erro será exibida. Caso contrário, a lista de tarefas é renderizada.

Com essas etapas, você configurou o uso do `useEffect` para buscar tarefas em sua API, lidou com erros e exibiu mensagens de erro para o usuário quando necessário. Certifique-se de ajustar o código e a exibição de acordo com as necessidades específicas do seu aplicativo e da estrutura da sua API.