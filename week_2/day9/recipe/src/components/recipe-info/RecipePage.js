import React, { useState, useEffect } from 'react';

// Model imports
import { Recipe } from '../../models/recipe';

// Component imports
import RecipeInput from './RecipeInput';
import RecipeTable from './RecipeTable';

// Service imports
import RecipeService from '../../services/recipe-service';

export default function RecipePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!recipes.length) {
        onInitalLoad();
      }
    });
  
    async function onInitalLoad() {
      try {
        const recipes = await RecipeService.fetchRecipes();
        setRecipes(recipes);
      } catch (err) {
        console.log(err);
      }
    }

  async function onRecipeCreate(name, ingredients, time, id) {
    const recipe = await RecipeService.createRecipe(new Recipe(name, ingredients, time, id));
    setRecipes([...recipes, recipe]);
  }

  async function onRecipeDelete(recipe) {
    await RecipeService.deleteRecipe(recipe.id);
    setRecipes(recipes.filter((x) => x.id !== recipe.id));
  }

  
  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <h1>Recipe List</h1>
        <hr />

        <RecipeInput onRecipeCreate={onRecipeCreate} />
        <RecipeTable
          recipes={recipes}
          onRecipeDelete={onRecipeDelete}
        />
      </div>
    </div>
  );
}