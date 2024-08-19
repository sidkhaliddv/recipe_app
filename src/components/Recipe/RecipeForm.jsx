import { ErrorMessage, Field, Formik, Form, FieldArray, useFormikContext } from "formik";

const RecipeForm = ({initialValues, validate, handleSubmit}) => {
  return (
    <>
      <div className="mt-7">
        <Formik 
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit} >
            <Form className="w-full md:w-2/3 mx-auto mt-4">
              <div className="relative z-0 w-full mb-5">
                <Field placeholder='Recipe Title....' name='title' type='text' id='floating_title' className='bg-gray-100 w-full border-0 border-b-2 focus:border-blue-500 focus:outline-none text-5xl' />
                <p className="mt-2 text-red-600 dark:text-red-500">{<ErrorMessage name="title" />}</p>
              </div>

              <div className="mt-20">
                <h1 className="text-1xl content-center">Step by step guide to make this recipe....</h1>
              </div>

              <div className="steps mt-8">
                <FieldArray
                  name='steps'
                  render={({push, remove, form}) => (
                    <div>
                      {form.values.steps && form.values.steps.length > 0 ? (
                        form.values.steps.map((step, index)=>(
                          <div key={index} className="flex flex-col mt-5">
                            <div className="w-full flex">
                              <span className="bg-gray-200 inline-grid text-blue-900 p-2 items-center border-1 text-">{step.position}</span>
                              <Field as='textarea' placeholder=' Add a love magic....' name={`steps[${index}].step`} className='bg-gray-100 w-full border-0 border-b-2 focus:border-blue-500 focus:outline-none text-md' />
                              <button type="button" className="bg-red-500 px-3 text-white" onClick={()=>remove(index)}>Delete</button>
                            </div>
                            <div>
                            <p className="mt-2 text-red-600 dark:text-red-500">{<ErrorMessage name={`steps[${index}].step`} />}</p>
                            </div>
                          </div>
                        ))
                      ) : <p className="text-red">No Steps were found {':('}</p>}
                      <div className="flow-root">
                        <button type="button" onClick={()=> push({position: form.values.steps.length+1, step: ''})} className="float-right p-2 border border-outline border-gray-200 bg-gradient-to-br hover:text-dark focus:outline-none hover:bg-gray-100">
                          Add Step
                        </button>
                      </div>
                    </div>
                  )} />
              </div>
              <div className="w-full">
                <button type="submit" className="w-full bg-gray-100 mt-10 float-right p-2 border border-outline border-gray-200 bg-gradient-to-br hover:text-dark focus:outline-none hover:bg-gray-100">Submit</button>
              </div>
            </Form>
        </Formik>
      </div>
    </>
  )
}

export default RecipeForm;
