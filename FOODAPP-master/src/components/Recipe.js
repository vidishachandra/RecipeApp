//import react from "react";



import React from "react";
import style from './recipe.module.css';

import HeartCheckbox from 'react-heart-checkbox';
 
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
 
  onClick = (event, props) => {
    this.setState({ checked: !this.state.checked });
    
  }
 
  render() {
    const { checked } = this.state;
    
    return (
      <>
        <h1>{checked ? 'Favourite' : ''}</h1>
        <HeartCheckbox checked={checked} onClick={this.onClick} />
      </>
    );
  }
}

const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1 className={style.heart}>{title}</h1>
            <div className={style.heart}><Demo title={title}/></div>
            
            <img className={style.image} src={image} alt=""/> 

            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
              
<p>Calories : {calories}</p>
  
            
        </div>
    );
}
export default Recipe;
