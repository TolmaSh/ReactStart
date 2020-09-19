import React, {useState, useEffect,} from 'react';

const api = 'https://swapi.dev/api/'

function Starships(props) {
    const [data, setData] = useState(null)
    let {shipNumber , searchString} = props


    useEffect(() => {
        
            fetch(`${api}starships/${shipNumber}/`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.error('Ошибка:', error))
        
    }, [shipNumber, searchString])

    if (data?.name)
  return (
    
    <div className="api_wrapper">
    
     Starship name:  {data?.name} <br /><br />
     Model: {data?.model} <br /><br />
     Manufacturer:  {data?.manufacturer} <br /><br />
     Starship class:  {data?.starship_class}
     
     
    </div>
    );
    else {
      return (
      <div className="ApiNotFound">
        <h1>Starship is destroyed</h1>
      </div>
  );
    }
  
  }

export default Starships;