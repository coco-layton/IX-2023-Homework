import {
    collection,
    addDoc,
    query,
    getDocs,
    doc,
    deleteDoc,
    //updateDoc,
  } from 'firebase/firestore';

  
  import { db } from '../firebase/firebase';
  import { Recipe } from '../models/recipe';
  
  class RecipeService {
    constructor() {
      this.collection = 'recipes';
    }
  
    async fetchTasks() {
      const collectionRef = collection(db, this.collection);
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
  
      const recipes = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log("type: " + typeof(data));
        const recipe = new Recipe(data.name, data.ingredients, data.time, doc.id);
        recipes.push(recipe);
      });
  
      return recipes;
    }
  
    async createRecipe(recipe) {
      const collectionRef = collection(db, this.collection);
  
      const docRef = await addDoc(collectionRef, {
        name: recipe.name,
        ingredients: recipe.ingredients,
        time: recipe.time,
      });

      recipe.id = docRef.id;
      return recipe;
    }
  
    async deleteRecipe(recipeId) {
      const docRef = doc(db, this.collection, recipeId);
      await deleteDoc(docRef);
    }
  }
  
  const service = new RecipeService();
  export default service;