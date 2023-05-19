import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home/Home'
import Contactme from './pages/Contactme/Contactme'
import Portfolio from './pages/Portfolio/Portfolio'
import About from './pages/About/About'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return<BrowserRouter>
  <Navbar/>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}  />
    <Route path='portfolio' element={<Portfolio/>}  />
    <Route path='about' element={<About/>}  />
    <Route path='Contactme' element={<Contactme/>}  />

  
  </Routes>
  </BrowserRouter>
  
}

export default App
