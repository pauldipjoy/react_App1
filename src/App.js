import React from "react";
import Card from "./components/Card.js";
import Card1 from "./components/Card1.js";
import Card2 from "./components/Card2.js";
import Data from "./data.json";
import State from "./State.js";

function App() {

  //console.log(Data[1].title);

// data access from json file-

   //let items = [];
  // for( let i = 0; i < Data.length; i++){

  //   items.push( <Card  titleText =  {Data[i].title}  deceText = {Data[i].dece}  footerSection = {Data[i].footer} />)


// mapping()-

  // items = Data.map( (item) => {

  //   <Card  titleText =  {item.title}  deceText = {item.dece}  footerSection = {item.footer} 
    
  //   /> 

  // });


  

   return <div>

                  <h1 className ="head__Style"> HELLO! React </h1>
      
                {Data.map ( (item , index) => <Card   key= {index}  titleText =  {item.title}  deceText = {item.dece}  footerSection = {item.footer} /> )}


                 {/* {items} */} 


                 <Card1  name = "card1" dece = "this is card1" />
                 <Card2  name = "card2" />



                 <State />




                {/* <Card  titleText =  {Data[0].title}  deceText = {Data[0].dece}  footerSection = {Data[0].footer} />   */}
                {/* <Card  titleText =  {Data[1].title}  deceText = {Data[1].dece}  footerSection = {Data[1].footer} />   */}
                {/* <Card  titleText =  {Data[2].title}  deceText = {Data[2].dece}  footerSection = {Data[2].footer} />   */}
                
      
                  

    </div>
      

  

        


}

export default App;
