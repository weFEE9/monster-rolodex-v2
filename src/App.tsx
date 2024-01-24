import React from 'react';
import './App.css';

type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = React.useState('');
  const [monsters, setMonsters] = React.useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = React.useState<Monster[]>([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users: Monster[]) => setMonsters(users));
  }, []);

  React.useEffect(() => {
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

  const handleSearchFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.toLocaleLowerCase();
    setSearchField(value);
  };

  return (
    <div className='App'>
      <input
        className='search-box'
        type='search'
        placeholder='Search monsters'
        onChange={handleSearchFieldChange}
      />
      {filteredMonsters.map((monster) => {
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
