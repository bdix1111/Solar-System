import React from 'react';
import PlanetCard from './PlanetCard.js'

const Favorites = (props) => {

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {props.favorites.map((planet => <PlanetCard key={planet.id} planet={planet} favorited clickBrokenHeartHandler={props.clickBrokenHeartHandler}/>))}
    </div>
  )


}

export default Favorites;
