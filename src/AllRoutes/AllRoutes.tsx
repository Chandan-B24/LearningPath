import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import JScourse from '../components/JScourse/JScourse'
import TScourse from '../components/TScourse/TScourse'

const AllRoutes : React.FC = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/"  Component={Home} />
            <Route path="/js/*"  Component={JScourse} />
            <Route path="/ts/*"  Component={TScourse} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default AllRoutes