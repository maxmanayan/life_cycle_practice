import React, { useEffect, useState } from 'react';
import axios from 'axios';


// functional component -- just a JS function
const Home = () => {

  // const [ballX, setBallX] = useState(0)
  // const [dX, setDX] = useState(4)

  // const tick = () => {
  //   console.log('ballX: ', ballX)

  //   let newBallX = ballX + dX

  //   setBallX(newBallX)
  // }

  // useEffect(()=>{
  //   setInterval(()=>{
  //     let ticker = tick()
  //   }, 1000)

  //   console.log('useEffect called')


  //   return(()=>{
  //     console.log('unmounted')
  //  })
  // }, [ballX])

 
  return(
    <div>
      <p>Nice</p> 
    </div>
  )
}

// class component
// class Home extends React.Component {
//   render(){
//     return(
//       <div>
//         <h1>Home</h1>
//       </div>
//     )
//   }
// }

export default Home;