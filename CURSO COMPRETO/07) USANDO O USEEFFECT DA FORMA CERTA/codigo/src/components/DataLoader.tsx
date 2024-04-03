import React, { useState, useEffect } from 'react';

const DataLoader: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulando uma chamada à API
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Este array vazio indica que o useEffect será executado apenas uma vez, após a montagem do componente

  return (
    <div>
      <h2>Dados Carregados</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {data && data.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataLoader;
