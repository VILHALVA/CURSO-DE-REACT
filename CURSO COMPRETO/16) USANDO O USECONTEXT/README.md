# USANDO O USECONTEXT
O hook `useContext` é uma maneira mais simples e direta de acessar o contexto em componentes funcionais no React, especialmente em versões mais recentes (a partir do React 16.8). Ele permite que você acesse os valores do contexto sem precisar do `Consumer`. Aqui estão os passos para usar o `useContext`:

1. **Definindo um Contexto:**

   Primeiro, você precisa definir o contexto. Para este exemplo, vou supor que você já tem um contexto definido, chamado `MeuContexto`, conforme explicado na resposta anterior.

2. **Usando o `useContext`:**

   Em um componente funcional, você pode importar o hook `useContext` do React e usá-lo para acessar os valores do contexto.

   ```jsx
   import React, { useContext } from 'react';
   import MeuContexto from './MeuContexto'; // Importe o contexto

   function ComponenteFilho() {
     const contextData = useContext(MeuContexto); // Use o hook useContext para acessar o contexto

     return (
       <div>
         <p>Dados compartilhados: {contextData}</p>
       </div>
     );
   }

   export default ComponenteFilho;
   ```

   No exemplo acima, `useContext` é usado para acessar o valor do contexto `MeuContexto`. Isso é mais conciso e legível do que usar o `Consumer`.

3. **Usando o Contexto no Componente Pai:**

   No componente pai, você ainda deve usar o `Provider` para fornecer o valor do contexto. O uso do `Provider` é o mesmo que explicado na resposta anterior.

   ```jsx
   import React from 'react';
   import MeuContexto from './MeuContexto'; // Importe o contexto

   function App() {
     const dadosCompartilhados = "Isso é um dado compartilhado";

     return (
       <MeuContexto.Provider value={dadosCompartilhados}>
         <ComponenteFilho />
       </MeuContexto.Provider>
     );
   }

   export default App;
   ```

Usar o hook `useContext` é a maneira mais simples e direta de acessar valores de contexto em componentes funcionais no React. Isso torna o código mais limpo e legível, especialmente em comparação com a abordagem mais antiga usando o `Consumer`. Certifique-se de importar o contexto apropriado e usar `useContext` nos componentes que precisam acessar os dados do contexto.