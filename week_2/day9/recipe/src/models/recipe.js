export class Recipe {
    constructor(name, ingredients, time) {
      this.name = name;
      this.ingredients = ingredients;
      this.time = time;
    }
  
    static fromJSON(json) {
      return new Recipe(json.name, json.ingredients, json.time);
    }
  }