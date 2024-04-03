import React, { useRef } from 'react';
import InputComponent from './components/forwardRef';

const App = () => {
  // Crie uma referência utilizando useRef
  const inputRef = useRef(null);

  // Função para focar o input
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Meu App</h1>
      {/* Utilize o componente InputComponent e passe a ref para ele */}
      <InputComponent ref={inputRef} />
      <button onClick={focusInput}>Focar input</button>
    </div>
  );
};

export default App;
