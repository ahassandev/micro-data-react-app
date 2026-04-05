import { useState } from 'react'
import { Star, ChevronRight, CheckCircle, TrendingUp, Users, Shield, Zap, ArrowRight } from 'lucide-react'

const ReviewsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeProblem, setActiveProblem] = useState(0)

  const filters = [
    { id: 'all', label: 'All Reviews' },
    { id: 'google', label: 'Google' },
    { id: 'facebook', label: 'Facebook' },
    { id: 'trustpilot', label: 'Trustpilot' },
    { id: 'yelp', label: 'Yelp' }
  ]

  const problems = [
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
      title: "Low Conversion Rates",
      description: "Your website isn't turning visitors into customers effectively"
    },
    {
      icon: <Users className="w-5 h-5 text-green-500" />,
      title: "Poor User Experience",
      description: "Visitors struggle to navigate and find what they need"
    },
    {
      icon: <Shield className="w-5 h-5 text-purple-500" />,
      title: "Lack of Trust",
      description: "Potential customers don't feel confident buying from you"
    },
    {
      icon: <Zap className="w-5 h-5 text-orange-500" />,
      title: "Slow Performance",
      description: "Your site loads slowly and loses impatient visitors"
    }
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing service! Our conversion rate increased by 300% in just 3 months. The team really understands digital marketing.",
      source: "Google"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      text: "Professional and results-driven. They transformed our online presence completely. Highly recommended!",
      source: "Facebook"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      text: "Best investment we made for our business. ROI was incredible and the support is outstanding.",
      source: "Trustpilot"
    },
    {
      id: 4,
      name: "David Kim",
      rating: 5,
      text: "From zero to hero in our industry. Their SEO and web design services are top-notch.",
      source: "Google"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      rating: 5,
      text: "Our website now converts visitors at 4x the previous rate. Absolutely thrilled with the results!",
      source: "Yelp"
    },
    {
      id: 6,
      name: "Robert Martinez",
      rating: 5,
      text: "Professional team that delivers on promises. Our revenue has grown significantly since working with them.",
      source: "Facebook"
    }
  ]

  const filteredReviews = activeFilter === 'all'
    ? reviews
    : reviews.filter(review => review.source.toLowerCase() === activeFilter)

  return (
    <section className="bg-gray-50 py-16 px-16">
      <div className="w-28 h-1 bg-lime-500 mx-auto mb-4 rounded-full" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            What's Holding Your Business <br /> Back & How We Fix It
          </h1>
        </div>

        {/* Problem & Solution Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Problems */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Common Problems That Kill Your Growth
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {/* Problem Items */}
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveProblem(index)}
                    className="relative flex items-start gap-4 cursor-pointer group"
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all ${activeProblem === index
                        ? 'bg-blue-600 border-blue-600'
                        : 'bg-white border-gray-300 group-hover:border-blue-400'
                      }`}>
                      <div className={`transition-all ${activeProblem === index ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'
                        }`}>
                        {problem.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-6">
                      <h3 className={`font-semibold mb-2 transition-all ${activeProblem === index
                          ? 'text-blue-600 text-lg'
                          : 'text-gray-900 group-hover:text-blue-600'
                        }`}>
                        {problem.title}
                      </h3>
                      <p className={`text-sm transition-all ${activeProblem === index
                          ? 'text-gray-700'
                          : 'text-gray-600'
                        }`}>
                        {problem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Solution */}
          <div className="space-y-6 group cursor-pointer max-w-xl">

  {/* Heading */}
  <h3 className="text-sm font-semibold text-pink-500 tracking-wide">
    See how we fix it
  </h3>

  {/* Content */}
  <p className="text-gray-600 leading-relaxed text-[15px]">
    We build conversion focused websites that combine modern design, fast
    performance, clear messaging, and proven user experience principles to
    attract visitors, build trust, increase engagement, and consistently turn
    traffic into qualified leads for sustainable business growth.
  </p>

  {/* CTA */}
  <div className="inline-flex items-center gap-2 text-pink-600 font-semibold relative group/link">
    <span className="border-b-2 border-pink-500 pb-1 transition-all group-hover/link:border-pink-700">
      Let’s Build a Smarter Digital System
    </span>

    <ArrowRight className="w-5 h-5 transform transition-all duration-300 group-hover/link:translate-x-1" />
  </div>

  {/* Image */}
  <div className="relative h-64 overflow-hidden rounded-xl mt-6">
    <img
      src="https://images.unsplash.com/photo-1552664730-d0760fae3e0a?w=800&h=400&fit=crop"
      alt="Digital solution"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
  </div>

</div>
        </div>

        {/* Reviews Filter Tabs */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="inline-flex bg-gray-200 w-full rounded-lg p-1 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all text-center ${activeFilter === filter.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              {/* Profile Section */}
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={`https://picsum.photos/seed/review${review.id}/100/100`}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {review.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2 h-2 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-1 py-1 rounded">
                  {review.source}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-xs leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
