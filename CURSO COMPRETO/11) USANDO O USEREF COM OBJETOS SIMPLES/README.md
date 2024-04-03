# USANDO O USEREF COM OBJETOS SIMPLES
`useRef` não é limitado apenas a elementos HTML; você também pode usá-lo para criar referências a objetos simples. Isso é útil quando você precisa manter uma referência a um valor ou objeto sem acionar uma nova renderização quando ele muda. Aqui estão algumas práticas recomendadas para usar `useRef` com objetos simples:

1. **Importe o Hook `useRef`:** Certifique-se de importar o hook `useRef` do módulo `react`.

   ```jsx
   import React, { useRef } from 'react';
   ```

2. **Crie uma Referência:** Use o `useRef` para criar uma referência que será usada para armazenar o objeto ou valor.

   ```jsx
   const myObjectRef = useRef(null);
   ```

   O `useRef` é inicializado com `null`.

3. **Associe a Referência a um Objeto:** Você pode associar a referência `myObjectRef` a um objeto definindo o valor `current` da referência.

   ```jsx
   myObjectRef.current = { name: 'John', age: 30 };
   ```

   Isso associa o objeto `{ name: 'John', age: 30 }` à referência `myObjectRef.current`.

4. **Acesse o Objeto:** Você pode acessar o objeto diretamente por meio da referência `myObjectRef.current`.

   ```jsx
   const name = myObjectRef.current.name;
   const age = myObjectRef.current.age;
   ```

   No exemplo acima, estamos acessando as propriedades `name` e `age` do objeto associado à referência `myObjectRef`.

5. **Atualize o Objeto:** Você pode atualizar o objeto associado à referência diretamente.

   ```jsx
   myObjectRef.current.age = 31;
   ```

   Isso atualiza a propriedade `age` do objeto associado à referência.

6. **Use `useEffect` para Realizar Operações:** Se você deseja executar operações após a renderização do componente, pode usar o `useEffect` juntamente com a referência. Isso é útil para realizar ações com base no objeto ou valor armazenado na referência.

   ```jsx
   useEffect(() => {
     // Execute operações após a renderização
     console.log(`Nome: ${myObjectRef.current.name}, Idade: ${myObjectRef.current.age}`);
   }, []);
   ```

7. **Manuseie a Atualização da Referência:** Lembre-se de que atualizar a referência `current` não acionará uma nova renderização do componente, portanto, você deve gerenciar as atualizações manualmente.

   ```jsx
   const updateAge = () => {
     myObjectRef.current.age += 1;
   };
   ```

   No exemplo acima, a função `updateAge` aumenta a idade do objeto na referência `myObjectRef`.

Usar `useRef` com objetos simples é útil quando você deseja armazenar valores ou objetos que não precisam causar uma nova renderização do componente, mas ainda precisam ser acessíveis e atualizados. Tenha cuidado ao usar `useRef` com objetos, pois você é responsável por gerenciar as atualizações da referência manualmente.