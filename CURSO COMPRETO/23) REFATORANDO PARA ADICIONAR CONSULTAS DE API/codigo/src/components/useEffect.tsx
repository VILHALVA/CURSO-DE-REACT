import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Executa apenas uma vez, quando o componente é montado

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/posts');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
