import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const AppFooter = () => {
  return (
    <div className="relative mt-20 bg-white">
      
      {/* 1. Newsletter Oval - Relative Positioning overlapping header & footer backgrounds */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-20 bottom-[-90px]">
        <div 
          className="w-full bg-[#8c9f22] rounded-[200px] h-auto lg:h-[220px] flex flex-col lg:flex-row items-center justify-between p-12 lg:px-20 overflow-hidden relative shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #a4c214 0%, #7e9112 100%)' }}
        >
          {/* Subtle overlay decorative pattern can be simulated with background blend */}
          <div className="absolute inset-0 bg-white opacity-[0.05] rounded-[100px] transform scale-[1.05] border-[1px] border-white mix-blend-overlay pointer-events-none"></div>
          
          <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1f2619] leading-tight mb-8 lg:mb-0 relative z-10 lg:w-[50%] tracking-tight">
            Subscribe to our newsletter to<br />
            receive the latest updates & news.
          </h2>
          
          <div className="flex items-center gap-6 w-full lg:w-auto relative z-10 flex-wrap lg:flex-nowrap">
            <input 
              type="email" 
              placeholder="Enter Your Email"
              className="bg-transparent border border-[#6b7b10] placeholder-[#556407] text-gray-900 px-6 py-[18px] w-full md:w-[320px] hover:border-[#525f0a] focus:border-[#455009] outline-none transition-colors text-[15px] font-medium rounded-[2px]"
            />
            <button className="bg-[#161c18] hover:bg-black text-white px-[44px] py-[19px] font-semibold rounded-[3px] transition-colors cursor-pointer text-[15px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Segment */}
      <footer className="bg-[#15201A] pt-[170px] pb-10">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-[70px] text-gray-300">
            {/* Col 1 */}
            <div className="space-y-[22px]">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="flex items-center">
                  <span className="font-semibold text-[26px] tracking-tight text-white leading-none">micro data</span>
                </div>
              </div>
              <p className="text-[14-px] leading-relaxed text-[#c0c0c0] pr-4">
                Micro Data Technologies is a US based digital solutions company delivering reliable web and digital marketing services for businesses of all sizes.
              </p>
              <div className="flex items-center gap-6 pt-3">
                <button className="text-white hover:text-lime-400 transition-colors cursor-pointer border-none outline-none">
                  <FaFacebookF size={18} />
                </button>
                <button className="text-white hover:text-lime-400 transition-colors cursor-pointer border-none outline-none">
                  <FaLinkedinIn size={18} />
                </button>
                <button className="text-white hover:text-lime-400 transition-colors cursor-pointer border-none outline-none">
                  <FaInstagram size={18} />
                </button>
                <button className="text-white hover:text-lime-400 transition-colors cursor-pointer border-none outline-none">
                  <FaXTwitter size={18} />
                </button>
              </div>
            </div>

            {/* Col 2 */}
            <div className="lg:pl-10">
              <h4 className="text-white font-bold mb-[28px] text-[15px]">Menu</h4>
              <ul className="space-y-[18px] text-[15px] text-[#e0e0e0] font-medium">
                <li><a href="#" className="hover:text-lime-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-white font-bold mb-[28px] text-[15px]">Quick Links</h4>
              <ul className="space-y-[18px] text-[15px] text-[#e0e0e0] font-medium">
                <li><a href="#" className="hover:text-lime-400 transition-colors">Meta Ads</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Google ads</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">TikTok ads</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">UI UX Design</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Content Writing</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Support & Maintenance</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-[26px]">
              <h4 className="text-white font-bold mb-[28px] text-[15px]">Contact</h4>
              
              <div>
                <p className="text-[14px] text-[#d0d0d0] leading-[1.8]">
                  Kot Khadim ALi Shah<br />
                  Sahiwal, Pakistan
                </p>
              </div>

              <div>
                <h5 className="text-white font-bold text-[13.5px] mb-1.5">Email Address</h5>
                <p className="text-[14px] text-[#d0d0d0]">ahmad1234@gmail.com</p>
              </div>

              <div>
                <h5 className="text-white font-bold text-[13.5px] mb-1.5">Phone</h5>
                <p className="text-[14px] text-[#d0d0d0]">(123) 456 7899</p>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t-[0.5px] border-gray-600/60 flex items-center">
            <p className="text-[#a0a0a0] text-[14px]">
              <span className="text-lime-400 font-medium">Micro Data Technologies</span> © Copyright 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppFooter;
