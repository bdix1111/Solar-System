import React, { Component } from 'react';
import PlanetCard from './PlanetCard.js'

class PlanetList extends Component {

  state={
    planets: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/planets")
    .then(res => res.json())
    .then(planets => this.setState({planets: planets}))
  }

  render() {
    let planets = this.state.planets.map( planet => (
        <PlanetCard key={planet.id} planet={planet}/>
    ))

    return planets;
  }
}

export default PlanetList;
