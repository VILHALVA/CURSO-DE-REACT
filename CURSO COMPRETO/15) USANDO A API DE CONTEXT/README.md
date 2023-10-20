# USANDO A API DE CONTEXT
A API de Context no React permite que você compartilhe dados entre componentes da árvore de componentes sem a necessidade de passar explicitamente props entre cada nível. É especialmente útil para compartilhar informações, como temas, autenticação e outras configurações em toda a aplicação. Aqui está como usar a API de Context no React:

## Criando um Context
1. **Crie um novo arquivo para o seu contexto (opcional):** É uma prática comum criar um arquivo separado para o seu contexto. Vamos criar um arquivo chamado `MeuContexto.js`.

2. **Importe o React e crie um contexto:** No arquivo do contexto, importe o React e crie um novo contexto usando `React.createContext()`.

   ```jsx
   import React from 'react';

   const MeuContexto = React.createContext();
   
   export default MeuContexto;
   ```

## Fornecendo um Contexto
3. **No componente pai, envolva os componentes que devem acessar o contexto:** O componente que deseja compartilhar dados deve envolver os componentes que desejarão acessar esses dados com o componente `Provider` do contexto.

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

   function ComponenteFilho() {
     return (
       <div>
         {/* Componente filho pode acessar dadosCompartilhados diretamente */}
         <MeuContexto.Consumer>
           {(contextData) => (
             <p>Dados compartilhados: {contextData}</p>
           )}
         </MeuContexto.Consumer>
       </div>
     );
   }

   export default App;
   ```

## Acessando o Contexto
4. **Nos componentes filhos, acesse o contexto com `Consumer`:** Em qualquer componente que deseje acessar os dados do contexto, você pode usar o componente `Consumer` do contexto para consumir os dados do contexto.

   ```jsx
   import React from 'react';
   import MeuContexto from './MeuContexto';

   function ComponenteFilho() {
     return (
       <div>
         <MeuContexto.Consumer>
           {(contextData) => (
             <p>Dados compartilhados: {contextData}</p>
           )}
         </MeuContexto.Consumer>
       </div>
     );
   }

   export default ComponenteFilho;
   ```

## Usando o Hook `useContext` (a partir do React 16.8)
5. **Usando o Hook `useContext` (a partir do React 16.8):** Se você estiver usando uma versão mais recente do React (16.8 ou superior), você pode utilizar o hook `useContext` para acessar o contexto de forma mais simples.

   ```jsx
   import React, { useContext } from 'react';
   import MeuContexto from './MeuContexto';

   function ComponenteFilho() {
     const contextData = useContext(MeuContexto);

     return (
       <div>
         <p>Dados compartilhados: {contextData}</p>
       </div>
     );
   }

   export default ComponenteFilho;
   ```

Usar a API de Context no React é uma maneira poderosa de compartilhar dados entre componentes sem a necessidade de passar props manualmente por cada nível da árvore de componentes. Isso é particularmente útil para temas, autenticação, configurações globais e outras informações compartilhadas em toda a aplicação. Certifique-se de organizar bem seus contextos para manter o código limpo e compreensível.