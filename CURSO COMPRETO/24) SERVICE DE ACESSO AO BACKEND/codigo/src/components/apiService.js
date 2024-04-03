import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001', // URL base da sua API
  timeout: 10000, // Tempo máximo de espera por uma resposta (10 segundos)
});

const apiService = {
  getPosts: () => apiClient.get('/posts'),
  getTasks: () => apiClient.get('/tasks'), // Nova função para buscar tarefas
};

export default apiService;
