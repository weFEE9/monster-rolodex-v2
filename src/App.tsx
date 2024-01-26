import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import './App.css';
import axios from 'axios';

import SearchBox from './components/search-box/search-box.component';

import { Monster } from './components/card-list/card-list.component';
import CardList from './components/card-list/card-list.component';

const fetchMonsters = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  return response.data;
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
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
