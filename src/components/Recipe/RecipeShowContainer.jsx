import { useNavigate, useParams } from "react-router-dom";
import useRecipe from "../../hooks/useRecipe";
import { useEffect, useState } from "react";
import RecipeShow from "./RecipeShow";
import { useAuth } from "../../hooks/useAuth";

const RecipeShowContainer = () => {
  const { recipeId } = useParams()
  const { getRecipe } = useRecipe()
  const [recipe, setRecipe] = useState(null)
  const [canEdit, setCanEdit] = useState(false)
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  useEffect(()=>{
    (async()=>{
      const recipe = await getRecipe(recipeId);
      if (!recipe) navigate('/not_found')
      if (recipe) {
        console.log(recipe)
        setRecipe(recipe)
        if (recipe.userId == currentUser?.uid) setCanEdit(true);
      }
    })()
  }, [currentUser, recipeId])
  return (
    <>
      {recipe && <RecipeShow recipe={recipe} canEdit={canEdit} />}
    </>
  )
}

export default RecipeShowContainer;
