import React, { Component } from 'react';
import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';

class CONDITIONAL__RENDERING  extends Component {


    constructor(props) {
    super(props)
    
    this.state = {

    is__Logged__In : false
    


    }

    }



render() {

    const { is__Logged__In } = this.state;

    // let element;


// Ternary operator
//  element = is__Logged__In ? <HomePage /> : <LoginPage />


// if(is__Logged__In){

// element =  <HomePage  />

// }

// else{

// element = <LoginPage  />

// }

return(

<div>

{/* {element} */}

{/* ternary  operator direct in jsx */}
{ is__Logged__In ? <HomePage /> : <LoginPage /> }


</div>





)




}
}


export default CONDITIONAL__RENDERING;
