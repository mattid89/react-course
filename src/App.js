import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 26 },
      { id: '3', name: 'Stephanie', age: 29 }
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
  

  nameChangedHandler = (event, id) => {
    // obtengo el index de la persona con el id recibido por paramtro
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })
    // obtengo una copia de la persona con todos sus atributos con el spread operator, usando el personIndex
    const person = { ...this.state.persons[personIndex] };

    // Alternativa
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // cambio el nombre a la copia de mi objeto persona
    person.name = event.target.value;
    // obtengo una copia de mi array de personas
    const persons = [...this.state.persons];
    // actualizo la persona que corresponde usando personIndex de nuevo
    persons[personIndex] = person;
    // actualizo el state
    this.setState({
      persons: persons
    });
  }

  toggleNamesHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    // obtengo una copia del array de personas
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    // elimino la persona usando el index recibido por parametro en mi copia del array
    persons.splice(personIndex, 1);
    // actualizo el state
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
                changed={(event) => this.nameChangedHandler(event, person.id)} 
                key={person.id}
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
