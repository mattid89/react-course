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

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 26 },
  //       { name: 'Stephanie', age: 31 }
  //     ]
  //   })
  // }
  

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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                name={person.name} 
                age={person.age} 
                click={this.deletePersonHandler.bind(this, index)}
                // mejor forma de hacerlos => usar arroy function puede ser poco eficiente
                // click={this.switchNameHandler.bind(this, 'Marta')}
                // changed={this.nameChangedHandler} 
              />
            )
          })}
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
