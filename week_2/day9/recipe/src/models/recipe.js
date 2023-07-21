export class Recipe {
    constructor(name, ingredients, time, id) {
      this.name = name;
      this.ingredients = ingredients;
      this.time = time;
      this.id = id;
    }
  
    static fromJSON(json) {
      return new Recipe(json.name, json.ingredients, json.time, json.id);
    }
  }