import logo from './logo.svg';
import React from "react";
import './App.css';
import Pokedex from './Pokedex';
import Pokecard from './Pokecard';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        items: []
    };
  }


  componentDidMount() {
    let pokemonsAPI = ["ponyta", "azurill", "centiskorch", "torchic"]
    let newArr = [];
    pokemonsAPI.map(item => {
      console.log(item)
      fetch("https://pokeapi.co/api/v2/pokemon/" + item)
      .then((res) => res.json())
        .then((json) => {
            newArr.push(json)
            console.log(newArr);
            this.setState({
              items: newArr
              // DataisLoaded: true
            });
        })
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon API</h1>
        <p>Estos pokemones y su información ha sido retraída desde la API <a href="https://pokeapi.co/">https://pokeapi.co/</a> </p>

        <div className="row">
          {this.state.items.map(item => {
            return (
              <div className="col-3">
                <div className="card shadow-sm rounded">
                  <img className="card-img-top" alt="" src={item.sprites.front_default} />
                  <div className="card-body text-center">
                    <h5>{item.species.name}</h5>
                    <p>Type: {item.types[0].type.name}</p>
                    <p>EXP: {item.base_experience}</p>
                  </div>
                </div>
              </div>
            )})}
        </div>
        <Pokedex />
      </div>
    );
  }
}

export default App;
