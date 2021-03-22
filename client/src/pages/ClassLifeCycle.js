import React from 'react'
import Button from '../components/Button'
import CounterClass from '../components/CounterClass'
import CounterFunctional from '../components/CounterFunctional'

// class in js
class ClassLifeCycle extends React.Component {

    constructor(props){
        // call constructor in React.Component Class
       super(props)
    }

    // shorthand way of defining constructor
    // state = {x: 'state here'}


    // don't have to define but can
    // it will run this function after component mounts
    componentDidMount = () => {
        console.log('ClassLifeCycle mounted')
        // axios call here to get data
    }


    componentWillUnmount = () => {
      console.log('ClassLifeCycle unmount called')
    }


   
    // React.Component Class makes us define this method
    render() {
        console.log('render called')
        return(
            <div>
                <h1>ClassLifeCycle</h1>
                <CounterClass header='Class Counter 1' />
                <CounterFunctional header='Functional Counter 1' />
            </div>
        )
    }
}
export default ClassLifeCycle