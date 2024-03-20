import React from 'react'
import { IconType } from 'react-icons'

type FooterProps = {
    links : {
        id : number,
        link : string,
        icon : IconType
    }[]
}


const Footer = (props:FooterProps) => {

  return (    
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 items-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://chandanportfolio24.netlify.app/" className="hover:underline">Chandan B™</a>. Made with ❤️.
            </span>
            <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0">
              {props.links.map((item)=>{
                const IconComponent = item.icon;
              return (
                <li key={item.id} className='flex justify-center items-center'> 
                    <a href={`${item.link}`} className="text-lg mx-3"><IconComponent/></a>
                </li>
                ) 
            })}
            </ul>
        </footer>
  )
}

export default Footer