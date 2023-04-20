import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import About from './Pages/About/About'
import Episodes from './Pages/Episodes/Episodes'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Episodes' element={<Episodes />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
