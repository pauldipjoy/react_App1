import React, { Component } from 'react'

export default class EVENT_BINDING extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count : 0
      }

      this.handle__Click = this.handle__Click.bind(this) // bind in contractor



    }

    handle__Click() {   // normal function no es6 arrow function call thats segemnt we used bind() function


        this.setState({

            count: this.state.count + 1

        })
    }



  render() {

    const {count} = this.state




    return (


      <div>

           <h1>{this.state.count}</h1>

          <button onClick={this.handle__Click} disabled = { count === 10 ? true : false} > increase </button>




      </div>




    )






  }
}
