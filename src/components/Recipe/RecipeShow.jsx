import { useNavigate } from "react-router-dom";

const RecipeShow = ({ recipe, canEdit }) => {
  const navigate = useNavigate()
  console.log('show', recipe.id)
  return (
    <>
      <div className="p-4 md:w-4/5 mx-auto">
        <div className="flex justify-between">
          <h1 className="text-4xl">{recipe.title}</h1>
          {canEdit && <button onClick={()=>navigate(`/recipes/${recipe.id}/edit`)} type="button" className="border text-1xl p-3 bg-gray-200 hover:bg-gray-400 hover:text-white">Edit</button>}
        </div>
        <div className="mt-10">
          { recipe.steps.map((step)=>(
            <div key={step.position} className="flex flex-column border my-7 hover:shadow-xl">
              <div className="flex">
                <span className="inline-grid items-center px-6 bg-gray-200">{step.position}</span>
                <p className="p-2">{step.step}</p>
              </div>
            </div>
          )) }
        </div>
      </div>
    </>
  )
}

export default RecipeShow;
