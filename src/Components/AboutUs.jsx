import { useState } from 'react'
import { ArrowRight, Phone, Users, Star, Award, TrendingUp } from 'lucide-react'

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('why')

  const tabs = [
    { id: 'why', label: 'Why Choose Us' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'vision', label: 'Our Vision' }
  ]

  return (
    <section className="bg-green-950 py-16 px-16">
       <div className="flex justify-center mb-8">
          <div className="text-center">
            <div className="bg-white rounded-full px-6 py-2 text-gray-900 font-semibold text-sm">
              100% engagement
            </div>
          </div>
        </div>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="block w-16 h-0.5 bg-lime-400"></span>
              <h2 className="text-xl font-semibold text-lime-400">About Us</h2>
              <span className="block w-16 h-0.5 bg-lime-400"></span>
            </div>

            <h1 className="text-4xl lg:text-4xl font-bold text-white leading-tight">
              10+ Years of Excellence
              <br />in Web & Digital Marketing
              <br />Services
            </h1>

            <div className="flex items-center gap-2 mt-10 text-white text-sm">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" className="w-6 h-6 rounded-full border-2 border-white" alt="User 1" />
                <img src="https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=32&h=32&fit=crop&crop=face" className="w-6 h-6 rounded-full border-2 border-white" alt="User 2" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" className="w-6 h-6 rounded-full border-2 border-white" alt="User 3" />
              </div>
              500+ Services Recommendations
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-gray-200 text-lg leading-relaxed">
              Transform your digital presence with our comprehensive suite of web development, design, and marketing services. We deliver results-driven solutions that help your business thrive in the competitive online landscape.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                View all services
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-lime-400 text-lime-400 px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-lime-400 hover:text-gray-900 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (888) 977-6373
              </button>
            </div>

            <div className="flex items-center mt-10 gap-2 bg-white text-gray-900 px-3 py-2 rounded-lg text-sm">
              <Award className="w-4 h-4 text-lime-400" />
              Services Recommendations
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="w-full mb-8 mt-14">
          <div className="flex w-full bg-gray-200 rounded-lg overflow-hidden">

            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-6 text-lg font-medium transition-all
          ${activeTab === tab.id
                    ? "bg-lime-400 text-gray-900"
                    : "text-black hover:bg-gray-300"
                  }
        `}
              >
                {tab.label}
              </button>
            ))}

          </div>
        </div>

        
        {/* Small White Button */}
        <div className="flex justify-center mb-8 mt-14">
          <div className="text-center">
            <div className="bg-white rounded-full px-6 py-2 text-gray-900 font-semibold text-sm">
              70% Sales Growth
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Micro Data Technologies</h3>

            <p className="text-gray-200 leading-relaxed mb-4">
              At Micro Data Technologies, we specialize in creating exceptional digital experiences through our comprehensive web and digital marketing services. Our team of experts combines cutting-edge technology with innovative strategies to deliver solutions that drive growth and engagement.
            </p >

            <p className="text-gray-200 leading-relaxed mb-4">
              We focus on user-centric design, robust development, and data-driven marketing approaches that ensure your business stands out in the digital landscape. Our commitment to transparency and excellence has made us a trusted partner for businesses seeking transformative digital solutions.
            </p>

            <p className="text-gray-200 leading-relaxed mb-6">
              Whether you're looking to enhance your online presence, increase conversions, or build a custom application, we have the expertise and passion to bring your vision to life.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 cursor-pointer">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 text-white hover:text-lime-400 transition-colors border border-white px-8 py-3 rounded-lg font-semibold">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(888) 977-6373</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 transition-colors">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Digital Marketing Services:</h4>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive digital marketing strategies to boost your online presence and drive results.
              </p>
              <a href="#" className="text-lime-400 hover:text-lime-300 text-sm font-medium flex items-center gap-1">
                Read More
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 transition-colors">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Web Development Services:</h4>
              <p className="text-gray-600 text-sm mb-4">
                Custom web development solutions tailored to your business needs and goals.
              </p>
              <a href="#" className="text-lime-400 hover:text-lime-300 text-sm font-medium flex items-center gap-1">
                Read More
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 transition-colors">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Web & Apps Design Services:</h4>
              <p className="text-gray-600 text-sm mb-4">
                Creative and user-friendly design solutions for websites and mobile applications.
              </p>
              <a href="#" className="text-lime-400 hover:text-lime-300 text-sm font-medium flex items-center gap-1">
                Read More
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
