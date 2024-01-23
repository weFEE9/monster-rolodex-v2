import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [name, setName] = React.useState('Angus');

  const changeNameToBoB = () => {
    // use the setName function to change actually change the value of name
    setName('Bob');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hi {name}!</p>
        <button onClick={changeNameToBoB}>Change Name</button>
      </header>
    </div>
  );
};

export default App;
