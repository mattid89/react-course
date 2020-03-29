import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <p>Probando un texto</p>
      <Person name="Max" age="28" />
      <Person name="Manu" age="26">
        My Hobbies: Racing
      </Person>
      <Person name="Stephanie" age="29" />
    </div>
  );
  // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Ahora si anda...'))
}

export default App;
