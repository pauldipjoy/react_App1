import React, { Component } from 'react';
import './style.css';

export default class State extends Component {

constructor(props) {
super(props)

this.state = {
    count : 0
}
}






handle___Incriment = () => {

    //console.log("clicked");
    
this.setState( {

    count : this.state.count + 1
} )

}

handle___Decriment = () => {

    //console.log("clicked");

this.setState({

    count : this.state.count - 1
})

}






render() {


// destructuring-
const {count} = this.state

    return (
    <div>

        <h1> Count : {count} </h1>


    <button onClick = {this.handle___Incriment}  disabled = { count === 10 ? true : false }> + </button>
    <button onClick = {this.handle___Decriment}  disabled = { count === 0 ? true : false }> - </button>


    </div>
    )


}


}
