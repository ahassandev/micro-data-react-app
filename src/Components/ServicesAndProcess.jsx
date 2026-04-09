import { useState } from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';

const serviceCategories = [
  {
    id: "digital-marketing",
    name: "Digital Marketing Services",
    subCategories: [
      {
        id: "seo",
        name: "Search Engine Optimization (SEO)",
        title: "Search Engine Optimization",
        subtitle: "Strategies That Build your business",
        desc1: "We build high-performing websites designed for speed, scalability, and a seamless user experience. Every site is crafted to strengthen your brand and support long-term business growth.",
        desc2: "We help brands grow online through smart strategies that increase visibility and engagement. Our approach attracts the right audience and turns traffic into measurable business results."
      },
      {
        id: "smm",
        name: "Social Media Marketing (SMM)",
        title: "Social Media Marketing",
        subtitle: "Engage and Convert on Every Platform",
        desc1: "Social media is more than just posting. We create communities around your brand that drive engagement and loyalty.",
        desc2: "We specialize in crafting campaigns tailored to individual platforms."
      },
      { id: "ppc", name: "Pay Per Click Management (PPC)" },
      { id: "google-ads", name: "Google & Meta Ads Campaigns" },
      { id: "ema", name: "Email Marketing Automation (EMA)" },
      { id: "gmb", name: "Google My Business Optimization" },
      { id: "cro", name: "Conversion Rate Optimization (CRO)" },
    ]
  },
  { 
    id: "web-dev", 
    name: "Website Development Services", 
    subCategories: [
      { id: "custom-web", name: "Custom Website Development" },
      { id: "ecommerce", name: "E-Commerce Solutions" },
      { id: "cms", name: "CMS Development" },
      { id: "frontend", name: "Frontend Development" },
      { id: "backend", name: "Backend Development" }
    ] 
  },
  { 
    id: "mobile-app", 
    name: "Mobile Application Development", 
    subCategories: [
      { id: "ios", name: "iOS App Development" },
      { id: "android", name: "Android App Development" },
      { id: "cross-platform", name: "Cross-Platform Apps" },
      { id: "app-maintenance", name: "App Maintenance & Support" }
    ] 
  },
  { 
    id: "content", 
    name: "Content Writing Services", 
    subCategories: [
      { id: "seo-copywriting", name: "SEO Copywriting" },
      { id: "blog-writing", name: "Blog & Article Writing" },
      { id: "web-content", name: "Website Content" },
      { id: "social-content", name: "Social Media Content" }
    ] 
  },
  { 
    id: "support", 
    name: "Support & Maintenance", 
    subCategories: [
      { id: "bug-fixes", name: "Bug Fixes & Updates" },
      { id: "performance", name: "Performance Optimization" },
      { id: "security", name: "Security Audits" },
      { id: "server", name: "Server Administration" }
    ] 
  },
  { 
    id: "ui-ux", 
    name: "UI UX Design Services", 
    subCategories: [
      { id: "wireframing", name: "Wireframing & Prototyping" },
      { id: "ui-design", name: "User Interface Design (UI)" },
      { id: "ux-research", name: "UX Research & Strategy" },
      { id: "responsive", name: "Responsive Web Design" }
    ] 
  },
];

const processSteps = [
  {
    id: "01",
    title: "Strategy & Discovery",
    desc: "We analyze your goals, audience, competition, and opportunities."
  },
  {
    id: "02",
    title: "Build & Launch",
    desc: "We design, develop, and deploy scalable systems built for performance."
  },
  {
    id: "03",
    title: "Optimize & Scale",
    desc: "We track results, improve conversions, and scale what works."
  },
  {
    id: "04",
    title: "Ongoing Support",
    desc: "We continue improving and supporting your digital presence."
  }
];

const ServicesAndProcess = () => {                                                                                                                                                                                                
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [activeSub, setActiveSub] = useState(serviceCategories[0].subCategories[0].id);

  const currentCategoryObj = serviceCategories.find(c => c.id === activeCategory);
  const currentSubObj = currentCategoryObj?.subCategories?.find(s => s.id === activeSub) || currentCategoryObj?.subCategories?.[0];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1300px] mx-auto px-6 md:px-16">
        {/* Top Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-8 lg:pr-10">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] rounded-full py-2 px-5 mb-2">
            
              <span className="font-bold text-green-600 text-sm">2X <span className="font-semibold text-gray-500">Sales Growth</span></span>
            </div>
            
            <p className="text-gray-500 text-[16px] leading-relaxed max-w-md">
              Your business growth starts here. All the tools you need to build, manage,
              and scale. One powerful platform designed for results.
            </p>
            
            <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-8 py-4 text-[15px] font-bold transition-colors cursor-pointer rounded-sm">
              Schedule a Free Strategy Session
            </button>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4">
              <span className="block w-12 h-px bg-gray-500"></span>
              <h3 className="text-gray-700 text-lg md:text-[20px]">Our Services</h3>
            </div>
            <h2 className="text-4xl md:text-[46px] font-bold text-gray-900 leading-[1.25]">
              Your business growth<br />
              starts here with all tools in<br />
              one spot.
            </h2>
          </div>
        </div>

        {/* The 3-Column Tab Section */}
        <div className="flex flex-col lg:flex-row bg-[#f9f9f9] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.03)] border-b border-gray-100 mb-20">
          
          {/* Column 1: Main Categories */}
          <div className="lg:w-[32%] flex flex-col bg-[#f9f9f9] min-h-[500px]">
            {serviceCategories.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    if (cat.subCategories && cat.subCategories.length > 0) {
                      setActiveSub(cat.subCategories[0].id);
                    }
                  }}
                  className={`flex items-center text-left px-8 py-6 font-bold transition-colors duration-200 cursor-pointer ${
                    isActive 
                      ? "bg-[#15201A] text-white" 
                      : "text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-lime-400 mr-4"></span>}
                  <span className={isActive ? "" : "ml-[26px]"}>{cat.name}</span>
                </button>
              )
            })}
          </div>

          {/* Column 2: Sub-categories */}
          <div className="lg:w-[33%] flex flex-col bg-[#15201A] min-h-[500px]">
            {currentCategoryObj?.subCategories?.map((sub) => {
              const isSubActive = sub.id === activeSub;
              return (
                <button
                  key={sub.id}
                  onClick={() => setActiveSub(sub.id)}
                  className={`text-left px-8 py-[18px] text-[15px] transition-colors duration-200 border-b border-gray-800/80 cursor-pointer ${
                    isSubActive
                      ? "bg-lime-400 text-gray-950 font-bold"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white font-medium"
                  }`}
                >
                  {sub.name}
                </button>
              )
            })}
          </div>

          {/* Column 3: Description Details */}
          <div className="lg:w-[35%] bg-white p-10 min-h-[500px] border-l border-b border-r border-[#f0f0f0] flex flex-col justify-center">
            {currentSubObj && currentSubObj.desc1 ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-[22px] font-bold text-gray-900 leading-tight">
                    {currentSubObj.title}
                  </h4>
                  {currentSubObj.subtitle && (
                    <h5 className="text-gray-900 font-bold mt-2">
                      {currentSubObj.subtitle}
                    </h5>
                  )}
                </div>
                
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {currentSubObj.desc1}
                </p>

                {currentSubObj.desc2 && (
                  <div className="pt-2">
                    <h5 className="text-[15px] font-bold text-gray-900 mb-2">
                      {currentSubObj.title}
                    </h5>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {currentSubObj.desc2}
                    </p>
                  </div>
                )}

                <div className="pt-6">
                  <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-bold text-[15px] hover:underline group cursor-pointer">
                    Read More 
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 italic">
                Content coming soon...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Middle Banner Image Segment */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 mb-32">
        <div className="w-full h-[350px] md:h-[550px] bg-cover bg-center overflow-hidden" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop')" }}>
        </div>
      </div>

      {/* Bottom Section: Our Proven Process */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <div className="space-y-6 md:w-1/2">
            <div className="flex items-center gap-4">
              <span className="block w-[30px] h-0.5 bg-gray-900"></span>
              <span className="block w-[30px] h-0.5 bg-lime-400 -ml-3"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2]">
              Our Proven Process for<br />
              Digital Product Success
            </h2>
            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-bold text-[15px] hover:underline group cursor-pointer">
                View Our Case Studies
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="md:w-5/12 text-gray-600 leading-relaxed text-[17px] pl-0 md:pl-10">
            Our proven process turns ideas into high performing
            digital solutions through strategy, execution, testing,
            and continuous optimization for measurable
            business growth.
          </div>
        </div>

        {/* Process Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8 mb-28">
          {processSteps.map((step) => (
            <div key={step.id} className="relative bg-white py-10 px-8 border border-gray-100 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] h-full">
              {/* Overlapping Number Circle */}
              <div className="absolute -top-6 -right-6 w-[56px] h-[56px] rounded-full bg-lime-400 flex items-center justify-center text-gray-900 font-bold text-xl shadow-sm z-10 border-[6px] border-white">
                {step.id}
              </div>
              
              <h4 className="text-[20px] font-bold text-gray-900 mb-4 pr-4">
                {step.title}
              </h4>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Tabs / Separator */}
        <div className="border-b-[3px] border-gray-100">
          <div className="flex flex-wrap items-center gap-8 md:gap-[100px]">
            <button className="py-6 text-xl md:text-[22px] font-bold text-gray-900 border-b-[4px] border-gray-900 relative top-[3px]">
              Website Development Pricing
            </button>
            <button className="py-6 text-xl md:text-[22px] font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer relative top-[3px]">
              Digital Marketing Pricing
            </button>
            <button className="py-6 text-xl md:text-[22px] font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer relative top-[3px]">
              Recommended Add-Ons
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesAndProcess;
