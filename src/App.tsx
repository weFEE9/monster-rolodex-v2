import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import './App.css';
import axios from 'axios';

import SearchBox from './components/search-box/search-box.component';


const fetchMonsters = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  return response.data;
};

type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>([]);

  const { data: monsters } = useQuery<Monster[]>(['monsters'], fetchMonsters);

  useEffect(() => {
    if (!monsters) return;

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
      <SearchBox
        placeholder='search monsters'
        onChangeHandler={handleSearchFieldChange}
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
