import React, {useState} from 'react';

function MainMenu(props) {
    let {setShipNumber , setSearchString , searchString} = props
    const [input, setInput] = useState(0)
    
  return (
    <div className="main-menu">
      <div className="menu__button">
      <input type="number" 
             placeholder="search for number"
             onChange={(e) => setInput(e.target.value)
            } />
      <button onClick={() => setShipNumber(input)}> Click Me</button>

      <input type="text" 
             placeholder="search for symbol"
             onChange={(e) => setSearchString(e.target.value)}
              />
              </div>
              <input
                className="search-textarea"
                type='button'
                value='Save Symbol Storage'
                onClick={() => {localStorage.setItem('swapiSearch',searchString);} }/>
                 <input
                className="search-textarea"
                type='button'
                value='Clear'
                onClick={() => { localStorage.removeItem('swapiSearch'); setSearchString('') }} />
    </div>
  );
}



export default MainMenu;