import React from 'react';
import MyForm from './components/useRef';

const App: React.FC = () => {
  return (
    <div>
      <h1>Meu Aplicativo</h1>
      {/* Usa o componente useRef */}
      <MyForm />
    </div>
  );
};

export default App;