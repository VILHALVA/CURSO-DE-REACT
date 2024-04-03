import React from 'react';

const PeopleList = ({ people }) => {
  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}>{person.name}</li>
      ))}
    </ul>
  );
};

export default PeopleList;
