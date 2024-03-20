import React from 'react'
import { Link } from 'react-router-dom'


type  Course =  {
    courseName : string,
    courseDescription : string,
    coursePath : string,
    courseImage : string
}



const Card:React.FC<Course> = ({courseName,courseDescription,coursePath,courseImage}) => {

  return (
        <>
            <div className="p-4 border border-solid rounded-xl shadow-md">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-32 h-32 object-cover object-center sm:mb-0 mb-4" src={courseImage}/>
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-xl text-gray-900 font-poppins">{courseName}</h2>
                    <p className="text-[14px] text-gray-500 font-poppins font-light mt-2">{courseDescription}</p>
                    <Link type="button" to={coursePath} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 me-2 mt-2">Explore</Link>
                </div>
                </div>
            </div>
        </>
  )
}

export default Card
