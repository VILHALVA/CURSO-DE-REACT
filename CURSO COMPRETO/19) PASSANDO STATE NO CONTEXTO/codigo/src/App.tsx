import React, { useContext } from 'react';
import { MyContext, MyContextProvider } from './components/MyContext';

const App = () => {
  return (
    <MyContextProvider>
      <div>
        <h1>Meu App</h1>
        <MyComponent />
      </div>
    </MyContextProvider>
  );
};

const MyComponent = () => {
  // Use o hook useContext para acessar o contexto
  const { count, setCount } = useContext(MyContext);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
};

export default App;
