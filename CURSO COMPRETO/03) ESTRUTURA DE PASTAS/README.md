# ESTRUTURA DE PASTAS
Definir uma estrutura de pastas organizada é uma prática importante ao desenvolver um projeto React. Ela ajuda a manter seu código organizado, facilita a colaboração em equipe e melhora a manutenção. Vou fornecer uma estrutura de pastas comum e explicar como configurar o React Router DOM para permitir a navegação entre diferentes páginas.

Aqui está uma estrutura de pastas típica para um projeto React:

```
my-app/
  ├── src/
  │    ├── components/
  │    │    ├── Header.js
  │    │    ├── Footer.js
  │    │    ├── ...
  │    │
  │    ├── pages/
  │    │    ├── Home.js
  │    │    ├── About.js
  │    │    ├── Contact.js
  │    │    ├── ...
  │    │
  │    ├── App.js
  │    ├── index.js
  │
  ├── public/
  │    ├── index.html
  │    ├── ...
  │
  ├── package.json
  ├── ...
```

Aqui estão algumas explicações sobre essa estrutura de pastas:

- **`src/`**: Este é o diretório onde a maior parte do código-fonte do seu aplicativo React reside.

  - **`components/`**: Este diretório é usado para armazenar componentes reutilizáveis que podem ser usados em várias partes do seu aplicativo, como cabeçalhos, rodapés e outros componentes de interface.

  - **`pages/`**: Aqui você coloca componentes que representam páginas individuais do seu aplicativo. Por exemplo, "Home.js" pode representar a página inicial do seu site, "About.js" a página Sobre e assim por diante.

- **`App.js`**: Este é o componente raiz do seu aplicativo, onde você configura as rotas e a estrutura global.

- **`index.js`**: É o ponto de entrada do seu aplicativo, onde você renderiza o componente raiz em um elemento HTML no arquivo `public/index.html`.

- **`public/`**: Este diretório contém arquivos públicos, como o arquivo HTML principal e recursos estáticos como imagens e ícones.

Agora, em relação à configuração do React Router DOM para permitir a navegação entre páginas, você pode seguir estas etapas:

1. Instale o React Router DOM em seu projeto:

   ```
   npm install react-router-dom
   ```

2. Crie um arquivo de configuração de rotas. Por exemplo, você pode criar um novo arquivo chamado "Routes.js" em seu diretório `src/`. Este arquivo deve definir as rotas do seu aplicativo. Aqui está um exemplo simples:

   ```jsx
   // src/Routes.js
   import React from 'react';
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
   import Home from './pages/Home';
   import About from './pages/About';
   import Contact from './pages/Contact';

   const Routes = () => {
     return (
       <Router>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
         </Switch>
       </Router>
     );
   };

   export default Routes;
   ```

3. No seu componente `App.js`, você pode incluir as rotas definidas. Por exemplo:

   ```jsx
   // src/App.js
   import React from 'react';
   import Routes from './Routes';

   function App() {
     return (
       <div>
         <Routes />
       </div>
     );
   }

   export default App;
   ```

Agora, com essa estrutura de pastas e configuração do React Router DOM, você pode criar páginas separadas no diretório `pages/` e definir as rotas em "Routes.js" para permitir a navegação entre elas. Certifique-se de importar e usar o `Link` do React Router DOM em seus componentes para criar links de navegação.