import React, { Component } from 'react';

 class  EVENT_HANDLER_CLASS  extends  Component  {

constructor(props) {
super(props)
    
this.state = {


        changedValue : ''
    
}
}



    // handle__Click = () => {

    //     console.log("clicked");
    // }

    handle__On__Chnage = (e) => {

    

        this.setState({

            changedValue : e.target.value
            
        } ,  () => { // callback function


            


        console.log(this.state.changedValue);

        })

        //   console.log(e.target.value);
    }


render() {





    return (



    <div>

    {/* <button onClick = { this.handle__Click} > Click Here  </button> */}

    <input type = "text"  onChange={this.handle__On__Chnage}/>

    <p> { this.state.changedValue } </p>

    </div>
    )
}
}



export default EVENT_HANDLER_CLASS;
 