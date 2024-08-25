import { RecipeService } from "../services/firebase/RecipeService";
import { useAuth } from "./useAuth";

const useRecipe = () => {
  const { currentUser } = useAuth()
  const saveRecipe = async (newRecipe) => {
    const savedRecipe = await new RecipeService().save_recipe({...newRecipe, userId: currentUser.uid})
    console.log(savedRecipe)
    // if (savedRecipe) return savedRecipe;

    // throw "Recipe was not saved"
  }

  return { saveRecipe, }
}

export default useRecipe;
