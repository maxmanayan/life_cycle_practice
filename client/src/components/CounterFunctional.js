import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';


const CounterFunctional = (props) => {
  const [count, setCount] = useState(0)
  const [showThing, setShowThing] = useState(false)


  // useEffect can be used for componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(()=>{

  },[])

  const addOne = () => {
    setCount(count + 1)
  }

  const minusOne = () => {
    setCount(count - 1)
  }

  const zeroOut = () => {
    setCount(0)
  }

  return(
    <Card header={props.header}>
      {/* <h1>{props.header}</h1> */}
      <p>count: {count}</p>
      <Button onClick={addOne}>Add One</Button>
      <Button onClick={minusOne}>Minus One</Button>
      <Button onClick={zeroOut}>Zero Out</Button>
      <Button onClick={()=>setShowThing(!showThing)}>Toggle</Button>
      {showThing && <p>Extra Thing</p>}
    </Card>
  )
}


export default CounterFunctional;