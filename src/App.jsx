import { useState } from 'react'
/* import reactLogo from './assets/react.svg' */
/* import viteLogo from '/vite.svg' */
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import EmailForm from './components/EmailForm/EmailForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Main/>
      <EmailForm/>
      <Footer/>
    </>
  )
}

export default App
