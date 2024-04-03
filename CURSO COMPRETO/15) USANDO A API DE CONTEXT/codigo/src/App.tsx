import React from 'react';
import { ThemeProvider, useTheme } from './components/ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
    </button>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Meu App</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
