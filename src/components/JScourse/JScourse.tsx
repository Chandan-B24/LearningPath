import React from 'react'
import Topbar from '../Topbar/Topbar'
import JSIntroduction from './JSIntroduction'
import JsArrays from './JsArrays'
import JSArrayMethods from './JSArrayMethods'
import { items } from '../../constatns/jscourse'



const JScourse:React.FC = () => {

  return (
    <>
        <Topbar heading='Javascript' items={items}/>
        <div className='px-7 md:px-10 lg:px-14'>
            {location.pathname === '/js' ? <JSIntroduction/> : null}
           {location.pathname === '/js/arrays' ? <JsArrays/> : null}
           {location.pathname === '/js/arraymethods' ? <JSArrayMethods/> : null}
        </div>
    </>
  )
}

export default JScourse