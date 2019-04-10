import React, { Component } from 'react';
import PlanetCard from './PlanetCard.js'

class PlanetList extends Component {

  filterPlanets = () => {
    if (this.props.filter === "nopref") {
      return this.props.planets
    } else if (this.props.filter === "zero") {
      return this.props.planets.filter((planet) => planet.moons === 0)
    } else if (this.props.filter === "ten") {
      return this.props.planets.filter((planet) => planet.moons > 0 && planet.moons <= 10)
    } else if (this.props.filter === "hundred") {
      return this.props.planets.filter((planet) => planet.moons > 10)
    }
  }

  renderPlanets = (planets) => {
    return planets.map( planet =>
        <PlanetCard key={planet.id} planet={planet} clickHeartHandler={this.props.clickHeartHandler}/>
    )
  }

  render() {
    return (
      <div className="planet-list">
        <h1>Planets</h1>
        <div>{this.renderPlanets(this.filterPlanets())}</div>
      </div>
    )
  }
}

export default PlanetList;
