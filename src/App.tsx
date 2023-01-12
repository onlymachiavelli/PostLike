import React , {useState, useEffect} from 'react' 

import Application from './pages/Application'



import {Routes, Route, BrowserRouter} from 'react-router-dom'
const App = () =>{
  return(
      <BrowserRouter>


          <Routes>
            <Route  path='/' element={<Application/>} />
          </Routes>
      </BrowserRouter>
  )
}



export default App 
