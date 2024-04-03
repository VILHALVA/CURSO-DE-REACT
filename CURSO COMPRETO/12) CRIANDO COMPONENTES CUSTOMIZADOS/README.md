# CRIANDO COMPONENTES CUSTOMIZADOS
Criar componentes customizados é uma parte essencial do desenvolvimento no React. Componentes customizados permitem que você divida sua interface de usuário em partes reutilizáveis e organizadas, tornando seu código mais modular e fácil de manter. Vou explicar como criar componentes customizados em React:

## Passos para criar um componente customizado:
1. **Crie um novo arquivo:** Comece criando um novo arquivo para o seu componente. Por convenção, os nomes dos arquivos de componentes React começam com uma letra maiúscula e usam a extensão `.js` ou `.jsx`. Por exemplo, você pode criar um arquivo chamado `MeuComponente.js`.

2. **Importe o React:** No início do seu arquivo, importe a biblioteca React.

   ```jsx
   import React from 'react';
   ```

3. **Crie o seu componente:** Defina o seu componente como uma função ou uma classe, dependendo das suas necessidades. A forma mais moderna e recomendada é usar componentes funcionais, a menos que você precise de estado ou métodos do ciclo de vida, caso em que você usaria componentes de classe.

   **Componente Funcional:**

   ```jsx
   function MeuComponente() {
     return (
       <div>
         <h1>Meu Componente</h1>
         <p>Este é um componente customizado.</p>
       </div>
     );
   }

   export default MeuComponente;
   ```

   **Componente de Classe:**

   ```jsx
   import React, { Component } from 'react';

   class MeuComponente extends Component {
     render() {
       return (
         <div>
           <h1>Meu Componente</h1>
           <p>Este é um componente customizado.</p>
         </div>
       );
     }
   }

   export default MeuComponente;
   ```

4. **Exporte o componente:** No final do seu arquivo, exporte o componente para que ele possa ser importado e usado em outros lugares no seu aplicativo.

5. **Use o componente:** Agora você pode importar e usar o componente customizado em outros lugares do seu aplicativo. Por exemplo, em um arquivo de aplicativo principal:

   ```jsx
   import React from 'react';
   import MeuComponente from './MeuComponente';

   function App() {
     return (
       <div>
         <h1>Meu Aplicativo</h1>
         <MeuComponente />
       </div>
     );
   }

   export default App;
   ```

Isso é tudo o que você precisa fazer para criar e usar componentes customizados em React. Lembre-se de que os componentes customizados podem aceitar propriedades para torná-los mais flexíveis e reutilizáveis, e você pode compor vários componentes para construir interfaces de usuário complexas. Componentes customizados são uma parte fundamental da arquitetura de aplicativos React e ajudam a manter seu código organizado e escalável.