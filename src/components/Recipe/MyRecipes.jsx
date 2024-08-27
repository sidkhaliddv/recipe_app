import { useEffect, useState } from "react";
import useRecipe from "../../hooks/useRecipe";
import { useAuth } from "../../hooks/useAuth";
import RecipeListView from "./RecipeListView";
import { useNavigate } from "react-router-dom";

const MyRecipes = () => {
  const { getUserRecipe } = useRecipe()
  const [recipes, setRecipes] = useState([])
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  useEffect(()=>{
    (async()=>{
      if(!currentUser) return;
      const r = await getUserRecipe(currentUser.uid)
      setRecipes(r)
      console.log(r)
    })()
  }, [currentUser])
  return (
    <>
      <div className="w-full md:w-5/6 mx-auto mt-10">
        <div className="flex justify-between">
          <h1 className="text-3xl">My Recipes</h1>
          <button className="border border-black bg-gray-200 p-3 hover:bg-gray-400 hover:text-white hover:border-white" type="button" onClick={()=>navigate('/recipes/new')}>Create Recipe</button>
        </div>
        { recipes && recipes.map((recipe)=>(
          <RecipeListView key={recipe.id} recipe={recipe} />
        )) }
      </div>
    </>
  )
}

export default MyRecipes;
