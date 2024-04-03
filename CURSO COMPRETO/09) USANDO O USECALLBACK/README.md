# USANDO O USECALLBACK
`useCallback` é outro hook fundamental no React que é usado para otimizar o desempenho, especialmente em relação a funções que você passa como propriedades para componentes filhos. Ele permite memorizar funções, evitando a criação de novas instâncias de funções a cada renderização do componente. Aqui estão as práticas recomendadas para usar `useCallback` da maneira certa:

1. **Importe o Hook `useCallback`:** Certifique-se de importar o hook `useCallback` do módulo `react`.

   ```jsx
   import React, { useCallback } from 'react';
   ```

2. **Use `useCallback` para Memorizar Funções:** Você pode usar `useCallback` para memorizar funções que não precisam ser recriadas a cada renderização do componente. `useCallback` aceita duas funções: a função que você deseja memorizar e uma lista de dependências.

   ```jsx
   const memorizedFunction = useCallback(() => doSomething(a, b), [a, b]);
   ```

   No exemplo acima, `doSomething(a, b)` será memorizado e recriado apenas quando `a` ou `b` mudarem. Se as dependências não mudarem, a função anteriormente memorizada será reutilizada.

3. **Evite Recriação de Funções:** A principal utilidade do `useCallback` é evitar a recriação desnecessária de funções. Isso é particularmente útil quando você passa funções como propriedades para componentes filhos.

   ```jsx
   <ChildComponent onClick={memorizedFunction} />
   ```

   Sem o uso de `useCallback`, a função `memorizedFunction` seria recriada a cada renderização do componente pai, o que pode causar problemas de desempenho em componentes filhos.

4. **Lista de Dependências:** Assim como o `useEffect`, você pode especificar uma lista de dependências como o segundo argumento do `useCallback`. A função será recalculada apenas se alguma das dependências mudar.

   ```jsx
   const handleClick = useCallback(() => alert('Botão clicado'), []);
   ```

   Neste exemplo, `handleClick` será memorizado e recriado apenas quando as dependências mudarem. Como a lista de dependências está vazia, a função será memorizada uma vez e reutilizada em todas as renderizações.

5. **Use-o com Cautela:** Não use `useCallback` em todas as funções do seu componente. Use-o quando for relevante evitar a recriação de funções. O uso excessivo pode tornar o código menos legível sem necessariamente melhorar o desempenho.

6. **Evite Uso em Funções Sem Dependências Variáveis:** Se você tem uma função que não depende de nenhuma variável do escopo do componente, pode não ser necessário usar `useCallback`. Funções definidas dentro do corpo do componente geralmente são recriadas a cada renderização de qualquer maneira.

   ```jsx
   // Não há necessidade de useCallback aqui
   const handleClick = () => alert('Botão clicado');
   ```

O `useCallback` é uma ferramenta valiosa para otimizar o desempenho de aplicativos React, garantindo que funções não sejam recriadas desnecessariamente. Use-o principalmente em situações em que a recriação de funções pode causar problemas de desempenho, como quando você passa funções como propriedades para componentes filhos.