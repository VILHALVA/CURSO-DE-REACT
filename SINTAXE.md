# SINTAXE
Vou criar um pequeno projeto em React que consistirá em um contador simples, onde o usuário pode incrementar e decrementar o valor do contador. Vou explicar cada parte do código conforme avançamos:

1. **Criando o Projeto:**

Primeiro, precisamos criar um novo projeto React. Você pode fazer isso facilmente usando o Create React App, uma ferramenta oficial do React para criar novos projetos. Se você ainda não tiver o Create React App instalado, pode instalá-lo globalmente com o seguinte comando:

```bash
npm install -g create-react-app
```

Em seguida, criaremos o projeto com o seguinte comando:

```bash
npx create-react-app contador-app
```

Isso criará uma nova pasta chamada `contador-app` com a estrutura básica de um projeto React.

2. **Implementando o Componente de Contador:**

Vamos agora implementar o componente de contador. Abra o arquivo `src/App.js` e substitua o conteúdo por este:

```jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
```

- **Explicação:** Neste código, criamos um componente de função `App` que renderiza um contador. Utilizamos o hook `useState` para definir o estado do contador e uma função `setCount` para atualizar esse estado. Implementamos duas funções, `increment` e `decrement`, que são chamadas quando os botões "+" e "-" são clicados, respectivamente. O valor atual do contador é exibido entre os botões.

3. **Estilizando o Componente:**

Vamos adicionar um pouco de estilo ao nosso contador. Abra o arquivo `src/App.css` e adicione o seguinte código:

```css
.App {
  text-align: center;
}

.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.counter button {
  font-size: 24px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
}

.counter span {
  font-size: 36px;
}
```

Este código adiciona um estilo simples para alinhar o contador ao centro da página e definir o estilo dos botões e do número do contador.

4. **Executando o Projeto:**

Agora que o projeto está pronto, você pode executá-lo. Abra um terminal, navegue até o diretório do projeto (`contador-app`) e execute o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá automaticamente o seu navegador padrão com o aplicativo React em execução. Você verá o contador e poderá clicar nos botões "+" e "-" para incrementar e decrementar o valor do contador, respectivamente.

Este é um projeto React simples que demonstra como criar e atualizar o estado de um componente funcional utilizando o hook `useState`. Você pode expandir esse projeto adicionando mais funcionalidades, como reiniciar o contador, definir um valor inicial personalizado, ou estilizar ainda mais o componente.