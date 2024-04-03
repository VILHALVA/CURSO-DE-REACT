import React, { createContext, useState, useContext } from 'react';

// Crie o contexto do tema
const ThemeContext = createContext();

// Provedor do contexto do tema
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook para acessar o contexto do tema
export const useTheme = () => useContext(ThemeContext);
