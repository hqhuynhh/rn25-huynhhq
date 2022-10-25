import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Detail from './Detail'
import Form from './Form'
import ListPage from './ListPage'
import Navi from './Navi'

function Practive() {
  return (
    <BrowserRouter>
    {/*<div><Link to={'/list'}>List</Link></div>
    <div><Link to={'/form'}>Form</Link></div>
  <div><Link to={'/detail'}>Detail</Link></div>*/}
    <Navi />
   
        <Routes>
            <Route path='/list' element={<ListPage/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/detail' element={<Detail/>}/>
            <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 Page not found 😂😂😂</p>
              </main>   
            }
          />

        </Routes>
    </BrowserRouter>
  )
}

export default Practive