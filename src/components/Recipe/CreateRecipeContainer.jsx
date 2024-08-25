import useRecipe from "../../hooks/useRecipe"
import RecipeForm from "./RecipeForm"

const CreateRecipeContainer = () => {
  console.log('in recipe creation')
  const { saveRecipe } = useRecipe()
  const initialValues = {title: '', steps: [{position: 1, step: ''}]}

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
    console.log('Recipe submitted', values)
    saveRecipe(values);
  }

  return (
    <>
      <div className="mt-10 px-4 md:px-0">
        <h1 className="text-4xl md:w-2/3 mx-auto">Create a recipe...</h1>
        <RecipeForm
          initialValues={initialValues}
          validate={validate}
          handleSubmit={handleSubmit} />
      </div>
    </>
  )
}

export default CreateRecipeContainer;
