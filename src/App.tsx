import React from 'react';
import './App.css';

type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = React.useState<Monster[]>([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users: Monster[]) => setMonsters(users));
  }, []);

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
