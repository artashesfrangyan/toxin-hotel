import './sass/app.sass';
import React from 'react';
import TextField from './UI/TextField';
import Dropdown from './UI/Dropdown';

function App() {
  return (
    <div className="App">
      <TextField />
      <Dropdown title="Сколько гостей" options={['спальни', 'кровати', 'ванные комнаты']} />
    </div>
  );
}

export default App;
