import React, { useState } from 'react';
import Recipe from './Recipe';
import './RecipeManager.css';

function RecipeManager() {

  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ name: "", ingredients: "", instructions: "" });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  }

  function addRecipe() {
    if (newRecipe.name.trim() !== "" && newRecipe.ingredients.trim() !== "" && newRecipe.instructions.trim() !== "") {
      setRecipes((r) => [...r, newRecipe]);
      setNewRecipe({ name: "", ingredients: "", instructions: "" });
    }
  }

  function deleteRecipe(index) {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  }

  return (
    <div className='recipe-manager'>
      <h1>Recipe Manager</h1>
      <div>
        <input type='text' placeholder="Enter recipe name..." name="name" value={newRecipe.name} onChange={handleInputChange} />
        <input type='text' placeholder="Enter ingredients..." name="ingredients" value={newRecipe.ingredients} onChange={handleInputChange} />
        <input type='text' placeholder="Enter instructions..." name="instructions" value={newRecipe.instructions} onChange={handleInputChange} />
        <button className='add-button' onClick={addRecipe}>Add Recipe</button>
      </div>
      <ol>
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} onDelete={() => deleteRecipe(index)}/>
        ))}
      </ol>
    </div>
  );
}

export default RecipeManager;
