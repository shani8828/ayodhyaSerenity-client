import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Sparkles, Wrench } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const WorkInProgress = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const serviceSlug = pathParts[pathParts.length - 1] || "this service";
  const serviceName = serviceSlug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <>
      <SEOHead
        title={`${serviceName} - Coming Soon | Ayodhya Serenity`}
        description={`We are meticulously crafting the ${serviceName} feature to bring you a premium experience.`}
      />

      <main className="min-h-screen bg-[#000000] text-[#F9F9F6] flex flex-col items-center justify-center pt-24 px-6 relative overflow-hidden selection:bg-[#FF6B00] selection:text-black">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative z-10 max-w-lg w-full text-center space-y-8 py-12"
        >
          <motion.div
            initial={{ rotate: -5 }}
            animate={{ rotate: 5 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut"
            }}
            className="w-16 h-16 mx-auto bg-white/5 flex items-center justify-center border border-white/10"
          >
            <Wrench className="w-8 h-8 text-[#FF6B00]" strokeWidth={1} />
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-['Clash_Display'] font-bold tracking-tighter text-[#F9F9F6]">
              Work in <span className="text-[#FF6B00]">Progress</span>
            </h1>
            
            <p className="font-['Plus_Jakarta_Sans'] text-base text-[#F9F9F6]/80 leading-relaxed max-w-sm mx-auto">
              We are meticulously crafting the <span className="font-bold text-[#F9F9F6]">{serviceName}</span> feature. A premium, seamless experience is on its way.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 font-['Plus_Jakarta_Sans']">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto border border-white/20 hover:border-white/40 text-xs font-semibold uppercase tracking-widest text-[#F9F9F6] px-6 py-3.5 transition-all duration-300"
            >
              <Link to="/services" className="flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} /> 
                Back to Services
              </Link>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto bg-[#FF6B00] text-black font-semibold px-6 py-3.5 uppercase text-xs tracking-widest transition-all duration-300"
            >
              <Link to="/" className="flex items-center justify-center gap-2">
                Explore Ayodhya <Sparkles className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default WorkInProgress;
