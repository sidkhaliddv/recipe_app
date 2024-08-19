const Step = () => {
  return (
    <>
      <div className="step">
        <div className="w-full flex">
          <span className="bg-gray-200 inline-grid text-blue-900 p-2 items-center border-1 text-">1</span>
          <Field as='textarea' placeholder=' Add a love magic....' name='steps[0].step' className='bg-gray-100 w-full border-0 border-b-2 focus:border-blue-500 focus:outline-none text-md' />
        </div>
        <p className="mt-2 text-red-600 dark:text-red-500">{<ErrorMessage name='step' />}</p>
      </div>
    </>
  )
}

export default Step;
