# CURSO DE REACT
👨‍⚖️REACT É UMA BIBLIOTECA DE JAVASCRIPT UTILIZADA PARA CONSTRUIR INTERFACES DE USUÁRIO INTERATIVAS E REUTILIZÁVEIS. ELE PERMITE CRIAR COMPONENTES INDEPENDENTES QUE PODEM RENDERIZAR DINAMICAMENTE QUANDO OS DADOS MUDAM, RESULTANDO EM UMA UI MAIS EFICIENTE E RESPONSIVA. REACT É AMPLAMENTE UTILIZADO NO DESENVOLVIMENTO WEB PARA CRIAR APLICATIVOS DE PÁGINA ÚNICA (SPAS) E APLICATIVOS MÓVEIS USANDO O REACT NATIVE.

[![GitHub Repo stars](https://img.shields.io/badge/VILHALVA-GITHUB-03A9F4?logo=github)](https://github.com/VILHALVA) 
[![GitHub Repo stars](https://img.shields.io/badge/VEJA%20OS-VIDEOS-03A9F4?logo=youtube)](https://www.youtube.com/@vilhalva100/search?query=React)
[![GitHub Repo stars](https://img.shields.io/badge/VEJA-DOCUMENTAÇÃO-03A9F4?logo=google)](https://legacy.reactjs.org/docs/getting-started.html)
[![GitHub Repo stars](https://img.shields.io/badge/LINGUAGEM%20DE-PROGRAMAÇÃO-03A9F4?logo=google)](https://github.com/VILHALVA/CURSO-DE-JAVASCRIPT)
<br>

[![GitHub Repo stars](https://img.shields.io/badge/-PLAYLIST%20DO%20YOUTUBE-blueviolet)](https://youtube.com/playlist?list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&si=zV5HVdLgQzLShBUE)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" align="center" width="280"> <br>

## CONCEITO:
### 1. React e TypeScript:
React é uma biblioteca JavaScript popular para construir interfaces de usuário interativas, enquanto o TypeScript é uma linguagem que adiciona tipagem estática ao JavaScript. O uso do TypeScript com React é vantajoso, pois fornece benefícios como detecção de erros mais cedo, autocompletar mais robusto e documentação mais clara.

### 2. Componentes em React:
Os componentes são a unidade básica de construção de interfaces no React. Eles podem ser funções ou classes que retornam elementos React (normalmente JSX). Aqui está um exemplo de um componente simples:

```tsx
import React from 'react';

function HelloComponent(props: { name: string }) {
  return <div>Hello, {props.name}!</div>;
}

export default HelloComponent;
```

Neste exemplo, `HelloComponent` é uma função que aceita uma propriedade `name` e retorna um elemento React que exibe uma saudação.

### 3. JSX:
JSX (JavaScript XML) é uma extensão da sintaxe JavaScript usada para descrever a estrutura de elementos React. Ele permite que você crie elementos de maneira semelhante ao HTML. No exemplo anterior, o código dentro das chaves `{props.name}` é uma expressão JSX que é avaliada e inserida no componente.

### 4. Props (Propriedades):
As propriedades (ou props) são os mecanismos usados para passar dados para componentes React. No exemplo acima, `name` é uma propriedade passada para `HelloComponent`. Você pode acessar as propriedades dentro do componente usando `props.name`.

### 5. Estado em Componentes:
Para gerenciar o estado interno de um componente, você pode usar `useState` (no caso de componentes funcionais) ou `this.state` (no caso de componentes de classe). O estado é usado para armazenar informações que podem mudar ao longo do tempo e acionar uma renderização quando são atualizadas.

Aqui está um exemplo de uso do `useState`:

```tsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default Counter;
```

Neste exemplo, `count` é o estado, e `setCount` é uma função que atualiza o estado. A função `useState` é usada para inicializar o estado.

## CARACTERISTICAS:
### Características Positivas:
1. **Tipagem Estática:** O TypeScript adiciona um sistema de tipagem estática ao JavaScript, o que ajuda a detectar erros em tempo de compilação. Isso pode levar a um código mais robusto e menos propenso a erros em tempo de execução.

2. **Autocompletar e Intellisense:** O TypeScript oferece um ambiente de desenvolvimento mais rico, com autocompletar de código, realce de erros e sugestões úteis, o que aumenta a produtividade do desenvolvedor.

3. **Manutenção Mais Fácil:** O uso de TypeScript torna o código mais legível e autodocumentado. As interfaces e tipos definidos explicitamente facilitam a compreensão do código e a manutenção.

4. **Integração com IDEs:** Muitas IDEs populares, como Visual Studio Code, têm suporte completo ao TypeScript, proporcionando uma experiência de desenvolvimento mais suave.

5. **Melhor Colaboração em Equipe:** A tipagem estática facilita a colaboração em equipe, pois os desenvolvedores podem entender rapidamente a estrutura de dados e as expectativas de um componente.

### Características Negativas:
1. **Curva de Aprendizado:** A introdução do TypeScript pode aumentar a curva de aprendizado, especialmente para desenvolvedores que não estão familiarizados com a tipagem estática.

2. **Código Mais Verboso:** O TypeScript pode exigir a definição de tipos e interfaces adicionais, tornando o código mais extenso em comparação com o JavaScript puro.

3. **Configuração Inicial Complexa:** Configurar um projeto React com TypeScript pode ser um pouco mais complexo do que configurar um projeto React com JavaScript. É necessário configurar arquivos de definição, tsconfig.json e bibliotecas de tipagem.

4. **Compatibilidade de Bibliotecas:** Embora a maioria das bibliotecas populares do ecossistema React tenha suporte para TypeScript, algumas bibliotecas mais antigas ou menos usadas podem não ter suporte total.

5. **Recursos Adicionais:** O uso do TypeScript pode adicionar alguma sobrecarga, já que você precisa aprender não apenas React, mas também TypeScript e suas especificidades.

