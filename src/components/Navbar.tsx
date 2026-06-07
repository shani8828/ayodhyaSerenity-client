import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/40 backdrop-blur-xl border-b-[0.5px] border-white/5 transition-all duration-300 selection:bg-[#FF6B00] selection:text-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-16">
        <Link to="/" className="flex justify-center items-center gap-3 group">
          <img 
            src="https://res.cloudinary.com/dcwwptwzt/image/upload/v1771886440/Logo-bgless_va94cp.png" 
            alt="Ayodhya Serenity Logo" 
            className="h-9 w-9 object-contain grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
          />
          <span className="font-['Clash_Display'] text-xl font-bold tracking-tighter text-[#F9F9F6] transition-colors duration-300">
            Ayodhya <span className="text-[#FF6B00]">Serenity</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-xs uppercase tracking-widest font-semibold font-['Plus_Jakarta_Sans'] transition-colors duration-300 link-underline ${
                pathname.startsWith(l.to)
                  ? "text-[#FF6B00] after:w-full"
                  : "text-[#F9F9F6]/60 hover:text-[#FF6B00]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-[#F9F9F6] hover:text-[#FF6B00] transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#000000] border-b-[0.5px] border-white/10 px-6 py-8 space-y-6 flex flex-col items-center">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`text-xs uppercase tracking-widest font-semibold font-['Plus_Jakarta_Sans'] transition-colors duration-300 ${
                pathname.startsWith(l.to)
                  ? "text-[#FF6B00]"
                  : "text-[#F9F9F6]/60 hover:text-[#FF6B00]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
