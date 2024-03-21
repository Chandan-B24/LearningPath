import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';


const Navbar:React.FC = () => {
  return (
    <div className='w-screen h-[60px] bg-white rounded-md shadow px-14'>
        <div className='w-full h-full flex justify-between items-center'>
            <h4 className='font-medium font-pj text-2xl cursor-pointer font-poppins'><a href='/'>Daily Tracker</a></h4>
                <Button clasName='flex items-center gap-2 bg-gray-100 p-2 rounded-md text-[13px] font-poppins font-light'><FaRegUser/>Chandan B</Button>
        </div>
    </div>
  )
}

export default Navbar

