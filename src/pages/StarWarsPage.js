import React, {useState} from 'react';
import People from '../components/StarWarsApi/People'
import Planets from '../components/StarWarsApi/Planets'
import PlanetsList from '../components/StarWarsApi/PlanetsList'
import Starships from '../components/StarWarsApi/Starships'
import MainMenu from '../components/StarWarsApi/MainMenu'

function StarWarsPage(props) {
    const [shipNumber, setShipNumber] = useState(9)
  return (
    <div className="main-page">
        <MainMenu 
        shipNumber={shipNumber}
        setShipNumber={setShipNumber}
        />
        <div className="StarWarsApi">
        <People 
        shipNumber={shipNumber}
        />
        <Planets
        shipNumber={shipNumber}
        />
        <Starships
        shipNumber={shipNumber}
        /> 
        </div>
        <PlanetsList
        shipNumber={shipNumber}
        /> 
    </div>
  );
}

export default StarWarsPage;
