import React, { Component } from 'react';

 class  EVENT_HANDLER_CLASS  extends  Component  {

    constructor(props) {
      super(props)
    
      this.state = {


        changeValue : ""
    
      }
    }



    // handle__Click = () => {

    //     console.log("clicked");
    // }

    handle__On__Chnage = (e) => {
       
       

        this.setState({

            changeValue : e.target.value
        } , () =>{

          console.log(this.state.changeValue);

        })

        //   console.log(e.target.value);
    }


render() {





    return (



    <div>

    {/* <button onClick = { this.handle__Click} > Click Here  </button> */}

    <input type = "text"  onChange={this.handle__On__Chnage}/>

    <p>{this.state.changeValue}</p>

    </div>
    )
}
}



export default EVENT_HANDLER_CLASS;
