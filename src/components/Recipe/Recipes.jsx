import { useEffect, useState } from "react";
import useRecipe from "../../hooks/useRecipe";
import RecipeListView from "./RecipeListView";

const Recipes = () => {
  const [recipes, setRecipes] = useState()
  const { getRecipes } = useRecipe()
  useEffect(()=>{
    (async()=>{
      const resp = await getRecipes()
      setRecipes(resp)
    })()
  }, [])
  return (
    <>
      <div className="w-full md:w-5/6 mx-auto mt-10">
        { recipes && recipes.map((recipe)=>(
          <RecipeListView key={recipe.id} recipe={recipe} />
        )) }
      </div>
    </>
  )
}

export default Recipes;
