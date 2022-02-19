import React from "react";
import EVENT_HANDLER_CLASS from './EVENT_HANDLER_CLASS/index.js';




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

                  {/* <h1 className ="head__Style"> HELLO! React </h1>
      
                {Data.map ( (item , index) => <Card   key= {index}  titleText =  {item.title}  deceText = {item.dece}  footerSection = {item.footer} /> )} */}


                 {/* {items} */} 


              {/* <Card1  name = "card1" dece = "this is card1" />
              <Card2  name = "card2" /> */}



              {/* <State />  */}



              {/* <CONDITIONAL__RENDERING  /> */}
              


              <EVENT_HANDLER_CLASS     />




                {/* <Card  titleText =  {Data[0].title}  deceText = {Data[0].dece}  footerSection = {Data[0].footer} />   */}
                {/* <Card  titleText =  {Data[1].title}  deceText = {Data[1].dece}  footerSection = {Data[1].footer} />   */}
                {/* <Card  titleText =  {Data[2].title}  deceText = {Data[2].dece}  footerSection = {Data[2].footer} />   */}
                
      
                  

    </div>
      

  

        


}

export default App;
