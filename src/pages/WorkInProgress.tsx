import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Sparkles, Wrench } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

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

      <main className="min-h-screen bg-background flex flex-col items-center justify-center pt-16 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-lg w-full bg-card/80 backdrop-blur-md border border-border/50 rounded-3xl p-8 md:p-12 text-center shadow-xl hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
        >
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut"
            }}
            className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-primary/20"
          >
            <Wrench className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Work in <span className="text-gradient-saffron">Progress</span>
          </h1>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We are meticulously crafting the <span className="font-semibold text-foreground">{serviceName}</span> feature. A premium, seamless experience is on its way.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto h-12 px-6 rounded-xl border-border hover:bg-primary/5 hover:text-primary transition-all duration-300"
            >
              <Link to="/services">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
              </Link>
            </Button>
            
            <Button
              asChild
              className="w-full sm:w-auto h-12 px-6 rounded-xl bg-gradient-saffron hover:opacity-90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              <Link to="/">
                Explore Ayodhya <Sparkles className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default WorkInProgress;
