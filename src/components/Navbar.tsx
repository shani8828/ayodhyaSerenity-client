import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" as const }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" as const }
  }
};

const linkContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 }
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Prevent scroll when full-page menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

      {/* Fullpage Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 w-screen h-screen bg-[#000000] z-40 flex flex-col justify-between p-8 pt-28 pb-12 overflow-hidden"
          >
            {/* Header branding inside overlay */}
            <div className="flex justify-between items-center absolute top-6 left-8 right-8">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <img 
                  src="https://res.cloudinary.com/dcwwptwzt/image/upload/v1771886440/Logo-bgless_va94cp.png" 
                  alt="Ayodhya Serenity Logo" 
                  className="h-9 w-9 object-contain" 
                />
                <span className="font-['Clash_Display'] text-xl font-bold tracking-tighter text-[#F9F9F6]">
                  Ayodhya <span className="text-[#FF6B00]">Serenity</span>
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-[#F9F9F6] hover:text-[#FF6B00] transition-colors"
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Incremental delay links list */}
            <motion.div 
              variants={linkContainerVariants}
              className="flex flex-col space-y-6 my-auto max-w-sm pl-4"
            >
              {navLinks.map((l, index) => (
                <motion.div key={l.to} variants={linkVariants}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`font-['Clash_Display'] text-4xl sm:text-5xl font-bold tracking-tighter uppercase flex items-baseline transition-colors duration-300 ${
                      pathname.startsWith(l.to)
                        ? "text-[#FF6B00]"
                        : "text-[#F9F9F6] hover:text-[#FF6B00]"
                    }`}
                  >
                    <span className="text-xs font-semibold tracking-widest text-[#9AAB9B] font-['Plus_Jakarta_Sans'] mr-4">
                      0{index + 1}
                    </span>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Subfooter in overlay */}
            <div className="border-t-[0.5px] border-white/5 pt-6 text-center font-['Plus_Jakarta_Sans']">
              <p className="text-[10px] uppercase tracking-widest text-[#9AAB9B]">
                © {new Date().getFullYear()} Ayodhya Serenity Project
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
