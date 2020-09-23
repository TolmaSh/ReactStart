import React, {useState, useEffect,} from 'react';

// const api = 'https://swapi.dev/api/'

function Starships(props) {
  const [data, setData] = useState()
  const [searchData, setSearchData] = useState([])
  let {shipNumber , searchString} = props


    useEffect(() => {
      if(searchString === "") {
          fetch(`https://swapi.dev/api/starships/${shipNumber}/`)
          .then(res => res.json())
          .then(res => setData(res))
          .catch(error => console.error('Ошибка:', error))}
          else {
          fetch(`https://swapi.dev/api/starships/?search=${searchString}`)
          .then(res => res.json())
          .then(res => setSearchData(res.results))
          .catch(error => console.error('Ошибка:', error))
          }
      
  }, [shipNumber, searchString, setSearchData])
  
  let starships = searchData.map(
    el => <li key={el.name} >Starship Name: {el.name}
    <br/></li> 
    ); 
    if (searchString !== '') {
      return (
        <div className="api_wrapper">
           {starships}
            
        </div>
    )
    }  else {
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
  );}
    }
  
  }

export default Starships;