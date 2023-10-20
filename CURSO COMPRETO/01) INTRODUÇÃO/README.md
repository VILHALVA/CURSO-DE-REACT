# INTRODUÇÃO
Excelente, começar com React é empolgante! Vamos dar uma introdução, abordar a instalação, configuração e revisar os principais arquivos em um projeto React criado com o Create React App, que é uma ferramenta popular para iniciar rapidamente projetos React.

## Introdução a ReactJS:
React é uma biblioteca JavaScript de código aberto mantida pelo Facebook e por uma comunidade de desenvolvedores. Ela é usada para construir interfaces de usuário interativas e é famosa por seu modelo de componente, que permite dividir a interface em partes reutilizáveis. O React utiliza um conceito chamado Virtual DOM para melhorar o desempenho das atualizações de interface.

## Instalação do Create React App:
O Create React App é uma ferramenta que facilita a inicialização de projetos React. Para começar, você precisa ter o Node.js instalado em seu sistema. Se você já o possui, siga estas etapas:

1. Abra o terminal e execute o seguinte comando para instalar o Create React App globalmente:

   ```
   npm install -g create-react-app
   ```

2. Em seguida, crie um novo projeto React usando o Create React App com o seguinte comando:

   ```
   npx create-react-app meu-app
   ```

   Substitua "meu-app" pelo nome desejado do seu projeto.

3. Após a conclusão do processo de criação, acesse o diretório do projeto:

   ```
   cd meu-app
   ```

## Revisão dos Arquivos Principais:
A estrutura de um projeto criado com o Create React App é organizada de forma que você possa começar rapidamente. Aqui estão os principais arquivos e diretórios:

- `public/`: Este diretório contém os arquivos públicos do seu aplicativo, como o arquivo HTML principal (`index.html`) e imagens.

- `src/`: Aqui é onde você irá trabalhar na maior parte do tempo. Este diretório contém os arquivos do código-fonte do seu aplicativo React, incluindo componentes, estilos e lógica.

- `src/index.js`: Este é o ponto de entrada do seu aplicativo React. Ele renderiza o componente raiz no elemento com `id="root"` no arquivo `public/index.html`.

- `src/App.js`: Este é o componente raiz do seu aplicativo. Ele é renderizado em `src/index.js` e é o ponto de partida para a construção da interface do usuário.

- `package.json`: Este arquivo descreve as dependências do seu projeto e contém comandos para executar tarefas, como iniciar o servidor de desenvolvimento.

- `package-lock.json`: Este arquivo é gerado automaticamente e descreve a árvore de dependências do seu projeto.

## Iniciando o Servidor de Desenvolvimento:
Para iniciar o servidor de desenvolvimento e ver seu aplicativo em ação, execute o seguinte comando no diretório raiz do seu projeto:

```
npm start
```

Isso iniciará um servidor local e abrirá seu aplicativo no navegador. Qualquer alteração que você fizer nos arquivos dentro do diretório `src/` será refletida automaticamente no navegador.

Esta é apenas uma introdução ao React e ao Create React App. Conforme você avança no curso, você aprenderá mais sobre componentes, props, estados, roteamento e muitos outros conceitos importantes para o desenvolvimento React. Boa sorte em sua jornada de aprendizado!