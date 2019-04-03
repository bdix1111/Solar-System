import React, { Component } from 'react';


class PlanetCard extends Component {

  state={
    viewMoons: false
  }

  showTheMoons = () => {
    this.setState({viewMoons: !this.state.viewMoons})
  }

  render() {

    return (
      <div className="planet-card">
        <h1>{this.props.planet.name}</h1>
        <img src={this.props.planet.img} alt={this.props.planet.name}/>
        <h4>Completes a revolution around the sun in {this.props.planet["year-length"]}</h4>
        <button onClick={this.showTheMoons} className="button"><span role="img" aria-label="jsx-a11y/accessible-emoj">🌜🌝🌛</span></button>
        {this.state.viewMoons && <div>I have {this.props.planet.moons} moons!</div>}
      </div>
    );
  }
}

export default PlanetCard;
