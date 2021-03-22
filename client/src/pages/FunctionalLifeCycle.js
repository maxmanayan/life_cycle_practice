import React, { useEffect } from 'react';


const FunctionalLifeCycle = () => {
  console.log('rendering jsx here')
  
  useEffect(()=>{
    console.log('mounted')
  }, [])
  
  return(
    <div>
      <h1>FunctionalLifeCycle</h1>
    </div>
  )
}



export default FunctionalLifeCycle;