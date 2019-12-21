import React from 'react';

import './Person.css';
const Person = (props) => {

    return (
        <div className="person">
            <p onClick={props.click}>
                {props.name} : {props.age}
            </p>
            <p>
                {props.children}
            </p>
            <input type='text' value={props.name} onChange={props.changed}/>
        </div>
    )
}
export default Person;
