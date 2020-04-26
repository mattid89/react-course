import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('Persons -> componentWillReceiveProps -> props', props);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'snapshot!'}
    }

    // el mas usado => cuando cargar nueva data por ejemplo desde una api
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Persons -> componentDidUpdate');
        console.log('Persons -> componentDidUpdate -> snapshot', snapshot);
        console.log('Persons -> componentDidUpdate -> prevState', prevState);
        console.log('Persons -> componentDidUpdate -> prevProps', prevProps);
    }


    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return (
                <Person 
                    name={person.name} 
                    age={person.age} 
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)} 
                    key={person.id}
                />
            )
        });
    }
}

export default Persons;