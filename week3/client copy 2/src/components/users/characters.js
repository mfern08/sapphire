import React from 'react';
import './characters/css';

class Character extends Component{
  constructor(){
    super();
    this.state = {
      characters:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:4000/api/characters')
    .then( res => res.json())
    .then(characters => this.setState({characters}, () => console.log('Here are the characters', characters)));
 

  render() {
    return(
      <div>
      <h2>Character Names</h2>
      <ul>
        {this.state.characters.map(characters =>
          <li key={characters.id}>{characters.characterName} {characters.show}</li>)}
      </ul>
      
  </div>
  );

    }
  }
}
