import React from 'react';
import style from './recipe.module.css';
import { v4 as uuidv4 } from 'uuid';

const Recipe = ({ recipe }) => {

    const {label, calories, image, ingredients} = recipe;

    return (
        <div className={style.card}>
            <h1>{label}</h1>
            <div className={style.recipe}>
                <ol className={style.list}>
                    <h3>Ingredients:</h3>
                    {ingredients.map((ingredient) => (
                        <li key={uuidv4()}>
                            {ingredient.text}
                        </li>
                    ))}
                </ol>
                <h3>{Math.round(calories)} cal</h3>
                <img className={style.image} src={image} alt={label} />
            </div>
        </div>
    )
}

export default Recipe
