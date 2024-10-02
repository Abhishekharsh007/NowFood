import React from 'react';
import style from "./food.module.css";

const Food = (props) => {
    return(
        <div className={style.food}>
            <h1>{props.title}</h1>
            <ol>
                {
                    props.ingredients.map(ingredient => (
                        <li>
                            {ingredient.text}
                        </li>
                    ))
                }
            </ol>
            <a href={props.url} target="_blank" rel="noreferrer">Cooking Techniques</a>
            <p>
                <b> {props.calories} cal </b>
            </p>
            <img src={props.image} alt=""/>
        </div>
    );
}

export default Food;