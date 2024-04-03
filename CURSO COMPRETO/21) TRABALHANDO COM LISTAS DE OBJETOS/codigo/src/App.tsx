import React from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const todos = [
    { name: 'Comprar pão', completed: false },
    { name: 'Fazer exercícios', completed: true },
    { name: 'Ler um livro', completed: false }
  ];

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
