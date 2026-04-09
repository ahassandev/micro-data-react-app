import { useState } from 'react';
import { Check, X, Lightbulb } from 'lucide-react';

const pricingPlans = [
  {
    id: "basic",
    name: "Basic Wordpress Website",
    details: [
      {
        pages: "5 Pages",
        price: "$350",
        features: [
          { name: "Static Customize Website", included: true },
          { name: "Responsive on All Devices", included: true },
          { name: "Contact Form Intigration", included: true },
          { name: "Search Engine Friendly", included: true },
          { name: "Social Media Integration", included: true },
          { name: "Domain + Hosting", included: false },
          { name: "Domain Transfer Support", included: false },
          { name: "Content Writing", included: true },
        ]
      },
      {
        pages: "10 Pages",
        price: "$699",
        features: [
          { name: "Static Customize Website", included: true },
          { name: "Responsive on All Devices", included: true },
          { name: "Contact Form Intigration", included: true },
          { name: "Search Engine Friendly", included: true },
          { name: "Social Media Integration", included: true },
          { name: "Domain + Hosting", included: true },
          { name: "Domain Transfer Support", included: true },
          { name: "Content Writing", included: true },
        ]
      }
    ]
  },
  {
    id: "professional",
    name: "Professional Wordpress Website",
    details: [
      {
        pages: "15 Pages",
        price: "$999",
        features: [
          { name: "Dynamic Customize Website", included: true },
          { name: "Responsive on All Devices", included: true },
          { name: "Advanced Contact Forms", included: true },
          { name: "Advanced SEO Config", included: true },
          { name: "Social Media Integration", included: true },
          { name: "Domain + Preimum Hosting", included: true },
          { name: "Domain Transfer Support", included: true },
          { name: "Content Writing Support", included: true },
        ]
      }
    ]
  },
  {
    id: "business",
    name: "Business Wordpress Website",
    details: [
       {
        pages: "Unlimited Pages",
        price: "$1499",
        features: [
          { name: "Fully Custom Theme Design", included: true },
          { name: "Pixel-Perfect Responsiveness", included: true },
          { name: "E-Commerce Functionality", included: true },
          { name: "Complete SEO Setup", included: true },
          { name: "Social Media Strategies", included: true },
          { name: "Dedicated Server Hosting", included: true },
          { name: "1 Year Priority Support", included: true },
          { name: "Expert Content Copywriting", included: true },
        ]
      }
    ]
  }
];

const PricingPlans = () => {
  const [activePlan, setActivePlan] = useState(pricingPlans[0].id);

  const activePlanData = pricingPlans.find(plan => plan.id === activePlan);

  return (
    <section className="bg-[#141b15] py-24">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[100px] items-center">
          
          {/* Left Side: Headings & Selectors */}
          <div className="lg:w-[35%] w-full flex flex-col justify-center">
            <h2 className="text-[34px] xl:text-[40px] font-bold text-white leading-tight mb-12">
              Select a perfect plan<br />
              for your business
            </h2>

            <div className="space-y-4 mb-16 max-w-[380px]">
              {pricingPlans.map((plan) => {
                const isActive = activePlan === plan.id;
                return (
                  <div key={plan.id} className="border-b-[0.5px] border-gray-600/50 pb-5">
                    <button
                      onClick={() => setActivePlan(plan.id)}
                      className="w-full flex items-center text-left hover:opacity-80 transition-opacity cursor-pointer group"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full mr-4 transition-colors ${isActive ? 'bg-lime-400 shadow-[0_0_8px_rgba(191,255,0,0.8)]' : 'bg-gray-400 group-hover:bg-gray-300'}`}></span>
                      <span className={`text-[16px] transition-colors ${isActive ? 'text-lime-400 font-medium' : 'text-gray-300 group-hover:text-white'}`}>
                        {plan.name}
                      </span>
                    </button>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center border-4 border-[#1f2821] overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                <div className="text-white bg-blue-100 p-2 m-1 border-dashed border border-blue-200">
                   <Lightbulb className="w-5 h-5 fill-cyan-300 text-yellow-400" />
                </div>
              </div>
              <div className="bg-white px-6 py-2.5 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                <span className="text-orange-500 font-bold text-[15px]">Scalable Solutions</span>
              </div>
            </div>
          </div>

          {/* Right Side: Pricing Cards */}
          <div className="lg:w-[65%] w-full">
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-[800px]">
              {activePlanData?.details.map((card, idx) => (
                <div key={idx} className="bg-[#1a231b] shadow-xl border-[0.5px] border-[#2a382d] rounded-sm p-8 flex flex-col min-h-[500px]">
                  
                  {/* Top Accents */}
                  <div className="flex items-center gap-1.5 mb-8">
                    <span className="w-8 h-[3px] bg-lime-400 rounded-full"></span>
                    <span className="w-12 h-[3px] bg-gray-500/50 rounded-full"></span>
                  </div>

                  <div className="flex justify-between items-start mb-8 gap-4">
                    <h3 className="text-gray-300 text-[14px] leading-relaxed w-[150px]">
                       {activePlan === 'basic' ? "Static Customize Website" : activePlanData.name}
                    </h3>
                    <span className="text-gray-300 text-[14px] whitespace-nowrap">{card.pages}</span>
                  </div>

                  <ul className="space-y-[18px] mb-12 grow">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 text-[13.5px]">{feat.name}</span>
                        {feat.included ? (
                          <div className="w-[18px] h-[18px] rounded-full bg-lime-400 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-[#141b15]" strokeWidth={4} />
                          </div>
                        ) : (
                          <div className="w-[18px] h-[18px] rounded-full bg-red-600 flex items-center justify-center shrink-0">
                            <X className="w-3 h-3 text-[#141b15]" strokeWidth={4} />
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-auto">
                    <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold py-2.5 px-6 rounded-[3px] text-[15px] transition-colors cursor-pointer">
                      Buy Now
                    </button>
                    <span className="text-lime-400 text-[32px] tracking-tight font-bold">{card.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PricingPlans;
