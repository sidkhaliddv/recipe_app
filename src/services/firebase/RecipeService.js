import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "../../../firebase";

const COLLECTION_NAME = 'recipes'

class RecipeService {
  constructor(){}

  async save_recipe(recipe) {
    console.log('recipe', recipe)
    if (!recipe.userId) return null;

    try {
      const collectionRef = collection(db, COLLECTION_NAME)
      const savedRecipe = await addDoc(collectionRef, recipe)
      console.log('recipe saved')
      return savedRecipe
    } catch(e) {
      console.log(e)
    }
  }
}

export {
  RecipeService
}
