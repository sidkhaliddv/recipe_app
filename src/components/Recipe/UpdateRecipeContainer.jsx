import { useNavigate, useParams } from "react-router-dom"
import useRecipe from "../../hooks/useRecipe"
import RecipeForm from "./RecipeForm"
import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth"

const UpdateRecipeContainer = () => {
  const { recipeId } = useParams()
  const { currentUser } = useAuth()
  const { getRecipe, updateRecipe } = useRecipe()
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState(null)
  useEffect(()=>{
    (async ()=>{
      const r = await getRecipe(recipeId)
      console.log('e', r)
      if (!r || r.userId != currentUser.uid) {
        navigate('/not_found');
      }
      setRecipe(r)
    })()
  }, [])

  const validate = (values) => {
    const errors = {}

    if(!values.title) {
      errors.title = 'Title must not be empty'
    } else if (values.title.length < 3) {
      errors.title = 'Title must be atleast 3 characters long'
    }
    const stepsErrors = []
    values.steps.forEach((step, i)=>{
      const stepError = {}
      if(!step.step) {
        stepError.step = 'Step must not be empty'
        stepsErrors[i] = stepError
      } else if (step.step.length < 10){
        stepError.step = 'step must be of atleast 10 characters long'
        stepsErrors[i] = stepError
      }

    })
    if (stepsErrors.length > 0) errors.steps = stepsErrors;
    return errors
  }

  const handleSubmit = (values) => {
    updateRecipe(recipeId, values)
  }

  return (
    <>
      {recipe && <div className="mt-10 px-4 md:px-0">
        <h1 className="text-4xl md:w-2/3 mx-auto">Update a recipe...</h1>
        <RecipeForm
          initialValues={recipe}
          validate={validate}
          handleSubmit={handleSubmit} />
      </div>}
    </>
  )
}

export default UpdateRecipeContainer;
