import React from "react";
import Card from "./components/Card.js";
import Data from "./data.json";

function App() {

  //console.log(Data[1].titleText);

   //const items = [];
  // for( let i = 0 ; i < Data.length ; i++){

  //   items.push( <Card  titleText =  {Data[i].title}  deceText = {Data[i].dece}  footerSection = {Data[i].footer} />)


// mapping
  // items = Data.map ( (item) => {<Card  titleText =  {item.title}  deceText = {item.dece}  footerSection = {item.footer} /> })


  

   return <div>
      <h1 className ="head__Style"> HELLO! React </h1>
     {Data.map ( (item , index) => <Card   key= {index}  titleText =  {item.title}  deceText = {item.dece}  footerSection = {item.footer} /> )}
      
      {/* {items} */}

    </div>

        


}

export default App;
