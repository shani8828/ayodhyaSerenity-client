import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Ayodhya Serenity" className="h-10 w-10" />
            <span className="font-display text-lg font-bold">Ayodhya Serenity</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            The trusted digital gateway to Ayodhya's temples, landmarks, and sacred destinations.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-saffron-light">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/projects" className="hover:opacity-100 transition-opacity">Our Projects</Link></li>
            <li><Link to="/team" className="hover:opacity-100 transition-opacity">Our Team</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-saffron-light">Programs</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/photo-competition" className="hover:opacity-100 transition-opacity">Photo Competition</Link></li>
            <li><Link to="/trust-badge" className="hover:opacity-100 transition-opacity">Trust Badge Program</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-saffron-light">Connect</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="mailto:info@ayodhyaserenity.com" className="hover:opacity-100 transition-opacity">info@ayodhyaserenity.com</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Instagram</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Twitter / X</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/20">
        <div className="flex flex-wrap justify-center gap-4 text-xs opacity-70 mb-4">
          <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <span>·</span>
          <Link to="/terms-and-conditions" className="hover:opacity-100 transition-opacity">Terms & Conditions</Link>
          <span>·</span>
          <Link to="/copyright-legal" className="hover:opacity-100 transition-opacity">Copyright & Legal Protection</Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} Ayodhya Serenity — All Rights Reserved.</p>
          <p>Designed & Developed by the Ayodhya Serenity Team</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
