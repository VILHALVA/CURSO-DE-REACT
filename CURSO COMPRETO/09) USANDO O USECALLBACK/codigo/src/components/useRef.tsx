import React, { useRef } from 'react';

const CounterComponent = () => {
  // Criando uma referência para um objeto simples (um contador)
  const counterRef = useRef({ count: 0 });

  // Função para incrementar o contador
  const incrementCounter = () => {
    counterRef.current.count += 1;
    console.log('Novo valor do contador:', counterRef.current.count);
  };

  return (
    <div>
      <h2>Counter Component</h2>
      <p>Contador: {counterRef.current.count}</p>
      <button onClick={incrementCounter}>Incrementar</button>
    </div>
  );
};

export default CounterComponent;
