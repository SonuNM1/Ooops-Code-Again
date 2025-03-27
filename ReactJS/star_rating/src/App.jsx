import React from 'react'
import './App.css'
import Rating from './components/Rating'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Slider from './components/Slider'

const App = () => {

  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rating' element={<Rating/>} />
          <Route path='/slider' element={<Slider/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
