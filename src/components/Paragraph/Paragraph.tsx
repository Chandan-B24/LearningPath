import React from 'react'

type ParagraphsProps = {
    children : string,
    className? : string
}

const Paragraph = (props : ParagraphsProps) => {
  return (
    <p className={`text-[16px] mb-2 font-poppins text-justify font-extralight text-wrap leading-7 text-gray-500 ${props.className}`}>{props.children}</p>
  )
}

export default Paragraph