import React, { useState, useEffect } from 'react';
import apiService from './components/apiService';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);

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

  const handleEditTask = (task) => {
    setEditedTask(task);
  };

  const handleUpdateTask = async () => {
    try {
      const response = await apiService.updateTask(editedTask.id, editedTask);
      setTasks(tasks.map(task => (task.id === editedTask.id ? response.data : task)));
      setEditedTask(null);
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleEditTask(task)}>Editar</button>
          </li>
        ))}
      </ul>
      {editedTask && (
        <div>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          />
          <button onClick={handleUpdateTask}>Salvar</button>
          <button onClick={() => setEditedTask(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default App;
