import React, { useState, useEffect } from 'react';
import apiService from './components/apiService';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiService.getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const handleCreateTask = async () => {
    try {
      const response = await apiService.createTask({ title: newTaskTitle, completed: false });
      setTasks([...tasks, response.data]); // Adiciona a nova tarefa à lista de tarefas
      setNewTaskTitle(''); // Limpa o campo de entrada
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    }
  };

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Digite o título da nova tarefa"
      />
      <button onClick={handleCreateTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
