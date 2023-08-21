import React from 'react'
import Intro from '../../../public/images/illustration-intro.png'
import './Hero.css'

function Hero() {
  return (
    <header className="introduction">
        <img className="header-intro-image"src={Intro} alt="ilustracion" />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <button>Get Started</button>
    </header>
  )
}

export default Hero