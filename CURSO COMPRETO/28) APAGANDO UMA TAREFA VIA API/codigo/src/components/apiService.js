import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001', // URL base da sua API
  timeout: 10000, // Tempo máximo de espera por uma resposta (10 segundos)
});

const apiService = {
  getPosts: () => apiClient.get('/posts'),
  getTasks: () => apiClient.get('/tasks'),
  createTask: (taskData) => apiClient.post('/tasks', taskData),
  updateTask: (taskId, taskData) => apiClient.put(`/tasks/${taskId}`, taskData),
  deleteTask: (taskId) => apiClient.delete(`/tasks/${taskId}`), // Nova função para deletar tarefa
};

export default apiService;
