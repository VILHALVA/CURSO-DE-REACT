import React from 'react';
import PeopleList from './components/PeopleList';

const App = () => {
  const people = [
    { name: 'João' },
    { name: 'Maria' },
    { name: 'José' }
  ];

  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <PeopleList people={people} />
    </div>
  );
};

export default App;
