import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#000000] text-[#F9F9F6] px-6 selection:bg-[#FF6B00] selection:text-black">
      <div className="text-center space-y-6 max-w-sm">
        <h1 className="text-8xl font-['Clash_Display'] font-bold tracking-tighter text-[#FF6B00]">404</h1>
        <p className="font-['Plus_Jakarta_Sans'] text-base text-[#F9F9F6]/80 leading-relaxed">
          The path you seek does not exist. The sanctuary you are looking for has been moved or is yet to be created.
        </p>
        <div className="pt-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-xs font-semibold uppercase tracking-widest font-['Plus_Jakarta_Sans'] text-[#F9F9F6] px-6 py-3.5 transition-all duration-300"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={14} strokeWidth={1.5} className="transition-transform group-hover:-translate-x-1" />
              Return Home
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
