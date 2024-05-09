# MANUAL
## TUTORIAL:
Vou criar um pequeno projeto em React que consistirá em um contador simples, onde o usuário pode incrementar e decrementar o valor do contador. Vou explicar cada parte do código conforme avançamos:

1. **Criando o Projeto:**
  No caso de criar um projeto React, a diferença está principalmente no uso de TypeScript ou JavaScript como linguagem de programação. Aqui estão os comandos para criar um novo projeto React usando Create React App, tanto em JavaScript quanto em TypeScript:

  1. **Criar um projeto React em JavaScript**:

  Para criar um projeto React em JavaScript, você pode usar o seguinte comando:

  ```bash
  npx create-react-app nome-do-projeto
  ```

  Este comando criará um novo projeto React em JavaScript com o nome especificado. Ele usará JavaScript como linguagem de programação padrão.

  2. **Criar um projeto React em TypeScript**:

  Para criar um projeto React em TypeScript, você pode usar o seguinte comando:

  ```bash
  npx create-react-app nome-do-projeto --template typescript
  ```

  Este comando criará um novo projeto React em TypeScript com o nome especificado. A opção `--template typescript` instrui o Create React App a configurar o projeto para usar TypeScript como linguagem de programação. Isso significa que todos os arquivos de código-fonte serão escritos em TypeScript e o projeto será configurado para compilar o código TypeScript em JavaScript durante o processo de construção.

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

## DIRETÓRIOS:
Ao criar um aplicativo React usando Create React App ou outra ferramenta semelhante, você geralmente encontrará uma estrutura de diretórios padrão que se parece com isso:

```
meu-app-react/
  |- node_modules/
  |- public/
  |- src/
      |- components/
      |- assets/
      |- App.js
      |- index.js
  |- package.json
  |- README.md
```

Vamos explicar o propósito de cada diretório:

1. **`node_modules/`**: Este diretório contém todas as dependências do seu projeto, incluindo bibliotecas de terceiros que você instalou usando npm (Node Package Manager) ou Yarn. Você não deve modificar manualmente nada neste diretório, pois é gerado automaticamente pelo gerenciador de pacotes.

2. **`public/`**: Este diretório contém os arquivos estáticos do seu aplicativo, como HTML, imagens, ícones, etc. O arquivo `index.html` neste diretório é o ponto de entrada do seu aplicativo React e geralmente contém uma div com um id específico onde o React renderizará o conteúdo do seu aplicativo.

3. **`src/`**: Este é o diretório onde você irá escrever a maior parte do seu código-fonte React.

    - **`components/`**: Este diretório geralmente contém todos os componentes React que você cria para o seu aplicativo. Organizar seus componentes em diretórios separados pode ajudar a manter seu projeto organizado e facilitar a manutenção.
    
    - **`assets/`**: Aqui você pode armazenar arquivos de mídia, como imagens, vídeos, fontes, etc., que são utilizados em seu aplicativo.

    - **`App.js`**: Este é um dos principais pontos de entrada do seu aplicativo React. Ele geralmente contém o componente principal (`App`) que serve como o componente raiz para toda a sua aplicação.
    
    - **`index.js`**: Este arquivo é responsável por renderizar o componente principal (`App`) no DOM. É aqui que o React é integrado ao HTML do arquivo `public/index.html`.

4. **`package.json`**: Este arquivo mantém metadados sobre o projeto e suas dependências, incluindo scripts de inicialização, dependências de desenvolvimento, entre outros. É onde você especifica os pacotes que seu projeto depende e suas versões.

5. **`README.md`**: Este é um arquivo Markdown que geralmente contém informações sobre o seu projeto, como instruções de instalação, uso, contribuição, etc. Markdown é uma linguagem de marcação simples que permite formatar texto de forma fácil e rápida.

