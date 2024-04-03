import React from 'react';
import { MyContextProvider, MyContext } from './components/MyContext';

const App = () => {
  return (
    <MyContextProvider>
      <div>
        <h1>Meu App</h1>
        <MyContext.Consumer>
          {({ count, incrementCount }) => (
            <div>
              <p>Contador: {count}</p>
              <button onClick={incrementCount}>Incrementar</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    </MyContextProvider>
  );
};

export default App;
