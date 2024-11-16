import React from 'react';

function Recipe({ recipe, onDelete}) {
    return (
        <div className='eecipe'>
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients: </strong>{recipe.ingredients}</p>
            <p><strong>Instructions: </strong>{recipe.instructions}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Recipe;