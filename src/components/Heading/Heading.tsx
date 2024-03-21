import React from 'react'


type HeadingProps = {
    children : string,
    className? : string
}

const Heading = (props : HeadingProps) => {
  return (
     <h4 className={`font-poppins font-medium text-xl lg:text-3xl my-2 ${props.className}`}>{props.children}</h4>
  )
}

export default Heading