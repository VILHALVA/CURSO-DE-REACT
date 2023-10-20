# PASSANDO FUNÇÕES NO CONTEXTO
Para passar funções em um contexto no React, você pode incluí-las como parte dos valores fornecidos pelo `Provider` do contexto. Isso permite que os componentes consumidores do contexto acessem e chamem essas funções. Aqui estão os passos para passar funções em um contexto:

## Criando um contexto com funções
1. **Crie um contexto:** Primeiro, crie um contexto da mesma forma que você criaria um contexto que armazenaria valores. No entanto, inclua as funções desejadas nos valores que você passa para o `Provider`.

   ```jsx
   import React, { createContext, useContext, useState } from 'react';

   const MeuContexto = createContext();

   function MeuProvider({ children }) {
     const [valor, setValor] = useState(0);

     const incrementar = () => {
       setValor(valor + 1);
     };

     const decrementar = () => {
       setValor(valor - 1);
     };

     return (
       <MeuContexto.Provider value={{ valor, incrementar, decrementar }}>
         {children}
       </MeuContexto.Provider>
     );
   }

   export { MeuProvider, MeuContexto };
   ```

   Neste exemplo, criamos um contexto chamado `MeuContexto` e um componente `MeuProvider` que envolve o conteúdo da aplicação. O `MeuProvider` fornece as funções `incrementar` e `decrementar` junto com o valor `valor` como parte do valor do contexto.

## Usando o contexto em componentes filhos
2. **Use o contexto em componentes filhos:** Em qualquer componente filho que deseja acessar e usar as funções do contexto, use o hook `useContext` para obter acesso ao contexto.

   ```jsx
   import React, { useContext } from 'react';
   import { MeuContexto } from './MeuContexto';

   function MeuComponente() {
     const { valor, incrementar, decrementar } = useContext(MeuContexto);

     return (
       <div>
         <p>Valor: {valor}</p>
         <button onClick={incrementar}>Incrementar</button>
         <button onClick={decrementar}>Decrementar</button>
       </div>
     );
   }

   export default MeuComponente;
   ```

   Neste exemplo, importamos o contexto `MeuContexto` e usamos `useContext` para acessar o valor e as funções do contexto no componente `MeuComponente`.

3. **Use o componente `MeuProvider` no componente principal:** No componente principal, como o `App`, envolva os componentes que desejam acessar o contexto com o `MeuProvider`.

   ```jsx
   import React from 'react';
   import { MeuProvider } from './MeuContexto';
   import MeuComponente from './MeuComponente';

   function App() {
     return (
       <MeuProvider>
         <h1>Meu Aplicativo</h1>
         <MeuComponente />
       </MeuProvider>
     );
   }

   export default App;
   ```

   Isso garante que os componentes filhos, como `MeuComponente`, possam acessar o contexto e suas funções.

Ao seguir esses passos, você pode passar funções em um contexto no React, tornando essas funções acessíveis para consumo em qualquer componente que envolve o contexto. Isso é particularmente útil para compartilhar lógica ou funções globais em um aplicativo React.