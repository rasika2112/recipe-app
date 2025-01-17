import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return ( 
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <ol>
                {ingredients.map(ing => (
                    <li >{ing.text}</li>
                ))}
            </ol>
            <p><h3>Calories: &nbsp;</h3>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
     );
}
 
export default Recipe;