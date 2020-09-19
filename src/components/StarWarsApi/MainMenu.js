import React, {useState} from 'react';

function MainMenu(props) {
    let {setShipNumber , setSearchString} = props
    const [input, setInput] = useState(0)
  return (
    <div className="main-menu">
      <div className="menu__button">
      <input type="number" 
             placeholder="search"
             onChange={(e) => setInput(e.target.value)
            } />
      <button onClick={() => setShipNumber(input)}> Click Me</button></div>
      <input type="text" 
             placeholder="search"
             onChange={(e) => setSearchString(e.target.value)
            } />
      
    </div>
  );
}

export default MainMenu;