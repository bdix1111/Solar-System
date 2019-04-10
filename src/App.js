import React, { Component } from 'react';
import './App.css';
import PlanetList from './PlanetList.js'
import Header from './Header.js'
import Favorites from './Favorites.js'
import Search from './SearchBar.js'
import NewPlanet from './NewPlanet.js'

class App extends Component {

  state={
    planets: [],
    favorites: [],
    filter: "nopref"
  }

  componentDidMount() {
    fetch("http://localhost:3000/planets")
    .then(res => res.json())
    .then(planets => this.setState({planets: planets}))
  }

  clickHeartHandler = (planetObj) => {
    let newArray = [...this.state.favorites, planetObj]
    this.setState({favorites: newArray})
  }

  searchHandler = (props) => {
    this.setState({filter: props.value})
  }

  clickBrokenHeartHandler = (planetObj) => {
    let newArray = [...this.state.favorites].filter((planet) => planet.id !== planetObj.id)
    this.setState({favorites: newArray})
  }

  submitHandler = (newplanetObj) => {
    console.log(newplanetObj)
    let newArray = [newplanetObj, ...this.state.planets]
    this.setState({planets: newArray})
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="lists">
          <Search searchHandler={this.searchHandler}/>
          <NewPlanet submitHandler={this.submitHandler}/>
        </div>
        <div className="lists">
          <PlanetList planets={this.state.planets} clickHeartHandler={this.clickHeartHandler} filter={this.state.filter}/>
          <Favorites favorites={this.state.favorites} clickBrokenHeartHandler={this.clickBrokenHeartHandler}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
