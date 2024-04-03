# CRIANDO UM REACT HOOK CUSTOMIZADO
Criar um React hook personalizado é uma maneira poderosa de encapsular a lógica e a funcionalidade que você deseja compartilhar entre componentes de forma reutilizável. Um hook personalizado é simplesmente uma função que segue as regras dos hooks do React (começa com "use" e pode chamar outros hooks). Vou guiá-lo através do processo de criação de um hook personalizado.

Vamos criar um exemplo de um hook personalizado chamado `useContador` que fornece funcionalidade para incrementar e decrementar um contador. Aqui estão os passos:

1. **Crie um novo arquivo para o seu hook:** Comece criando um novo arquivo para o seu hook. Por convenção, os nomes dos arquivos de hooks começam com "use" e usam a extensão `.js` ou `.jsx`. Por exemplo, você pode criar um arquivo chamado `useContador.js`.

2. **Crie a função do hook:** Defina uma função JavaScript que representará seu hook. Esta função será a sua função de hook personalizado.

   ```jsx
   import { useState } from 'react';

   function useContador() {
     const [contador, setContador] = useState(0);

     const incrementar = () => {
       setContador(contador + 1);
     };

     const decrementar = () => {
       setContador(contador - 1);
     };

     return {
       contador,
       incrementar,
       decrementar,
     };
   }

   export default useContador;
   ```

   Neste exemplo, o hook `useContador` usa o hook `useState` para gerenciar o estado do contador e fornece funções para incrementar e decrementar o contador.

3. **Use o hook personalizado em um componente:** Agora você pode usar o hook personalizado em qualquer componente funcional.

   ```jsx
   import React from 'react';
   import useContador from './useContador';

   function MeuComponente() {
     const { contador, incrementar, decrementar } = useContador();

     return (
       <div>
         <p>Contador: {contador}</p>
         <button onClick={incrementar}>Incrementar</button>
         <button onClick={decrementar}>Decrementar</button>
       </div>
     );
   }

   export default MeuComponente;
   ```

   Neste exemplo, importamos o hook personalizado `useContador` e o usamos no componente `MeuComponente`. Ele nos fornece o estado do contador e as funções para incrementar e decrementar o contador.

Com isso, você criou um hook personalizado que pode ser facilmente reutilizado em qualquer componente funcional. Essa é uma maneira poderosa de compartilhar lógica e funcionalidade entre componentes sem a necessidade de herança de componentes de classe ou props complexas. Lembre-se de que você pode criar hooks personalizados para encapsular qualquer lógica que desejar e tornar seu código mais modular e reutilizável.