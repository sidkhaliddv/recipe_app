import { Field, Formik, Form, ErrorMessage } from "formik";

const Login = ({initialValues, validate, handleLogin}) => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-full sm:w-5/6 lg:w-2/4 m-auto">
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleLogin} >
              <Form className="w-5/6 sm:w-2/1 md:w-5/6 mx-auto mt-4 flex flex-col border-2 border-dark-200 py-4">
                <h1 className="text-4xl mx-auto align-items-stretch">Login</h1>
                <div className="py-32">
                  <div className="w-5/6 mx-auto sm:w-1/2">
                    <Field placeholder='Email...' name='email' type='email' className="bg-gray-200 w-full p-2 border-2 focus:outline-none focus:border-blue-500" />
                    <p className="w-full sm:w-1/2 text-red-600"><ErrorMessage name='email' /></p>
                  </div>
                  <div className="w-5/6 mx-auto sm:w-1/2 mt-5">
                    <Field placeholder='Password...' type='password' name='password' className="bg-gray-200 w-full p-2 border-2 focus:outline-none focus:border-blue-500" />
                    <p className="w-full text-red-600"><ErrorMessage name='password' /></p>
                  </div>
                  <div className="w-5/6 mx-auto sm:w-1/2 mt-5">
                    <button type="submit" className="w-full border py-2 bg-gray-200 ">Login</button>
                    <div className="mt-5">
                      <p className="w-full text-5 m-2">Dont have an account, <span className="text-blue-600">Register</span></p>
                    </div>
                  </div>
                </div>
              </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Login;
