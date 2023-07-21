import React, { useState } from 'react';

export default function RecipeInput(props) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [time, setTime] = useState('');

  function onRecipeInputSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
        return;
    }
    
    props.onRecipeCreate(name, ingredients, time);

    // clear inputs
    setName('');
    setIngredients('');
    setTime('');

    
  }

  function isValid() {
    return name !== '' && (ingredients !== '') & (time !== '');
  }

  return (
    <div>
      <form onSubmit={onRecipeInputSubmit}>
      <div className="mb-3">
        <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Enter Recipe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <input
            id="ingredients"
            type="text"
            className="form-control"
            placeholder="Enter Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <input
            id="time"
            type="text"
            className="form-control"
            placeholder="Enter Time To Make"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          ></input>
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}