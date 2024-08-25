import { RecipeService } from "../services/firebase/RecipeService";
import { useAuth } from "./useAuth";

const useRecipe = () => {
  const { currentUser } = useAuth()
  const saveRecipe = async (newRecipe) => {
    const savedRecipe = await new RecipeService().save_recipe({...newRecipe, userId: currentUser.uid})
    console.log(savedRecipe)
  }

  const getRecipe = async (id) => {
    const recipe = await new RecipeService().get_recipe(id)
    return recipe
  }

  const updateRecipe = async(id, recipe) => {
    const savedRecipe = await new RecipeService().update_recipe(id, recipe)
    return savedRecipe;
  }

  return { saveRecipe, getRecipe, updateRecipe }
}

export default useRecipe;
