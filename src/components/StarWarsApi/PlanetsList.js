import React, {useState, useEffect,} from 'react';
// import ReactPaginate from 'react-paginate';





function PlanetsList(props) {
    const [data, setData] = useState([])
    const [api, setApi] = useState (`https://swapi.dev/api/planets/`)
    const pagBtn = (btnNum) => setApi(`https://swapi.dev/api/planets/?page=${btnNum}`)
    
    // let {shipNumber} = props
    


    useEffect(() => {
        
            fetch(api)
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(error => console.error('Ошибка:', error))
        
    }, [api])

   let planetsMap = data.map(el => <li key={el.name}>Name: {el.name} 
    <br/>Rotation Period: {el.rotation_period} 
    <br/>Orbital Period: {el.orbital_period}<br/><br/></li> );
   let planetsFilt = planetsMap.filter((el, index) => index % 2);
     
  return (
    
    <div className="api_wrapper">
    
     <ul>
       {/* {data.map(el => <li key={el.name}>Name: {el.name} 
       <br/>Rotation Period: {el.rotation_period} 
       <br/>Orbital Period: {el.orbital_period}<br/><br/></li> )} */}
       {planetsFilt}
     </ul>
     <button onClick={() => pagBtn(1)}>1</button>
     <button onClick={() => pagBtn(2)}>2</button>
     <button onClick={() => pagBtn(3)}>3</button>
    </div>
    ); 
    
  
  }

export default PlanetsList;