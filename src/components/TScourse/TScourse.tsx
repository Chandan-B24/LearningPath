import React from 'react'
import Topbar from '../Topbar/Topbar'
import TSintroduction from './TSintroduction'
import { itemsTS } from '../../constatns/tscourse'
import TSBasicTypes from './TSBasicTypes'
import TSInterface from './TSInterface'
import TStypes from './TStypes'
import TSArrays from './TSArrays'
import TSEnums from './TSEnums'

const TScourse:React.FC = () => {
  return (
    <>
      <Topbar heading='Typescript' items={itemsTS}/>
      <div className='px-7 md:px-10 lg:px-14'>
      {location.pathname === '/ts' ? <TSintroduction/> : null}
      {location.pathname === '/ts/basic' ? <TSBasicTypes/> : null}
      {location.pathname === '/ts/interface' ? <TSInterface/> : null}
      {location.pathname === '/ts/types' ? <TStypes/> : null}
      {location.pathname === '/ts/arrays' ? <TSArrays/> : null}
      {location.pathname === '/ts/enums' ? <TSEnums/> : null}
      </div>
    </>
  )
}

export default TScourse