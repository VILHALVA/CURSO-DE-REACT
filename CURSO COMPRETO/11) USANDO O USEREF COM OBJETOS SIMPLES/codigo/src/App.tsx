import React from 'react';
import Button from './components/Button';

const App: React.FC = () => {
  // Define uma função de callback para ser passada para o botão
  const handleClick = () => {
    console.log('Botão clicado!');
  };

  return (
    <div>
      <h1>Meu Aplicativo</h1>
      {/* Usa o componente Button e passa a função de callback como prop */}
      <Button onClick={handleClick}>Clique em mim</Button>
    </div>
  );
};

export default App;
