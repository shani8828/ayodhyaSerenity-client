import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#000000] text-[#F9F9F6] border-t-[0.5px] border-white/10 selection:bg-[#FF6B00] selection:text-black">
    <div className="max-w-7xl mx-auto pt-16 pb-8 px-6 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
        {/* Brand Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-['Clash_Display'] text-xl font-bold tracking-tighter text-[#F9F9F6]">
              Ayodhya <span className="text-[#FF6B00]">Serenity</span>
            </span>
          </div>
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9F9F6]/60 leading-relaxed max-w-sm">
            The trusted digital gateway to Ayodhya's temples, landmarks, and sacred destinations. Crafting premium digital experiences for timeless spiritual heritage.
          </p>
        </div>

        {/* Links Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-['Clash_Display'] text-xs font-bold uppercase tracking-widest text-[#9AAB9B] mb-6">Quick Links</h4>
            <ul className="space-y-4 text-xs font-semibold uppercase tracking-wider font-['Plus_Jakarta_Sans']">
              <li><Link to="/" className="text-[#F9F9F6]/60 hover:text-[#FF6B00] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-[#F9F9F6]/60 hover:text-[#FF6B00] transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-[#F9F9F6]/60 hover:text-[#FF6B00] transition-colors">Our Projects</Link></li>
              <li><Link to="/team" className="text-[#F9F9F6]/60 hover:text-[#FF6B00] transition-colors">Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Clash_Display'] text-xs font-bold uppercase tracking-widest text-[#9AAB9B] mb-6">Programs & Services</h4>
            <ul className="space-y-4 text-xs font-semibold uppercase tracking-wider font-['Plus_Jakarta_Sans']">
              <li><Link to="/services" className="text-[#F9F9F6]/60 hover:text-[#FF6B00] transition-colors">Our Services</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-['Clash_Display'] text-xs font-bold uppercase tracking-widest text-[#9AAB9B] mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-xs font-['Plus_Jakarta_Sans']">
              <li>
                <p className="uppercase text-[10px] tracking-widest text-[#9AAB9B] mb-1">Email Us</p>
                <a
                  href="mailto:info.ayodhyaserenity@gmail.com"
                  className="text-sm font-medium text-[#F9F9F6] hover:text-[#FF6B00] transition-colors break-all"
                >
                  info.ayodhyaserenity@gmail.com
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-xs uppercase font-semibold tracking-widest text-[#FF6B00] hover:text-[#F9F9F6] transition-colors flex items-center gap-1.5">
                  Contact Us <span>→</span>
                </Link>
              </li>
              <li className="text-[11px] text-[#F9F9F6]/40 leading-relaxed pt-2">
                Based in Ayodhya, UP <br />
                Response time: Within 24 hours
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-footer Legal Links */}
      <div className="border-t-[0.5px] border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-widest text-[#9AAB9B] gap-6">
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
          <Link to="/privacy-policy" className="hover:text-[#FF6B00] transition-colors">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-[#FF6B00] transition-colors">Terms & Conditions</Link>
          <Link to="/copyright-legal" className="hover:text-[#FF6B00] transition-colors">Copyright & Legal</Link>
          <Link to="/site-map" className="hover:text-[#FF6B00] transition-colors">Site Map</Link>
        </div>
        <div className="text-[#F9F9F6]/40 text-center md:text-right">
          © {new Date().getFullYear()} Ayodhya Serenity. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
