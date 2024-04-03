import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001', // URL base da sua API
  timeout: 10000, // Tempo máximo de espera por uma resposta (10 segundos)
});

const apiService = {
  getPosts: () => apiClient.get('/posts'),
  // Adicione outras funções para acessar endpoints da sua API aqui
};

export default apiService;
