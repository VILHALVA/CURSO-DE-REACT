import React, { useState, useEffect } from 'react';
import apiService from './components/apiService';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiService.getTasks(); // Usando a nova função para buscar tarefas
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
