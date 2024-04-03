import React, { useContext } from 'react';
import { ThemeContext } from './components/ThemeProvider'; // Suponha que você tenha exportado o contexto como ThemeContext

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
    </button>
  );
};

export default ThemeToggle;
