import React from 'react'

class Count extends React.Component{

    componentDidMount(){
        console.log('Count mounted')
    }

    componentDidUpdate(){
        console.log('Count update')
    }


    render(){
        console.log('Count render')
        return(
            <p>{this.props.count}</p>
        )
    }
}



export default Count