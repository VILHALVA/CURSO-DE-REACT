import React from 'react';
import MyForm from './components/MyForm';

const App: React.FC = () => {
  return (
    <div>
      <h1>Meu Aplicativo</h1>
      {/* Usa o componente MyForm */}
      <MyForm />
    </div>
  );
};

export default App;
