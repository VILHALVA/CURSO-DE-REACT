import React, { createContext, useState } from 'react';

// Crie o contexto
export const MyContext = createContext();

// Provedor do contexto
export const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Objeto de valor do contexto, incluindo a função incrementCount
  const contextValue = {
    count,
    incrementCount,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
