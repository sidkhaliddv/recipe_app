import { collection, addDoc, getDocs, getDoc, doc, updateDoc, query, where, startAt, startAfter, limit, orderBy, endAt } from "firebase/firestore"; 
import { db } from "../../../firebase";

const COLLECTION_NAME = 'recipes'
const PAGINATION_LIMIT = 2

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
      return ({...recipe.data(), id: recipe.id})
    } else {
      return null;
    }
  }

  async update_recipe(id, recipe) {
    if(!id) return null;

    const updatedRecipe = updateDoc(doc(db, 'recipes', id), recipe)
    return updatedRecipe
  }

  async get_user_recipes(userId, last="Create a recipe...") {
    if (!userId) return null;

    const recipeQuery = query(collection(db, 'recipes'), where('userId', '==', userId))
    const recipesDocs = await getDocs(recipeQuery)
    const recipes = recipesDocs.docs.map((recipe)=>({id: recipe.id, ...recipe.data()}))
    return recipes
  }

  async get_reipes() {
    const recipes = await getDocs(collection(db, 'recipes'))
    return recipes.docs.map((recipe)=>({...recipe.data(), id: recipe.id}))
  }

  async search_recipes(title) {
    console.log('title', title)
    const q = query(collection(db, 'recipes'), orderBy('title'), startAt(title), endAt(title+'\uf8ff'));
    const recipes = await getDocs(q);
    return this.map_recipes(recipes);
  }

  map_recipes(recipes) {
    return recipes.docs.map((recipe)=>({...recipe.data(), id: recipe.id}))
  }
}

export {
  RecipeService
}
