import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

const RecipeSearch = ({recipes, submitForm, handleChange}) => {
  const navigate = useNavigate()
  return (
    <>
    <div className="relative">
      <form className="">
        <input type="text" name="title" placeholder="Search Recipes..." className="ml-2 p-2 bg-gray-200 border border-cyan-400 rounded-lg focus:outline-none hover:shadow-xl hover:border-cyan-600 focus:shadow-xl focus:border-cyan-600"
          onChange={(e)=>{
            handleChange(e);
            submitForm();
          }} />
      </form>
      { recipes && <div className="w-full absolute bg-gray-200 border ml-3 max-h-80 overflow-auto">
          { recipes.map((recipe)=>(
            <li key={recipe.id} 
              className="list-none p-2 mt-2 border-b border-white hover:shadow-xl hover:border hover:border-cyan-600 hover:cursor-pointer" 
              onClick={()=>navigate(`/recipes/${recipe.id}`)}>
                {recipe.title}
            </li>
          )) }
      </div>}
    </div>
     
    </>
  )
}

export default RecipeSearch;
