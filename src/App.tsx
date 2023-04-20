import './sass/app.sass';
import React from 'react';
import TextField from './UI/TextField';
import Dropdown from './UI/Dropdown';
import DateDropdown from './UI/DateDropdown';

function App() {
  return (
    <div className="App">
      <TextField />
      <Dropdown title="Сколько гостей" options={['спальни', 'кровати', 'ванные комнаты']} />
      <DateDropdown />
    </div>
  );
}

export default App;
