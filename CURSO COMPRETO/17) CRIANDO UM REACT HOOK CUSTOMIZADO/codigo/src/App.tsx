import React from 'react';
import useClickCounter from './components/useClickCounter';

const ClickCounterComponent = () => {
  const { clickCount, incrementClickCount } = useClickCounter();

  return (
    <div>
      <p>Contador de Cliques: {clickCount}</p>
      <button onClick={incrementClickCount}>Clique Aqui</button>
    </div>
  );
};

export default ClickCounterComponent;
