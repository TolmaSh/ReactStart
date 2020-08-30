import React from 'react';




function AboutContent(props) {
  const {setIsVisable , isCounter , setIsCounter, setStateCounter, stateCounter } = props;
  return (
    <div className="App">
      
       <h2>Counter : {isCounter}<br/>
       <button onClick={() => setIsVisable(true)}>
         Click Me , i`m open modal</button><br/>
         <button onClick={() => {
         setIsCounter(isCounter + 1)  
         }
         }>Click me, I up you counter</button>
       </h2><br/><br/>

       
    </div>
  );
}

export default AboutContent;
