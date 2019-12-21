import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    person : [
      {id : 'dcdcd', name : 'maxoooooo', age : 28},
      {id : 'fvl;fv', name : 'HamoooOOt XD xd', age : 208},
      {id : 'dcpdkclo', name : 'خيويخهو', age : 104}
    ],
    phone : [
      '07775000',
      '468465453'
    ]
  };
  switchNAmeHandler = (r) => { 
    console.log('clicked');
    let xx = Math.random() * 335;
    this.setState({
      person : [
        {name : r, age : xx},
        {name : 'HamoooOOt XD xd', age : 208},
        {name : 'خيويخهو', age : xx}
      ]
    })   
  }
  nameChangedHandler = (event, id) => {
    const personIndx = this.state.person.findIndex(p => p.id === id);
    const person = {...this.state.person[personIndx]};
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndx] = person;
    this.setState({person : persons});
  }

  deletePersonHandler = (index) => {
    const person = this.state.person.slice();
    person.splice(index,1);
    this.setState({person});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }
  render() {
    const style = {
      backgroundColor : '#f5dc42',
      font : 'inherit',
      border : '.1em solid #689456',
      padding : '8px'
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                key={person.id}
                changed={event => this.nameChangedHandler( event , person.id)}
                />
          })}
        </div>
      );
      style.backgroundColor = 'green';
    }
    let classes = [];
    if (this.state.person.length <= 2) {
      classes.push('red');
    }
    return (
        <div className="App">
          <h1>Hi يبعموو</h1>
          <p className={classes}>I'm Perrrsson يبخاااال</p>
          <button style={style} onClick={this.togglePersonsHandler}>Switch name</button>
          {persons}
          <hr/>
          <h3>{this.state.phone[0]}</h3>
          <h3>{this.state.phone[1]}</h3>
        </div>
    );
  }
}

export default App;
