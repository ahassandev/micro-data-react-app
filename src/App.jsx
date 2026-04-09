import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import AboutUs from './Components/AboutUs'
import ServicesAndProcess from './Components/ServicesAndProcess'
import CaseStudies from './Components/CaseStudies'
import ReviewsSection from './Components/ReviewsSection'
import PricingPlans from './Components/PricingPlans'
import ToolsAndInsights from './Components/ToolsAndInsights'
import AppFooter from './Components/AppFooter'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <ReviewsSection />
      <CaseStudies />
      <ServicesAndProcess />
      <PricingPlans />
      <ToolsAndInsights />
      <AppFooter />
    </>
  )
}

export default App
