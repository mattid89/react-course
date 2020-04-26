import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 26 },
      { id: '3', name: 'Stephanie', age: 29 }
    ],
    otroAtributoDelState: 'algun texto',
    showPersons: false
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('App -> componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App -> shouldComponentUpdate');
    return true;
}

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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />;
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.toggleNamesHandler}
          />
          {persons}
        </div>
    );
  };
  // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Ahora si anda...'))
}

export default App;
