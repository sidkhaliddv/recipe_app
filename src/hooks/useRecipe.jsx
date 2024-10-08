import { RecipeService } from "../services/firebase/RecipeService";
import { useAuth } from "./useAuth";

const useRecipe = () => {
  const { currentUser } = useAuth()
  const saveRecipe = async (newRecipe) => {
    const savedRecipe = await new RecipeService().save_recipe({...newRecipe, userId: currentUser.uid})
    console.log(savedRecipe)
  }

  const getRecipe = async (id) => {
    console.log('recipe found')
    const recipe = await new RecipeService().get_recipe(id)
    return recipe
  }

  const updateRecipe = async(id, recipe) => {
    const savedRecipe = await new RecipeService().update_recipe(id, recipe)
    return savedRecipe;
  }

  const getUserRecipe = async(userId) => {
    const recipes = await new RecipeService().get_user_recipes(userId)
    return recipes;
  }

  const getRecipes = async () => {
    const recipes = await new RecipeService().get_reipes()
    return recipes;
  }

  const search_recipes = async (title) => {
    const recipes = await new RecipeService().search_recipes(title);
    return recipes;
  }

  return { saveRecipe, getRecipe, updateRecipe, getUserRecipe, getRecipes, search_recipes }
}

export default useRecipe;
