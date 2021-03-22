import React, { useEffect } from 'react';
import MouseUp from '../components/MouseUp';
import useOnMouseUp from '../hooks/useOnMouseUp';


const FunctionalLifeCycle = () => {
  console.log('rendering jsx here')

  useOnMouseUp( () => console.log('mouse up'))
  
  useEffect(()=>{
    console.log('mounted')
  }, [])


  return(
    <div>
      <h1>FunctionalLifeCycle</h1>
      {/* <MouseUp onEvent={()=> console.log('mouse up')} /> */}
      <p>stuff</p>
    </div>
  )
}



export default FunctionalLifeCycle;