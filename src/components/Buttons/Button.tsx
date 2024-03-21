import React from 'react'

type ButtonProps = {
    handelClick ? : () => void,
    clasName : string,
    children? : React.ReactNode | string
}


const Button = (props : ButtonProps) => {
  return (
   
    <button className={props.clasName} onClick={props.handelClick}>{props.children}</button>
  )
}

export default Button