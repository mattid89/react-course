import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {

    let btncls = [];
    if (props.showPersons) {
        btncls.push(classes.Red);
    }

    const posibleClasses = [];
    if (props.persons.length <= 2) {
      posibleClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      posibleClasses.push(classes.bold);
    }
    const assignedClasses = posibleClasses.join(' ');

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>

            <p className={assignedClasses} >Esto anda muy bien!</p>

            <button 
                className={btncls.join(' ')} 
                onClick={props.clicked} >Toggle Nombres</button>
        </div>
    );
};

export default cockpit;