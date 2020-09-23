import React, {useState, useEffect,} from 'react';

// const api = 'https://swapi.dev/api/'

function Planets(props) {
  const [data, setData] = useState()
  const [searchData, setSearchData] = useState([])
  let {shipNumber , searchString} = props


    useEffect(() => {
      if(searchString === "") {
          fetch(`https://swapi.dev/api/planets/${shipNumber}/`)
          .then(res => res.json())
          .then(res => setData(res))
          .catch(error => console.error('Ошибка:', error))}
          else {
          fetch(`https://swapi.dev/api/planets/?search=${searchString}`)
          .then(res => res.json())
          .then(res => setSearchData(res.results))
          .catch(error => console.error('Ошибка:', error))
          }
      
  }, [shipNumber, searchString, setSearchData])
  
  let planets = searchData.map(
    el => <li key={el.name} >Planet Name: {el.name}
    <br/></li> 
    ); 

    if (searchString !== '') {
      return (
        <div className="api_wrapper">
           {planets}
            
        </div>
    )
    }  else {
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
  );}
    }
  
  }

export default Planets;