# USANDO O USEREF COM ELEMENTOS HTML
`useRef` é um hook no React que permite acessar diretamente elementos do DOM e também criar variáveis mutáveis que não provocam renderizações adicionais quando são modificadas. Usar `useRef` com elementos HTML é útil para interações com o DOM, como focar em um elemento, medir elementos ou obter referências a elementos em componentes funcionais. Aqui estão as práticas recomendadas para usar `useRef` com elementos HTML:

1. **Importe o Hook `useRef`:** Certifique-se de importar o hook `useRef` do módulo `react`.

   ```jsx
   import React, { useRef, useEffect } from 'react';
   ```

2. **Crie uma Referência:** Use o `useRef` para criar uma referência que você pode associar a um elemento HTML. Normalmente, isso é feito em um componente funcional.

   ```jsx
   const myRef = useRef(null);
   ```

   O `useRef` é inicializado com `null`, e você pode associá-lo a um elemento HTML definindo o atributo `ref` do elemento.

3. **Associe a Referência a um Elemento HTML:** Use a referência `myRef` para associá-la a um elemento HTML usando o atributo `ref`.

   ```jsx
   return <input ref={myRef} />;
   ```

   Neste exemplo, `myRef` está associado a um elemento `<input>` e pode ser usado para acessar e interagir com esse elemento.

4. **Acesse e Manipule o Elemento HTML:** Com a referência associada ao elemento, você pode acessar e manipular propriedades e métodos do elemento. Isso pode ser feito diretamente por meio da referência `myRef.current`.

   ```jsx
   const focusInput = () => {
     myRef.current.focus();
   };
   ```

   O exemplo acima cria uma função que chama o método `focus()` no elemento associado ao `myRef`.

5. **Use `useEffect` para Executar Operações após a Renderização:** Se você deseja executar operações após o componente ser renderizado, pode usar o `useEffect` juntamente com a referência. Isso é útil para medir o tamanho de um elemento ou fazer outras operações de manipulação do DOM.

   ```jsx
   useEffect(() => {
     // Execute operações após a renderização
     const width = myRef.current.offsetWidth;
     console.log(`A largura do elemento é ${width}px`);
   }, []);
   ```

6. **Manuseie Elementos de Formulário:** O uso de `useRef` é particularmente comum com elementos de formulário. Isso permite acessar valores diretamente, como capturar o valor de um campo de entrada de texto.

   ```jsx
   const inputRef = useRef(null);

   const handleSubmit = (event) => {
     event.preventDefault();
     alert(`Texto inserido: ${inputRef.current.value}`);
   };

   return (
     <form onSubmit={handleSubmit}>
       <input type="text" ref={inputRef} />
       <button type="submit">Enviar</button>
     </form>
   );
   ```

   Neste exemplo, `inputRef` é usado para acessar o valor do campo de entrada de texto no momento do envio do formulário.

Usar `useRef` com elementos HTML é uma maneira poderosa de interagir com o DOM em componentes funcionais. No entanto, tenha em mente que a manipulação direta do DOM deve ser usada com moderação, e a preferência é criar aplicativos React de maneira declarativa sempre que possível.