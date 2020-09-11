import React from 'react';




function AboutContent(props) {
  const {setIsVisable , isCounter , setIsCounter } = props;
  return (
    <div className="App">
      <div className="about-wrapper">
       <h2>Counter : {isCounter}<br/>
       <button onClick={() => setIsVisable(true)}>
         Click Me , i`m open modal</button><br/>
         <button onClick={() => {
         setIsCounter(isCounter + 1)  
         }
         }>Click me, I up you counter</button>
       </h2></div>
       <br/><br/>

       
    </div>
  );
}

export default AboutContent;
