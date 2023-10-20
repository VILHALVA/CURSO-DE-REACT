# PASSANDO STATE NO CONTEXTO
Para passar estados em um contexto no React, você pode incluí-los como parte dos valores fornecidos pelo `Provider` do contexto, semelhante à maneira como você passa funções. Isso permite que os componentes consumidores do contexto acessem e atualizem esses estados. Aqui estão os passos para passar estados em um contexto:

## Criando um contexto com estados
1. **Crie um contexto:** Comece criando um contexto da mesma forma que você faria para um contexto que armazenaria valores. No entanto, inclua os estados desejados nos valores que você passa para o `Provider`.

   ```jsx
   import React, { createContext, useContext, useState } from 'react';

   const MeuContexto = createContext();

   function MeuProvider({ children }) {
     const [contador, setContador] = useState(0);
     const [nome, setNome] = useState('');

     return (
       <MeuContexto.Provider value={{ contador, setContador, nome, setNome }}>
         {children}
       </MeuContexto.Provider>
     );
   }

   export { MeuProvider, MeuContexto };
   ```

   Neste exemplo, criamos um contexto chamado `MeuContexto` e um componente `MeuProvider` que envolve o conteúdo da aplicação. O `MeuProvider` fornece os estados `contador` e `nome`, juntamente com suas funções `setContador` e `setNome`, como parte do valor do contexto.

## Usando o contexto em componentes filhos
2. **Use o contexto em componentes filhos:** Em qualquer componente filho que deseja acessar e atualizar os estados do contexto, use o hook `useContext` para obter acesso ao contexto.

   ```jsx
   import React, { useContext } from 'react';
   import { MeuContexto } from './MeuContexto';

   function MeuComponente() {
     const { contador, setContador, nome, setNome } = useContext(MeuContexto);

     const incrementar = () => {
       setContador(contador + 1);
     };

     return (
       <div>
         <p>Contador: {contador}</p>
         <button onClick={incrementar}>Incrementar</button>
         <input
           type="text"
           value={nome}
           onChange={(e) => setNome(e.target.value)}
         />
       </div>
     );
   }

   export default MeuComponente;
   ```

   Neste exemplo, importamos o contexto `MeuContexto` e usamos `useContext` para acessar e atualizar os estados do contexto no componente `MeuComponente`.

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

   Isso garante que os componentes filhos, como `MeuComponente`, possam acessar e atualizar os estados do contexto.

Seguindo esses passos, você pode passar estados em um contexto no React, tornando esses estados acessíveis para consumo em qualquer componente que envolva o contexto. Isso é particularmente útil para compartilhar estados globais em um aplicativo React e permite a coordenação entre vários componentes sem a necessidade de passar propriedades manualmente.