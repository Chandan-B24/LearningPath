import React from 'react'


type ImageProps = {
    source : string,
    className : string
}

const Image = (props : ImageProps) => {

  return (
    <div className='w-full flex justify-center items-center mt-10 mb-10'>
        <img src={props.source} alt="image" className={`${props.className}`}/>
    </div>
  )
}

export default Image