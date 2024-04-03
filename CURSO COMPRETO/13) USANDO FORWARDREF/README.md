# USANDO FORWARDREF
O `forwardRef` é uma função no React que permite que um componente receba uma referência (`ref`) e, em seguida, a repasse para um elemento filho personalizado. Isso é particularmente útil quando você deseja interagir diretamente com um elemento filho, como um elemento de entrada de formulário ou um elemento DOM personalizado, mas deseja manter a funcionalidade de componentes reutilizáveis. 

Aqui estão os passos para usar `forwardRef`:

1. **Crie um componente que usa `forwardRef`:** Você pode criar um componente funcional que utiliza `forwardRef` para receber uma referência.

   ```jsx
   import React, { forwardRef } from 'react';

   const MeuComponente = forwardRef((props, ref) => {
     return (
       <div>
         <input ref={ref} type="text" />
       </div>
     );
   });

   export default MeuComponente;
   ```

   Observe que o componente funcional `MeuComponente` usa `forwardRef` como uma função que recebe `props` e `ref` como argumentos.

2. **Use o componente em outro lugar:** Agora, você pode usar o componente em outro lugar do seu aplicativo e fornecer uma referência para ele.

   ```jsx
   import React, { useRef, useEffect } from 'react';
   import MeuComponente from './MeuComponente';

   function App() {
     const inputRef = useRef(null);

     useEffect(() => {
       // Aqui, você pode interagir diretamente com o elemento de entrada.
       if (inputRef.current) {
         inputRef.current.focus();
       }
     }, []);

     return (
       <div>
         <h1>Meu Aplicativo</h1>
         <MeuComponente ref={inputRef} />
       </div>
     );
   }

   export default App;
   ```

   Neste exemplo, `inputRef` é uma referência criada com `useRef`. Ela é passada para o componente `MeuComponente` como uma propriedade chamada `ref`. Dentro do `useEffect`, você pode usar a referência para interagir com o elemento de entrada do componente `MeuComponente`.

Observe que o uso de `forwardRef` é útil quando você precisa acessar diretamente elementos internos ou personalizados de um componente, mas deve ser usado com moderação, pois quebra a encapsulação e pode tornar o código menos previsível. Certifique-se de entender bem como e quando usar `forwardRef` para manter seu código organizado e legível.