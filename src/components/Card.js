// const titleText = "welcome to react family";
// const deceText = "Gubergren ipsum justo sed diam et aliquyam tempor sed accusam";
// const footer = "Vois renversée humain me dit";



function Card(props) {

  //console.log(props);

  // destructuring-
  const {titleText , deceText , footerSection } = props


    return  <div className ='card'>


    <h2 className ='card__title'> { titleText } </h2>
    <p className ='card__dece' > { deceText } </p>
    <p className ='card__footer'> { footerSection } </p>


    
  </div>

    



}

export default Card;
