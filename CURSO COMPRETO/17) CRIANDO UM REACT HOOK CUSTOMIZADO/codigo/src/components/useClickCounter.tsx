import React, { useState } from 'react';

// Hook personalizado para contar cliques em um botão
const useClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return { clickCount, incrementClickCount };
};

export default useClickCounter;
