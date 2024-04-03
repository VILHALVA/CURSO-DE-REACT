import React, { useMemo } from 'react';

const SumCalculator = () => {
  // Definindo a função que calcula a soma dos números de 1 a 1000
  const calculateSum = () => {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
      sum += i;
    }
    return sum;
  };

  // Usando useMemo para memoizar o valor calculado
  const sum = useMemo(() => calculateSum(), []);

  return (
    <div>
      <h2>Sum Calculator</h2>
      <p>A soma dos números de 1 a 1000 é: {sum}</p>
    </div>
  );
};

export default SumCalculator;
