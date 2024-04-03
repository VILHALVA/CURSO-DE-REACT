import React from 'react';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <div>
      <h1>Meu Aplicativo</h1>
      {/* Usando o componente Card */}
      <Card title="Título do Card" content="Conteúdo do Card" />
    </div>
  );
};

export default App;
