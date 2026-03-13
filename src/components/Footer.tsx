import { Link } from "react-router-dom";
// import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="max-w-7xl mx-auto pt-10 md:pt-16 pb-4 px-4 md:pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 pb-6 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            {/* <img src={logo} alt="Ayodhya Serenity" className="h-10 w-10" /> */}
            <span className="font-display text-lg font-bold">Ayodhya Serenity</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            The trusted digital gateway to Ayodhya's temples, landmarks, and sacred destinations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-display font-semibold mb-4 text-saffron-light">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/" className="hover:opacity-100 transition-opacity link-underline">Home</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity link-underline">About Us</Link></li>
              <li><Link to="/projects" className="hover:opacity-100 transition-opacity link-underline">Our Projects</Link></li>
              <li><Link to="/team" className="hover:opacity-100 transition-opacity link-underline">Our Team</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-saffron-light">Programs</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/photo-competition" className="hover:opacity-100 transition-opacity link-underline">Photo Competition</Link></li>
              <li><Link to="/trust-badge" className="hover:opacity-100 transition-opacity link-underline">Trust Badge Program</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity link-underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4 text-saffron-light">Get in Touch</h4>
          <ul className="space-y-3 text-sm opacity-80">
            {/* Primary Email */}
            <li>
              <p className="block text-xs uppercase tracking-wider opacity-60 mb-1">Email Us</p>
              <a
                href="mailto:info.ayodhyaserenity@gmail.com"
                className="hover:opacity-100 transition-opacity text-base break-all link-underline"
              >
                info.ayodhyaserenity@gmail.com
              </a>
            </li>

            {/* Alternative: Newsletter or Inquiry Link */}
            <li>
              <a href="/contact" className="hover:opacity-100 transition-opacity flex items-center gap-2 link-underline">
                <span>Contact Form</span>
                <span className="text-xs">→</span>
              </a>
            </li>

            {/* Location/Hours - Better than empty social links */}
            <li className="pt-2 border-t border-dashed border-white/10">
              <p className="text-xs opacity-60">
                Based in Ayodhya, UP <br />
                Response time: Within 24 hours
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-1 text-xs opacity-70 pt-3 pb-0 border-t border-primary-foreground/20">
        <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity link-underline">Privacy Policy</Link>
        <span>·</span>
        <Link to="/terms-and-conditions" className="hover:opacity-100 transition-opacity link-underline">Terms & Conditions</Link>
        <span>·</span>
        <Link to="/copyright-legal" className="hover:opacity-100 transition-opacity link-underline">Copyright & Legal Protection</Link>
      </div>
      <div className="mt-10 border-primary-foreground/20 w-full flex justify-center items-center">
        <div className="flex w-full justify-center items-center gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} Ayodhya Serenity - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
