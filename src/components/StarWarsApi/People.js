import React, {useState, useEffect,} from 'react';

// const api = 'https://swapi.dev/api/'

function People(props) {
    const [data, setData] = useState()
    const [searchData, setSearchData] = useState([])
    let {shipNumber , searchString} = props


    useEffect(() => {
        if(searchString === "") {
            fetch(`https://swapi.dev/api/people/${shipNumber}/`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.error('Ошибка:', error))}
            else {
            fetch(`https://swapi.dev/api/people/?search=${searchString}`)
            .then(res => res.json())
            .then(res => setSearchData(res.results))
            .catch(error => console.error('Ошибка:', error))
            }
        
    }, [shipNumber, searchString, setSearchData , searchData])
    
    let peoples = searchData.map(
      el => <li key={el.name} >Name: {el.name}
      <br/></li> 
      ); 
      // В консоле элементы находит но выдает ошибку на странице

    if (searchString !== '') {
      return (
        <div>
           {peoples}
            
        </div>
    )
    }  else {
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
          );}
        }
  }

export default People;