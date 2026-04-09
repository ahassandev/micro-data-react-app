import { ArrowRight, ArrowUpRight, Handshake, ShieldCheck } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaMicrosoft } from 'react-icons/fa6';
import { SiGoogleads, SiTiktok, SiGoogleanalytics } from 'react-icons/si';

const ToolsAndInsights = () => {
  return (
    <section className="bg-white py-24 pb-0">
      {/* 1. Tools & Platforms Section */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 mb-32">
        
        {/* Header Badges & Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.06)] rounded-full py-2 px-5">
              <div className="bg-orange-50 p-1.5 rounded-full text-orange-500 border border-orange-200">
                <Handshake className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-800 text-sm mr-2">100% engagement</span>
            </div>
            
            <div className="inline-flex items-center gap-3 bg-white border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.06)] rounded-full py-2 px-5">
              <div className="bg-gray-50 p-1.5 rounded-full text-gray-600 border border-gray-200">
                <ShieldCheck className="w-5 h-5 text-orange-500" />
              </div>
              <span className="font-bold text-green-600 text-sm mr-2">Save Your Time</span>
            </div>
          </div>
          
          <h2 className="text-[34px] md:text-[46px] font-bold text-[#232323] leading-[1.3]">
            Tools & platforms<br />
            that power your success
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-0 border border-gray-100 rounded-sm overflow-hidden">
          {/* Card 1 */}
          <div className="border border-gray-100 p-10 hover:shadow-xl hover:z-10 relative bg-white transition-shadow h-full">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg relative top-1">
                 <SiGoogleads className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-[17px] font-bold text-gray-900 mb-3">Google Ads</h4>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Reach high-intent customers exactly when they are searching. Our Google Ads strategies place your business at the top of search results, driving targeted traffic, qualified leads, and measurable conversions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="border border-gray-100 p-10 hover:shadow-xl hover:z-10 relative bg-white transition-shadow h-full">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg relative top-1">
                <FaFacebook className="w-9 h-9 text-[#1877F2]" />
              </div>
              <div>
                <h4 className="text-[17px] font-bold text-gray-900 mb-3">Meta Ads</h4>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Connect with your customers on Facebook and Instagram using highly targeted ad campaigns. We create scroll-stopping creatives and smart audience strategies that increase engagement, boost visibility, and generate affordable leads.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-100 p-10 hover:shadow-xl hover:z-10 relative bg-white transition-shadow h-full">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg relative top-1">
                <SiTiktok className="w-8 h-8 text-black" />
              </div>
              <div>
                <h4 className="text-[17px] font-bold text-gray-900 mb-3">TikTok Ads</h4>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Expand your reach with high-impact short-form video marketing. TikTok Ads help you tap into massive engagement, attract younger audiences, and drive rapid brand awareness through trending, creative content.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-100 p-10 hover:shadow-xl hover:z-10 relative bg-white transition-shadow h-full">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg relative top-1">
                <FaLinkedin className="w-9 h-9 text-[#0A66C2]" />
              </div>
              <div>
                <h4 className="text-[17px] font-bold text-gray-900 mb-3">LinkedIn Ads</h4>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Target professionals and decision-makers on the world's most trusted business network. Our LinkedIn Ads campaigns help you grow authority, attract B2B clients, and build a strong corporate presence.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="border border-gray-100 p-10 hover:shadow-xl hover:z-10 relative bg-white transition-shadow h-full">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg relative top-1">
                <FaMicrosoft className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-[17px] font-bold text-gray-900 mb-3">Microsoft Bing Ads</h4>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Tap into millions of monthly searches beyond Google. Bing Ads helps you reach an additional audience that is actively searching for your services, often at lower cost per click with higher conversion potential.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="border border-gray-100 p-10 hover:shadow-xl hover:z-10 relative bg-white transition-shadow h-full">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg relative top-1">
                <SiGoogleanalytics className="w-8 h-8 text-[#E37400]" />
              </div>
              <div>
                <h4 className="text-[17px] font-bold text-gray-900 mb-3">Google Analytics</h4>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Understand your performance with intelligent analytics. We track user behavior, measure conversions, and provide insights that help you optimize campaigns, improve your website, and make smarter business decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Contact Us Overlapping Block */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 mb-36">
        <div className="bg-[#151515] overflow-hidden flex flex-col md:flex-row shadow-2xl relative border border-gray-900">
          
          {/* Left: Form */}
          <div className="md:w-[45%] p-10 md:p-[70px]">
            <h3 className="text-white text-[18px] font-bold mb-10">Send us a Message</h3>
            <form className="space-y-[22px]">
              <input type="text" placeholder="Name*" className="w-full bg-white px-5 py-[18px] text-[15px] text-gray-800 outline-none rounded-[3px] font-medium placeholder-gray-400" />
              <input type="email" placeholder="email*" className="w-full bg-white px-5 py-[18px] text-[15px] text-gray-800 outline-none rounded-[3px] font-medium placeholder-gray-400" />
              <input type="text" placeholder="Service*" className="w-full bg-white px-5 py-[18px] text-[15px] text-gray-800 outline-none rounded-[3px] font-medium placeholder-gray-400" />
              <textarea placeholder="Message" rows={4} className="w-full bg-white px-5 py-[18px] text-[15px] text-gray-800 outline-none rounded-[3px] font-medium placeholder-gray-400 resize-none"></textarea>
              <button type="button" className="bg-lime-400 hover:bg-lime-500 text-[#151515] px-12 py-[15px] font-bold text-[15px] transition-colors rounded-[3px] mt-4 cursor-pointer inline-block">
                Submit
              </button>
            </form>
          </div>

          {/* Middle: Vertical Divider text */}
          <div className="hidden md:flex flex-col items-center justify-center min-w-[70px] border-l border-r border-[#2a2a2a] relative">
             <div className="absolute left-1/2 top-10 transform -translate-x-1/2 w-[1px] h-[120px] bg-white opacity-[0.15]"></div>
             <div className="h-full flex items-center justify-center rotate-180" style={{ writingMode: 'vertical-rl' }}>
                <span className="text-white text-[18px] tracking-[4px] font-medium">Contact us</span>
             </div>
             <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 w-[1px] h-[120px] bg-white opacity-[0.15]"></div>
          </div>

          {/* Right: Contact Details */}
          <div className="md:w-[50%] p-10 md:p-[70px] flex flex-col justify-center">
            
            <div className="mb-16">
               <span className="block w-14 h-[2px] bg-lime-400 mb-6"></span>
               <h2 className="text-[34px] md:text-[40px] font-bold text-lime-400 leading-tight">
                 Lets Start the<br />Conversation
               </h2>
            </div>
            
            <div className="space-y-[35px]">
              <div>
                <h4 className="text-white font-bold mb-2 text-[15px]">United State</h4>
                <p className="text-[#a0a0a0] text-[14px] leading-relaxed max-w-[260px]">
                  1942 Broadway, Ste 314C, Boulder,<br />CO 80302, US
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-2 text-[15px]">United Kingdom</h4>
                <p className="text-[#a0a0a0] text-[14px] leading-relaxed max-w-[260px]">
                  69 Castle Foregate, Shrewsbury, SY1<br />2EJ,United Kingdom
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2 text-[15px]">Email Address</h4>
                <p className="text-[#a0a0a0] text-[14px]">info@microdatatechnologies.com</p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2 text-[15px]">Phone</h4>
                <p className="text-[#a0a0a0] text-[14px]">(239) 268 6617</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* 3. News & Updates Section */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 mb-[140px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-6 md:w-[63%]">
            <div className="flex items-center gap-4">
              <span className="block w-12 h-0.5 bg-orange-400"></span>
              <h3 className="text-orange-500 font-medium tracking-wide">News & updates</h3>
              <span className="block w-12 h-0.5 bg-orange-400"></span>
              
              <div className="hidden md:flex items-center gap-3 bg-white border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.06)] rounded-full py-1.5 px-4 ml-4">
                <Handshake className="w-5 h-5 text-gray-500" />
                <span className="font-bold text-gray-700 text-[13px] mr-1">100% engagement</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-[44px] font-bold text-[#1f2320] leading-[1.25]">
              Over a Decade of Experience<br />
              in Web and Digital Growth
            </h2>

            <div className="flex items-center gap-3 bg-white border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.06)] rounded-full py-2 px-5 inline-flex w-fit mt-2">
               <div className="bg-cyan-100/50 p-1.5 rounded-full text-cyan-600">
                 <ShieldCheck className="w-5 h-5 text-cyan-500" />
               </div>
               <span className="font-bold text-gray-600 text-sm mr-2">Services Recommendations</span>
            </div>
          </div>
          
          <div className="md:w-[37%] flex flex-col items-start md:items-end gap-8 pb-2">
            <p className="text-gray-500 leading-[1.8] text-[15px] md:text-left max-w-sm mr-auto pb-4">
              Explore our blog for insights, updates, and news from over a decade of
              experience in web and digital marketing, sharing strategies, trends, and
              growth expertise.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 w-full">
               <button className="bg-[#1e2a22] hover:bg-[#15201A] text-white px-[22px] py-[14px] font-bold transition-colors rounded-[3px] flex items-center gap-3 cursor-pointer">
                 <span className="text-[15px]">Get a Quote</span>
                 <ArrowRight className="w-4 h-4 bg-white text-[#1e2a22] rounded-sm p-[1px]" />
               </button>
               <div className="border border-gray-400 px-[26px] py-[13px] rounded-[3px] font-semibold text-gray-900 text-[17px]">
                 (888) 977-6373
               </div>
            </div>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-3 gap-[22px]">
          {[1,2,3].map((item) => (
            <div key={item} className="border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] bg-white flex flex-col group cursor-pointer relative overflow-hidden">
               <div className="w-full h-[220px] bg-white overflow-hidden p-[10px] pb-0">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Blog thumbnail" 
                    className="w-full h-full object-cover rounded-t-sm"
                  />
               </div>
               <div className="p-8 pb-10 flex flex-col flex-grow">
                 <div className="flex justify-between items-center text-[#a0a0a0] text-[11px] mb-5 font-medium">
                    <span>Demi Wilkinson • 1 dec 2025</span>
                    <span>Consultation</span>
                 </div>
                 <h4 className="text-[18px] font-bold text-gray-900 mb-4 leading-snug group-hover:text-lime-600 transition-colors">
                   How Smart Design Drives Better<br />User Engagement
                 </h4>
                 <p className="text-gray-500 text-[13.5px] leading-relaxed mb-6">
                   Explore the role of user-centric design in boosting website interaction and conversions.
                 </p>
                 <div className="mt-auto">
                    <span className="inline-flex items-center gap-1.5 font-bold text-gray-900 text-[13px] tracking-wide relative">
                      Read More <ArrowUpRight className="w-[14px] h-[14px] relative -top-[1px]" />
                    </span>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsAndInsights;
