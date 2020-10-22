import React, {useState} from 'react';
import People from '../components/StarWarsApi/People'
import Planets from '../components/StarWarsApi/Planets'
import PlanetsList from '../components/StarWarsApi/PlanetsList'
import Starships from '../components/StarWarsApi/Starships'
import MainMenu from '../components/StarWarsApi/MainMenu'

function StarWarsPage(props) {
    const [shipNumber, setShipNumber] = useState(9)
    const [searchString, setSearchString] = useState(localStorage.getItem('swapiSearch') || '');
  
   
    
  return (
    <div className="main-page">
        <MainMenu 
        shipNumber={shipNumber}
        setShipNumber={setShipNumber}
        searchString={searchString}
        setSearchString={setSearchString}
        />
        <div className="StarWarsApi">
        <People 
        shipNumber={shipNumber}
        searchString={searchString}
        />
        <Planets
        shipNumber={shipNumber}
        searchString={searchString}
        />
        <Starships
        shipNumber={shipNumber}
        searchString={searchString}
        /> 
        </div>
        <PlanetsList
        // shipNumber={shipNumber}
        /> 
    </div>
  );
}

export default StarWarsPage;
