import React from 'react'
import image from '../../assets/siteunder.png'
import Heading from '../Heading/Heading'
import Button from '../Buttons/Button'

const NotFound = () => {
  return (
    <div className='w-full h-[70vh] flex flex-col justify-center items-center'>
        <Heading>Site under cosntruction.</Heading>
        <div className='flex flex-col justify-center items-center'>
            <img src={image} alt="image" className='w-80 h-80'/>
            <Button clasName=' bg-black text-white p-3 rounded-xl'><a href="/">Go Back</a></Button>
        </div>
    </div>
  )
}

export default NotFound