import { Link } from "react-router-dom";

const RecipeListView = ({recipe}) => {
  return (
    <>
      <Link to='/'>
        <div className="border border-2 p-4 my-10 border-radius-2 hover:shadow-xl">
          <h1 className="text-3xl">{recipe.title}</h1>
          <p className="mt-3 text-1sm truncate">{recipe.steps[0].step + "asdasdasdasdasdasdasdasdasdasdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}</p>
        </div>
      </Link>
    </>
  )
}

export default RecipeListView;
