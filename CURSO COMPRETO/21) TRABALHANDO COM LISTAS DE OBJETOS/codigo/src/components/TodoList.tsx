import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" checked={todo.completed} readOnly />
          <span>{todo.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
