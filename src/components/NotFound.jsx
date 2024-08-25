const NotFound = () => {
  return (
    <>
      <div className="mt-40">
        <h1 className="text-3xl font-sans w-fit mx-auto">The <span className="text-blue-600">{"{ resource }"}</span> you are looking for does not exists ;(</h1>
      </div>
    </>
  )
}

export default NotFound;
