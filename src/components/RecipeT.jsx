import { Formik, useFormik } from "formik";

const validate = values => {
  const errors = {}
  if(!values.firstName) {
    errors.firstName = 'FirstName is required'
  }
  if (!values.lastName) {
    errors.lastName = 'LastName is required'
  }

  return errors;
}

const Recipe = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: ''
    },
    validate,
    onSubmit: (values) => {
      console.log(`form submitted ${JSON.stringify(values)}`)
    }
  })


  return (
    <>
      <div>
        <Formik 
          initialValues={{
            firstName: '',
            lastName: '',
          }}
          validate={(values)=>validate(values)}
          onSubmit={(values)=>{
            console.log(JSON.stringify(values))
          }}>
            {formik=>(
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="title">First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  id=""
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur} />
                {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                <br/>
                <label htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  id=""
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur} />
                {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                <br/>
                <button type="submit">Submit</button>
              </form>
            )}
        </Formik>
      </div>
    </>
  )
}

export default Recipe;
