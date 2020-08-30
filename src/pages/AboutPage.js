import React , {useState, useEffect} from 'react';
import AboutContent from '../components/AboutContent';
import AboutMenu from '../components/AboutMenu';
import AboutModal from '../components/AboutModal';



function AboutPage() {
  const [isVisable, setIsVisable] = useState(false)
  const [isCounter, setIsCounter] = useState(0)
  const [stateCounter, setStateCounter] = useState([0,0])

  useEffect(() => {

    if (isVisable) {
      setIsCounter(0)
      
      
      
    }
    
    if(isCounter >= 10 && !isVisable) {
      setIsVisable(true) 
      setStateCounter([stateCounter[0] , stateCounter[1] + 1])
      
    }

    

  }, [isCounter , isVisable , stateCounter, setStateCounter])
  return (
    <div className="about-page">
      
       <>
       <AboutContent
       isVisable={isVisable}
       setIsVisable={setIsVisable}
       isCounter={isCounter}
       setIsCounter={setIsCounter}
       setStateCounter={setStateCounter}
       stateCounter={stateCounter}

       />
       <AboutMenu/>
       <AboutModal
       isVisable={isVisable}
       setIsVisable={setIsVisable}
       stateCounter={stateCounter}
       setStateCounter={setStateCounter}
       />
       </>
    </div>
  );
}

export default AboutPage;
