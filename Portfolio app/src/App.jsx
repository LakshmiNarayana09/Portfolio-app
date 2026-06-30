import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import ProjectPage from './components/project/ProjectPage'
import ProjectDescription from './components/project-description/ProjectDescription'
import About from './components/about/About'
import Contactus from './components/contact/Contactus'
import Gallery from './components/gallery/Gallery'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/project" element={<ProjectPage />}/>
        <Route path="/project/:id" element={<ProjectDescription />} />
      
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </div>
    
  )
}

export default App
