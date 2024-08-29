import { Link } from "react-router-dom";

const RecipeListView = ({recipe}) => {
  return (
    <>
      <Link to={`/recipes/${recipe.id}`}>
        <div className="border border-2 p-4 my-10 border-radius-2 hover:shadow-xl hover:border-cyan-600">
          <h1 className="text-3xl">{recipe.title}</h1>
          { console.log(recipe) }
          <p className="mt-9 text-1sm truncate">{recipe?.steps[0]?.step}</p>
        </div>
      </Link>
    </>
  )
}

export default RecipeListView;
