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
        const recipe = new Recipe(data.name, data.ingredients, data.time);
        recipes.push(recipe);
      });
  
      return recipes;
    }
  
    async createRecipe(recipe) {
      const collectionRef = collection(db, this.collection);
  
      await addDoc(collectionRef, {
        name: recipe.name,
        ingredients: recipe.ingredients,
        time: recipe.time,
      });
  
      //task.id = docRef.id;
      return recipe;
    }
    
    // async updateRecipe(recipe) {
    //     const docRef = doc(db, this.collection, recipe.name);
    
    //     await updateDoc(docRef, {
    //       name: recipe.name,
    //       ingredients: recipe.ingredients,
    //       time: recipe.time,
    //     });
    
    //     return recipe;
    //   }
  
    async deleteRecipe(recipeName) {
      const docRef = doc(db, this.collection, recipeName);
      await deleteDoc(docRef);
    }
  }
  
  const service = new RecipeService();
  export default service;