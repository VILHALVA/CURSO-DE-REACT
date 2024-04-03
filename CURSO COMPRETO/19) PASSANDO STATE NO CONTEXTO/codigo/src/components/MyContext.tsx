import React, { createContext, useState } from 'react';

// Crie o contexto
export const MyContext = createContext();

// Provedor do contexto
export const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Objeto de valor do contexto, incluindo o estado count e a função setCount
  const contextValue = {
    count,
    setCount,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
