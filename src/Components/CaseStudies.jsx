import { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const caseStudiesData = [
  {
    id: 1,
    title: "Professional Website\nDesign & Development Services",
    caseStudy: "Devsouls Case Study",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Clean And Professional Visual Design",
      "Mobile Responsive Layout",
      "Fast Loading Pages",
      "Clear Service Structure And CTAs",
      "SEO Optimized Content And Setup"
    ]
  },
  {
    id: 2,
    title: "Digital Marketing &\nSEO Growth Strategies",
    caseStudy: "TechCorp SEO Campaign",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Organic Traffic Growth by 150%",
      "Targeted Keyword Optimization",
      "High Quality Link Building",
      "Comprehensive Site Audit",
      "Monthly Performance Tracking"
    ]
  },
  {
    id: 3,
    title: "Custom Web Application\nDevelopment Solutions",
    caseStudy: "NextGen App Launch",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Scalable Cloud Architecture",
      "Real-time Data Processing",
      "Interactive Dashboard Setup",
      "Seamless API Integrations",
      "Enhanced Security Protocols"
    ]
  }
]

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === caseStudiesData.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? caseStudiesData.length - 1 : prevIndex - 1
    )
  }

  const currentStudy = caseStudiesData[currentIndex]

  return (
    <section className="bg-green-950 pt-20 pb-0 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 md:w-12 h-0.5 bg-lime-400"></span>
              <h3 className="text-lime-400 text-lg font-medium tracking-wide">Case Studies</h3>
              <span className="block w-8 md:w-12 h-0.5 bg-lime-400"></span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.3] mt-2">
              Crafting Exceptional Digital<br />
              Products For Brands That<br />
              Lead Change
            </h2>
          </div>
          
          <div className="md:w-5/12 flex flex-col justify-end pt-2 md:pt-10">
            <p className="text-gray-300 text-[15px] mb-6 leading-relaxed">
              We Craft Exceptional Digital Products Focused On
              Usability, Performance, And Visual Clarity, Supporting
              Brands That Lead Change By Turning Ideas Into
              Impactful Digital Solutions.
            </p>
            
            <div className="flex items-center gap-4">
              <span className="block w-8 h-[2px] bg-lime-400"></span>
              <a href="#" className="text-lime-400 font-medium hover:underline text-[14px] cursor-pointer">
                See all services
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Card Layout (Attached to bottom) */}
        <div className="bg-[#1f2d25] p-6 md:p-8 border border-gray-700/20 shadow-lg border-b-0 m-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Image Side (Reduced Size) */}
            <div className="relative rounded-lg overflow-hidden bg-gray-800/50 aspect-video flex items-center justify-center">
               <img 
                 key={currentStudy.id}
                 src={currentStudy.image} 
                 alt={currentStudy.title.replace('\n', ' ')} 
                 className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
               />
            </div>
            
            {/* Right Side: Information (Reduced Text Size) */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white leading-snug break-words">
                {currentStudy.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h3>
              
              <div className="flex items-center border-b-[0.5px] border-gray-600/50 pb-6 mt-8 mb-6">
                <span className="text-lime-400 text-lg font-medium whitespace-nowrap">
                  {currentStudy.caseStudy}
                </span>
                <span className="block h-[2px] bg-lime-400 flex-grow mx-4 max-w-[40px]"></span>
                
                {/* Carousel Navigation Arrows */}
                <div className="ml-auto flex items-center gap-3">
                  <button 
                    onClick={prevSlide}
                    className="border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="bg-lime-400 hover:bg-lime-500 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="text-white text-[15px] font-semibold mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {currentStudy.features.map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-start text-[14px]">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default CaseStudies
