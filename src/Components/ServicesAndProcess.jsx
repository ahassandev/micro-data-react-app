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
      { 
        id: "ppc", 
        name: "Pay Per Click Management (PPC)",
        title: "PPC Management",
        subtitle: "Targeted Advertising for Instant Results",
        desc1: "Drive immediate traffic and high-quality leads with data-driven PPC campaigns that maximize your marketing budget.",
        desc2: "Our expert-led approach focused on ROI ensures your ads reach the right audience at the right time."
      },
      { 
        id: "google-ads", 
        name: "Google & Meta Ads Campaigns",
        title: "Google & Meta Ads",
        subtitle: "Scale Your Reach Globally",
        desc1: "Reach your ideal customers across the world's largest advertising platforms with professionally managed campaigns.",
        desc2: "We optimize your ad spend across Google and Meta to ensure maximum visibility and conversion rates."
      },
      { 
        id: "ema", 
        name: "Email Marketing Automation (EMA)",
        title: "Email Marketing Automation",
        subtitle: "Nurture Leads Effectively",
        desc1: "Automate your customer journey with personalized email campaigns that keep your brand top-of-mind and drive repeat business.",
        desc2: "From newsletter setup to advanced automated workflows, we help you build stronger relationships with your subscribers."
      },
      { 
        id: "gmb", 
        name: "Google My Business Optimization",
        title: "GMB Optimization",
        subtitle: "Dominate Local Search Results",
        desc1: "Optimize your local presence to attract more nearby customers and improve your ranking on Google Maps and local search.",
        desc2: "We help you manage your business profile, respond to reviews, and showcase your services to your local community."
      },
      { 
        id: "cro", 
        name: "Conversion Rate Optimization (CRO)",
        title: "Conversion Rate Optimization",
        subtitle: "Turn More Visitors into Customers",
        desc1: "Optimize your website's user experience and conversion paths to maximize the value of every single visitor.",
        desc2: "Through data analysis and A/B testing, we identify and remove friction from your sales funnel."
      },
    ]
  },
  { 
    id: "web-dev", 
    name: "Website Development Services", 
    subCategories: [
      { 
        id: "custom-web", 
        name: "Custom Website Development",
        title: "Custom Web Solutions",
        subtitle: "Your Unique Vision, Digitally Realized",
        desc1: "We build tailor-made websites from the ground up, ensuring they reflect your brand identity and meet your unique business goals.",
        desc2: "Our custom solutions are designed for performance, security, and scalability from day one."
      },
      { 
        id: "ecommerce", 
        name: "E-Commerce Solutions",
        title: "E-Commerce Development",
        subtitle: "Seamless Online Shopping Experiences",
        desc1: "Empower your retail business with powerful, secure, and user-friendly e-commerce platforms that drive sales.",
        desc2: "We specialize in building online stores that provide a frictionless shopping experience for your customers."
      },
      { 
        id: "cms", 
        name: "CMS Development",
        title: "CMS Solutions",
        subtitle: "Manage Content with Full Flexibility",
        desc1: "Get complete control over your website updates with easy-to-use and highly scalable Content Management Systems.",
        desc2: "We build and customize CMS platforms like WordPress and Headless solutions tailored to your workflow."
      },
      { 
        id: "frontend", 
        name: "Frontend Development",
        title: "Frontend Engineering",
        subtitle: "Engaging and Stunning Interfaces",
        desc1: "Bring your designs to life with high-performance, responsive, and visually beautiful frontend development using modern frameworks.",
        desc2: "We focus on pixel-perfect implementation and smooth interactions for an unbeatable user experience."
      },
      { 
        id: "backend", 
        name: "Backend Development",
        title: "Backend Infrastructure",
        subtitle: "Robust and Scalable Core Systems",
        desc1: "Ensure your application's stability and speed with secure and powerful backend architecture designed for heavy loads.",
        desc2: "We build reliable APIs and database structures that power your digital business without compromise."
      }
    ] 
  },
  { 
    id: "mobile-app", 
    name: "Mobile Application Development", 
    subCategories: [
      { 
        id: "ios", 
        name: "iOS App Development",
        title: "iOS Development",
        subtitle: "Premium Experiences for Apple Users",
        desc1: "Develop high-quality, native iOS applications designed for peak performance and perfect integration with the Apple ecosystem.",
        desc2: "Our iOS apps are built to provide a premium feel and exceed user expectations in the App Store."
      },
      { 
        id: "android", 
        name: "Android App Development",
        title: "Android Development",
        subtitle: "Reach Millions with Powerful Apps",
        desc1: "Build versatile and high-performing Android applications that run smoothly across the diverse landscape of Android devices.",
        desc2: "We focus on creating robust apps that leverage the full potential of the Android platform."
      },
      { 
        id: "cross-platform", 
        name: "Cross-Platform Apps",
        title: "Cross-Platform Development",
        subtitle: "Efficiency Without Compromising Quality",
        desc1: "Develop powerful applications for both iOS and Android from a single codebase, significantly reducing your time-to-market.",
        desc2: "Using technologies like React Native or Flutter, we deliver near-native performance at a fraction of the cost."
      },
      { 
        id: "app-maintenance", 
        name: "App Maintenance & Support",
        title: "App Support Services",
        subtitle: "Continuous Performance & Reliability",
        desc1: "Ensure your mobile apps stay up-to-date, secure, and performant with our dedicated post-launch maintenance services.",
        desc2: "We handle updates, bug fixes, and feature enhancements to keep your users engaged and satisfied."
      }
    ] 
  },
  { 
    id: "content", 
    name: "Content Writing Services", 
    subCategories: [
      { 
        id: "seo-copywriting", 
        name: "SEO Copywriting",
        title: "SEO Copywriting",
        subtitle: "Content that Ranks and Converts",
        desc1: "Create high-impact copy that boosts your search engine rankings while effectively engaging and persuading your target audience.",
        desc2: "Our writers combine strategic keyword integration with compelling storytelling to drive results."
      },
      { 
        id: "blog-writing", 
        name: "Blog & Article Writing",
        title: "Blog & Article Creation",
        subtitle: "Establish Authority and Trust",
        desc1: "Build your brand as an industry leader with informative, engaging, and high-quality blog content that provides real value.",
        desc2: "Consistent, high-quality articles help improve your SEO and keep your audience coming back for more."
      },
      { 
        id: "web-content", 
        name: "Website Content",
        title: "Website Messaging",
        subtitle: "Clear and Compelling Brand Story",
        desc1: "Ensure your website communicates your value proposition clearly and effectively with professional content writing.",
        desc2: "We craft every word to guide your visitors towards action and perfectly reflect your brand voice."
      },
      { 
        id: "social-content", 
        name: "Social Media Content",
        title: "Social Engagement",
        subtitle: "Connect with Your Community",
        desc1: "Drive engagement and build brand loyalty across social platforms with creative and platform-specific content strategies.",
        desc2: "From catchy captions to viral campaign ideas, we help you stand out in the busy social feed."
      }
    ] 
  },
  { 
    id: "support", 
    name: "Support & Maintenance", 
    subCategories: [
      { 
        id: "bug-fixes", 
        name: "Bug Fixes & Updates",
        title: "Technical Support",
        subtitle: "Keep Your Operations Smooth",
        desc1: "Identify and resolve technical issues rapidly to ensure your digital products always perform at their absolute best.",
        desc2: "We provide proactive monitoring and quick fixes to minimize downtime and protect your revenue."
      },
      { 
        id: "performance", 
        name: "Performance Optimization",
        title: "Speed Improvement",
        subtitle: "Maximize Efficiency and UX",
        desc1: "Optimize your systems for peak performance, ensuring lightning-fast load times and a smooth user experience across all devices.",
        desc2: "A faster site means better SEO rankings and higher conversion rates for your business."
      },
      { 
        id: "security", 
        name: "Security Audits",
        title: "Digital Asset Protection",
        subtitle: "Ensure Data Safety and Compliance",
        desc1: "Protect your data and applications with comprehensive security audits and proactive protection against modern threats.",
        desc2: "We help you identify vulnerabilities before they are exploited, keeping your business and customers safe."
      },
      { 
        id: "server", 
        name: "Server Administration",
        title: "Infrastructure Management",
        subtitle: "Reliable and Secure Environments",
        desc1: "Maintain a stable, high-performance server environment designed to support your growing digital presence seamlessly.",
        desc2: "We handle server configuration, updates, and monitoring so you can focus on running your business."
      }
    ] 
  },
  { 
    id: "ui-ux", 
    name: "UI UX Design Services", 
    subCategories: [
      { 
        id: "wireframing", 
        name: "Wireframing & Prototyping",
        title: "Digital Blueprinting",
        subtitle: "Map Out Your Product Success",
        desc1: "Create a clear roadmap for your digital product with detailed wireframes and high-fidelity interactive prototypes.",
        desc2: "We help you visualize the user journey early, saving time and resources during the development phase."
      },
      { 
        id: "ui-design", 
        name: "User Interface Design (UI)",
        title: "Stunning UI Design",
        subtitle: "Visual Excellence for Your Brand",
        desc1: "Design beautiful and intuitive user interfaces that capture your brand's essence and provide a delightful user experience.",
        desc2: "Our UI designs are focused on visual hierarchy, accessibility, and modern aesthetics."
      },
      { 
        id: "ux-research", 
        name: "UX Research & Strategy",
        title: "In-Depth User Research",
        subtitle: "Data-Driven Design Decisions",
        desc1: "Understand your users' needs and pain points deeply to build products that solve real problems and deliver true value.",
        desc2: "We use various research methodologies to ensure your product strategy is grounded in actual user behavior."
      },
      { 
        id: "responsive", 
        name: "Responsive Web Design",
        title: "Adaptable Design",
        subtitle: "Flawless Experience on Every Device",
        desc1: "Ensure your website looks and functions perfectly across all screen sizes, from mobile phones to high-resolution desktops.",
        desc2: "We implement liquid layouts and smart breakpoints for a seamless experience everywhere."
      }
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
            <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-[1.25]">
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
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8">
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
      </div>
    </section>
  )
}

export default ServicesAndProcess;
