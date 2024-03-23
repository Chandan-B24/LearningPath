import React from 'react'
import { Button, Dropdown } from 'antd';
import { items } from '../../constatns/jscourse';
import { IoEyeOutline } from "react-icons/io5";


type TopbarProps = {
  heading : string,
  items : any
}


const Topbar:React.FC<TopbarProps> = (props) => {

  const items = props.items

  return (
    <div className='flex justify-between items-center w-full px-7 md:px-10 lg:px-14 py-4'>
        <h3 className='text-4xl font-poppins'>{props.heading}</h3>
        <Dropdown menu={{items}} placement="bottom" arrow trigger={['click']}>
          <Button className='flex gap-2 items-center'><IoEyeOutline/>Preview</Button>
        </Dropdown>
    </div>
  )
}

export default Topbar