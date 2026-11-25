import React from 'react'
import About from './components/About'
import Image from './components/Image'
import Contact from './components/contact'

function App() {
  return (
    <div>
      <h1> Revathy Ajith </h1>
      <nav style ={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
        <a href="#about">About Me</a>
        <a href="#home">Home</a>
        <a href="#contact">Contact Me</a>
      </nav>
      <About />
      <Image />
      <Contact />
    </div>
  )
}

export default App
