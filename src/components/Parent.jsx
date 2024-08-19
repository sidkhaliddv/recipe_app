const Parent = ({children, props}) => {
  console.log(children.length)
  return (
    <>
      {typeof children === 'function' ? children('hi') : children}
    </>
  )
}

export default Parent;
