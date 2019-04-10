import React, { Component } from 'react';
import MoonCard from './MoonCard'


class PlanetCard extends Component {

  state={
    viewMoons: false
  }

  showTheMoons = () => {
    this.setState({viewMoons: !this.state.viewMoons})
  }

  clickHeartHandler = (props) => {
    this.props.clickHeartHandler(this.props.planet)
  }

  clickBrokenHeartHandler = (props) => {
    this.props.clickBrokenHeartHandler(this.props.planet)
  }

  render() {

    return (
      <div className="planet-card">
        <h2>{this.props.planet.name}</h2>
        <img src={this.props.planet.img} alt={this.props.planet.name}/>
        <h4>Completes a revolution around the sun in {this.props.planet["year-length"]}</h4>
        <button onClick={this.showTheMoons} className="button"><span role="img" aria-label="jsx-a11y/accessible-emoj">🌜🌝🌛</span></button>
        {this.props.favorited ?
          <button onClick={this.clickBrokenHeartHandler} className="button"><span role="img" aria-label="jsx-a11y/accessible-emoj">💔</span></button> : <button onClick={this.clickHeartHandler} className="button"><span role="img" aria-label="jsx-a11y/accessible-emoj">💜</span></button>}
        {this.state.viewMoons && <MoonCard moons={this.props.planet.moons}/>}
      </div>
    );
  }
}

export default PlanetCard;
