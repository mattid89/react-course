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
    otroAtributoDelState: 'algun texto'
  }

  switchNameHandler = () => {
    // console.log('hice click');
    this.setState({
      persons: [
        { name: 'Matias', age: 28 },
        { name: 'Manu', age: 26 },
        { name: 'Stephanie', age: 31 }
      ]
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>Probando un texto</p>

        <button onClick={this.switchNameHandler} >Cambiar Nombre</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

        {/* <div className="card-wrapper">
          {this.state.persons.map( person => {
            return (
              <div className="card">
                <div className="container">
                  <h4><b>{person.name}</b></h4> 
                  <p>Profesión: Architect & Engineer</p> 
                  <p>Edad: {person.age}</p>
                </div>
              </div>
            )
          })}
        </div> */}
      </div>
    );
  };
  // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Ahora si anda...'))
}

export default App;
