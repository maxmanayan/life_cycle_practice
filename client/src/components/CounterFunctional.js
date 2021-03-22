import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';


const CounterFunctional = (props) => {
  const [count, setCount] = useState(0)
  const [showThing, setShowThing] = useState(false)
  const [isOdd, setIsOdd] = useState(false)


  // useEffect can be used for componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(()=>{

  },[])

  const addOne = () => {
    const newCountValue = count + 1
    setCount(newCountValue)
    setIsOdd(newCountValue % 2 !== 0)
  }

  const minusOne = () => {
    const newCountValue = count - 1
    setCount(newCountValue)
    setIsOdd(newCountValue % 2 !== 0)
  }

  const zeroOut = () => {
    const newCountValue = 0
    setCount(newCountValue)
    setIsOdd(newCountValue % 2 !== 0)
  }

  return(
    <Card header={props.header}>
      {/* <h1>{props.header}</h1> */}
      <p>count: {count}</p>
      <p>{isOdd ? "Odd" : "Even"}</p>
      <Button onClick={addOne}>Add One</Button>
      <Button onClick={minusOne}>Minus One</Button>
      <Button onClick={zeroOut}>Zero Out</Button>
      <Button onClick={()=>setShowThing(!showThing)}>Toggle</Button>
      {showThing && <p>Extra Thing</p>}
    </Card>
  )
}


export default CounterFunctional;