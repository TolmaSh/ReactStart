import React, {useState, useEffect,} from 'react';

const api = 'https://swapi.dev/api/'

function Planets(props) {
    const [data, setData] = useState(null)
    let {shipNumber , searchString} = props


    useEffect(() => {
        
            fetch(`${api}planets/${shipNumber}/`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.error('Ошибка:', error))
        
    }, [shipNumber, searchString])

    if (data?.name)
  return (
    
    <div className="api_wrapper">
    
     Planet name:  {data?.name} <br /><br />
     Climate: {data?.climate} <br /><br />
     Terrain:  {data?.terrain} <br /><br />
     Orbital period:  {data?.orbital_period}
     
     
    </div>
    );
    else {
      return (
        <div className="ApiNotFound">
        <h1>Planet Not Found</h1>
      </div>
  );
    }
  
  }

export default Planets;