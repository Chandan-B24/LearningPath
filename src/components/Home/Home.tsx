import React from 'react'
import Card from './Card'
import { course } from '../../constatns/course'

const Home:React.FC = () => {

  return (
    <>
      <div className='mx-5 my-10'>
        <center><h1 className='text-4xl font-poppins font-semibold'>Learning Paths</h1></center>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 m-4 mb-24'>
          {
            course?.map((item)=>{
              return <Card key={item.id} courseName={item.name} courseDescription={item.description} coursePath={item.path} courseImage={item.image}/>
            })
          }
      </div>
    </>
  )
}

export default Home

