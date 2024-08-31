import { useFormik } from "formik"
import RecipeSearch from "./RecipeSearch"
import useRecipe from "../../hooks/useRecipe"
import { useEffect, useState } from "react";

const RecipeSearchContainer = () => {
  const [recipes, setRecipes] = useState();
  const { search_recipes } = useRecipe()
  useEffect(()=>{
    document.addEventListener('click', ()=>{
      setRecipes(null)
    })
  }, [])
  const {submitForm, handleChange} = useFormik({
    initialValues: { title: '' },
    validate: (values) => {
      const errors = {}
      if(!values.title || values.title?.length < 3) {
        errors.title = 'title is required'
        setRecipes(null)
      }
      return errors;
    },
    validateOnBlur: true,
    onSubmit: async(values, {setSubmitting}) => {
      if(values.title.length==0) {
        setRecipes(null)
        return;
      }
      const r = await search_recipes(values.title)
      setRecipes(r)
      setSubmitting(false)
    }
  })
  
  return (
    <>
      <RecipeSearch recipes={recipes} handleChange={handleChange} submitForm={submitForm} />
    </>
  )
}

export default RecipeSearchContainer;
