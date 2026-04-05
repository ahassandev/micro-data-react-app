import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import AboutUs from './Components/AboutUs'
import ReviewsSection from './Components/ReviewsSection'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <ReviewsSection />
    </>
  )
}

export default App
