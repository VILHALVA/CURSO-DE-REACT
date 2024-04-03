import React from 'react';
import Container from './components/Container';

const App = () => {
  return (
    <div>
      <h1>Meu App</h1>
      {/* Use o componente Container e passe elementos filhos para ele */}
      <Container>
        <p>Este é um parágrafo dentro do componente Container.</p>
        <button>Clique aqui</button>
      </Container>
    </div>
  );
};

export default App;
