import React from 'react';

function Card({ recipe }) {
    return (
        <article className="recipe-card">
            <h2>{recipe.strMeal}</h2>
            <p>Origine: {recipe.strArea}</p>
            <img src={recipe.strMealThumb} alt={"image du plat " + recipe.strMeal} />
        </article>
    );
}

export default Card;