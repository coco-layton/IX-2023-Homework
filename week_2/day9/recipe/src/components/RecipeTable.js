import React from 'react';

export default function RecipeTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Time</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.recipes.map((recipe) => {
            return (
              <tr key={recipe.name}>
                <td>{recipe.name}</td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.time}</td>
                <td>
                    <div onClick={() => props.onRecipeDelete(recipe)}>
                        <button>Delete</button>
                    </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}