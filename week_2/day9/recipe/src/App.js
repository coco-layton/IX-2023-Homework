import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// model imports
import { Recipe } from './models/recipe';

// component imports
import RecipeInput from './components/RecipeInput';
import RecipeTable from './components/RecipeTable';

// service imports
import RecipeService from './services/recipe-service' //DO THIS

function App() {
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

  async function onRecipeCreate(name, ingredients, time) {
    const recipe = await RecipeService.createRecipe(new Recipe(name, ingredients, time));
    setRecipes([...recipes, recipe]);
  }

  async function onRecipeDelete(recipe) {
    await RecipeService.deleteRecipe(recipe.name);
    setRecipes(recipes.filter((x) => x.name !== recipe.name));
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

export default App;