# NAVEGANDO ENTRE ROTAS
Navegar entre rotas é uma parte fundamental da construção de aplicativos React. Para fazer isso, você pode utilizar a biblioteca `react-router-dom`, que fornece um conjunto de componentes e utilitários para facilitar a navegação entre diferentes partes do seu aplicativo. Aqui está um guia básico sobre como navegar entre rotas no React usando o `react-router-dom`:

1. **Instale o React Router DOM:**

   Certifique-se de que você já instalou o React Router DOM no seu projeto, como mencionado anteriormente:

   ```
   npm install react-router-dom
   ```

2. **Defina as Rotas:**

   No seu arquivo de configuração de rotas (geralmente denominado "Routes.js" ou similar), importe os componentes que representam as páginas do seu aplicativo e defina as rotas correspondentes.

   ```jsx
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

3. **Use o Componente `Link` para Navegar:**

   Em seus componentes ou páginas, você pode usar o componente `Link` do React Router DOM para criar links de navegação. Por exemplo, para criar um link para a página "Sobre", você faria o seguinte:

   ```jsx
   import React from 'react';
   import { Link } from 'react-router-dom';

   function Header() {
     return (
       <nav>
         <ul>
           <li>
             <Link to="/">Página Inicial</Link>
           </li>
           <li>
             <Link to="/about">Sobre</Link>
           </li>
           <li>
             <Link to="/contact">Contato</Link>
           </li>
         </ul>
       </nav>
     );
   }

   export default Header;
   ```

4. **Adicione as Rotas à Aplicação:**

   No componente raiz do seu aplicativo (geralmente denominado "App.js"), inclua o componente `Routes` que define suas rotas.

   ```jsx
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

5. **Inicie seu Aplicativo:**

   Por fim, inicie o servidor de desenvolvimento do React com `npm start` ou o comando apropriado. Isso permitirá que você acesse seu aplicativo e navegue entre as rotas definidas usando os links que você criou com o componente `Link`.

Essas são as etapas básicas para navegar entre rotas em um aplicativo React usando o `react-router-dom`. Certifique-se de que sua configuração de rotas está de acordo com a estrutura de pastas do seu projeto e a hierarquia de componentes das páginas que você deseja criar. O React Router DOM oferece recursos avançados, como passagem de parâmetros e roteamento aninhado, para atender a necessidades mais complexas de navegação.