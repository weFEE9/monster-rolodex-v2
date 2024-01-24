import React from 'react';
import './App.css';

const App = () => {
  const monsters = [
    {
      id: '1',
      name: 'Linda',
    },
    {
      id: '2',
      name: 'Frank',
    },
    {
      id: '3',
      name: 'Jacky',
    },
  ];

  return (
    <div className='App'>
      {monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default App;
