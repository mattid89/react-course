import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 26 },
      { name: 'Stephanie', age: 29 }
    ],
    otroAtributoDelState: 'algun texto',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 26 },
        { name: 'Stephanie', age: 31 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 26 },
        { name: 'Stephanie', age: 29 }
      ]
    })
  }

  toggleNamesHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid grey',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
          />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            // mejor forma de hacerlos => usar arroy function puede ser poco eficiente
            click={this.switchNameHandler.bind(this, 'Marta')}
            changed={this.nameChangedHandler}
          />
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} 
          />
        </div>
      );

    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>Esto anda muy bien!</p>

        <button
          style={style} 
          // onClick={() => this.switchNameHandler('Matias')} >Cambiar Nombre</button>
          onClick={this.toggleNamesHandler} >Toggle Nombres</button>
          {persons}
      </div>
    );
  };
  // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Ahora si anda...'))
}

export default App;
