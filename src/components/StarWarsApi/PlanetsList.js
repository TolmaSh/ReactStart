import React, {useState, useEffect,} from 'react';
import ReactPaginate from 'react-paginate';






function PlanetsList(props) {
    const [data, setData] = useState([])
    // const api = `https://swapi.dev/api/planets/`
    const [page, setPage] = useState(1)
    let pagBtn = (btnNum) => setPage(btnNum.selected + 1);
    
    // let {shipNumber} = props
    


    useEffect(() => {
        
            fetch(`https://swapi.dev/api/planets/?page=${page}`)
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(error => console.error('Ошибка:', error))
        
    }, [page])

   let planetsMap = data.map(el => <li key={el.name} >Name: {el.name} 
    <br/>Rotation Period: {el.rotation_period} 
    <br/>Orbital Period: {el.orbital_period}<br/><br/></li> );
  // //   Отображение половины элементов
  // //  let planetsFilt = planetsMap.filter((el, index) => index % 2);
     
  return (
    
    <div className="api_wrapper">
    
     <ul className="Planet-wrapper">
       {planetsMap}
       
     </ul>
     
     <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={5}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={pagBtn}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        /> 
    </div>
    ); 
    
  
  }

export default PlanetsList;