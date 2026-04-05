import React from 'react'
import { Star } from 'lucide-react'

function Features() {
  const features = [
    {
      title: 'Proven',
      subtitle: 'Local Expertise',
      stars: 5
    },
    {
      title: 'All Services',
      subtitle: 'Under One Roof',
      stars: 5
    },
    {
      title: 'Small & Mid-Sized',
      subtitle: 'Business Focus',
      stars: 5
    },
    {
      title: 'Results',
      subtitle: 'Driven Approach',
      stars: 5
    },
    {
      title: 'Expert',
      subtitle: 'Dedicated Support',
      stars: 5
    }
  ]

  return (
    <section className="bg-lime-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`py-8 px-6 text-center flex flex-col items-center justify-center ${
                index !== features.length - 1 ? 'md:border-r-2 border-slate-900' : ''
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(feature.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-red-600 fill-red-600" />
                ))}
              </div>

              {/* Title and Subtitle */}
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">
                  {feature.title}
                </p>
                <p className="text-sm font-bold text-slate-900 leading-tight">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
