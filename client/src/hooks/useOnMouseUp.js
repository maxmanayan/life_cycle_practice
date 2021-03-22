import React, {useEffect} from 'react';


const useOnMouseUp = (eventCallBack) => {

  const handleEvent = (e) => {
    eventCallBack(e)
  }

  useEffect(()=>{
    window.addEventListener('mouseup', handleEvent)
    return () => {
      window.removeEventListener('mouseup', this.handleEvent)
    }
  },[])
}


export default useOnMouseUp;