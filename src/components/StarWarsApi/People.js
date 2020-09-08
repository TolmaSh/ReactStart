import React, {useState, useEffect,} from 'react';

const api = 'https://swapi.dev/api/'

function People(props) {
    const [data, setData] = useState(null)
    let {shipNumber} = props


    useEffect(() => {
        
            fetch(`${api}people/${shipNumber}/`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.error('Ошибка:', error))
        
    }, [shipNumber])

    if (data?.name)
  return (
    
    <div className="api_wrapper">
    
     Name:  {data?.name} <br /><br />
     Gender:  {data?.gender} <br /><br />
     Birth year:  {data?.birth_year} <br /><br />
     Height: {data?.height}
     
     
     
    </div>
    );
    else {
      return (
      <div className="ApiNotFound">
        <h1>People Not Found</h1>
      </div>
  );
    }
  
  }

export default People;