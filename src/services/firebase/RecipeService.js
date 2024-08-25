import { collection, addDoc, getDocs, getDoc, doc, updateDoc } from "firebase/firestore"; 
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
      return savedRecipe
    } catch(e) {
      console.log(e)
    }
  }

  async get_recipe(id) {
    console.log(id)
    if(!id) return null;

    const recipe = await getDoc(doc(db, COLLECTION_NAME, id))
    if (recipe.exists()){
      return recipe.data()
    } else {
      return null;
    }
  }

  async update_recipe(id, recipe) {
    if(!id) return null;

    const updatedRecipe = updateDoc(doc(db, 'recipes', id), recipe)
    return updatedRecipe
  }
}

export {
  RecipeService
}
