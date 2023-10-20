# USANDO O USEMEMO
`useMemo` é um hook no React que permite otimizar o desempenho evitando o cálculo repetitivo de valores em componentes funcionais. Ele é particularmente útil quando você tem cálculos custosos que não precisam ser refeitos a cada renderização do componente. Aqui estão as práticas recomendadas para usar `useMemo` da maneira certa:

1. **Importe o Hook `useMemo`:** Certifique-se de importar o hook `useMemo` do módulo `react`.

   ```jsx
   import React, { useMemo } from 'react';
   ```

2. **Use `useMemo` para Calcular Valores Memorizados:** Você pode usar `useMemo` para calcular valores que não precisam ser recalculados a cada renderização, mas apenas quando as dependências especificadas mudarem. `useMemo` aceita duas funções: uma função que calcula o valor e uma lista de dependências.

   ```jsx
   const memorizedValue = useMemo(() => calculateValue(a, b), [a, b]);
   ```

   No exemplo acima, `calculateValue(a, b)` será calculado apenas quando `a` ou `b` mudarem. Se as dependências não mudarem, o valor anteriormente calculado será reutilizado.

3. **Evite Cálculos Custo-Alto em Cada Renderização:** O uso principal do `useMemo` é evitar cálculos repetitivos que podem ser caros em termos de desempenho, como cálculos matemáticos complexos, formatação de datas, ordenação de listas, entre outros.

   ```jsx
   const expensiveValue = useMemo(() => performExpensiveCalculation(data), [data]);
   ```

4. **Lide com Cenários Assíncronos:** Se você estiver realizando operações assíncronas dentro do `useMemo`, como uma chamada de API, pode usar `async/await` para esperar o resultado.

   ```jsx
   const asyncValue = useMemo(async () => {
     const response = await fetch('https://api.example.com/data');
     const data = await response.json();
     return data;
   }, []);
   ```

   Lembre-se de que o valor calculado dentro do `useMemo` não pode ser uma promessa diretamente, pois `useMemo` não pode renderizar componentes assíncronos. Você pode renderizar o resultado da promessa depois de recebê-lo.

5. **Use-o com Cautela:** Não use `useMemo` em excesso, pois seu uso incorreto pode prejudicar o desempenho em vez de melhorá-lo. Avalie se o cálculo realmente beneficia da memorização.

6. **Opte por `useMemo` em Vez de `useEffect`:** Em alguns casos, você pode precisar realizar cálculos caros apenas para fins de exibição. Nesses casos, é preferível usar `useMemo` em vez de `useEffect`, pois `useMemo` é projetado para cálculos de valor memorizado, enquanto `useEffect` é voltado para efeitos colaterais.

O uso correto do `useMemo` pode ajudar a melhorar o desempenho do seu aplicativo React, tornando-o mais eficiente na reutilização de valores calculados. Certifique-se de escolher sabiamente as dependências para garantir que o valor seja recalculado apenas quando necessário.