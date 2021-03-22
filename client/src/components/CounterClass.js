import React from 'react'
import Button from './Button'
import Card from './Card'
import Count from './Count'

// class in js
class CounterClass extends React.Component {

    constructor(props){
        // call constructor in React.Component Class
       super(props)
       // we can create state obj here in constructor
       // define initial state here
       this.state = {
           counter: 0,
           showExtraThing: false,
           people: ({name: 'Max'}, {name: 'Buck'}),
           user: {email: 'cool@gmail.com'},
       }
    }

    // don't have to define but can
    // it will run this function after component mounts
    componentDidMount = () => {
        console.log('counter mounted')
        // axios call here to get data
    }


    componentDidUpdate = (prevProps, prevState) => {
      console.log('componentDidUpdate called')
      console.log('prevProps', prevProps)
      console.log('prevState', prevState)
    }


    addOne = () => {
      console.log('addOne Clicked')

      this.setState(
        {counter: this.state.counter + 1}
        )
    }

    minusOne = () => {
      console.log('minusOne Clicked')


      this.setState(
        {counter: this.state.counter - 1}
        )
    }

    zeroOut = () => {
      this.setState({
        counter: 0
      })
    }

    toggle = () => {
      this.setState({
        showExtraThing: !this.state.showExtraThing
      })
    }


    // React.Component Class makes us define this method
    render() {
        console.log('counter render called')
        return(
            <Card header={this.props.header}>
                {/* <h1>{this.props.header}</h1> */}
                {/* <p>counter: {this.state.counter}</p> */}
                <Count count={this.state.counter} />
                <Button onClick={this.addOne}>Add One</Button>
                <Button onClick={this.minusOne}>Minus One</Button>
                <Button onClick={this.zeroOut}>Zero Out</Button>
                <Button onClick={this.toggle}>Toggle</Button>
                {this.state.showExtraThing && <p>Extra Thing</p>}
            </Card>
        )
    }
}



export default CounterClass