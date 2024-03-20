import React from 'react'

type SubHeadingProps = {
    children : string,
    className? : string
}

const SubHeading = (props:SubHeadingProps) => {
  return (
    <h4 className={`font-poppins font-medium text-2xl my-2 ${props.className}`}>{props.children}</h4>
  )
}

export default SubHeading