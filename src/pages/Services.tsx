import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Store, Car, Laptop, ArrowRight, CheckCircle2, Globe } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const services = [
  {
    id: "business",
    icon: Store,
    title: "Business Listing Service",
    description: "People can list shops, hotels, hospitals, restaurants, and other services so visitors exploring Ayodhya Serenity can discover them easily. This improves visibility and publicity.",
    process: "Submit your business → our team reviews it → listed within 24 hours.",
    highlight: "Absolutely free of cost.",
    buttonText: "List Your Business",
    route: "/services/business",
  },
  {
    id: "transport",
    icon: Car,
    title: "Transport Listing Service",
    description: "Vehicle owners and transport providers can list their services for visitors travelling across Ayodhya and nearby places.",
    process: "Submit vehicle details → our team reviews it → listed within 24 hours.",
    highlight: "Absolutely free of cost.",
    buttonText: "List Transport Service",
    route: "/services/transport",
  },
  {
    id: "website",
    icon: Laptop,
    title: "Website Development Service",
    description: "Users can create a new website or modernize an existing one with our professional tech team.",
    process: "Submit website requirements → our team reviews it → get back to you within 24 hours.",
    highlight: "Premium quality & support.",
    buttonText: "Get a Website",
    route: "/services/website",
  },
  {
    id: "digital-preserve",
    icon: Globe,
    title: "Digital Preservation Service",
    description: "Users can preserve their landmarks, temples, markets, shops, hotels, restaurants, and also historical sites.",
    process: "Submit your details → our team reviews it → listed within 24 hours.",
    highlight: "Premium quality & support.",
    buttonText: "Preserve a Site",
    route: "/services/digital-preserve",
  },
];

const Services = () => {
  return (
    <>
      <SEOHead
        title="Our Services | Ayodhya Serenity"
        description="Discover our premium services including business listing, transport listing, and professional website development to connect with visitors of Ayodhya."
        canonical="https://ayodhyaserenity.vercel.app/services"
        breadcrumbs={[
          { name: "Home", url: "https://ayodhyaserenity.vercel.app" },
          { name: "Services", url: "https://ayodhyaserenity.vercel.app/services" },
        ]}
      />

      <main className="bg-[#000000] text-[#F9F9F6] pt-16 pb-12 min-h-screen flex flex-col selection:bg-[#FF6B00] selection:text-black">
        {/* Header */}
        <section className="py-24 md:py-36 px-6 md:px-16 bg-gradient-warm border-b-[0.5px] border-white/5 shrink-0">
          <div className="max-w-4xl mx-auto text-center">
            <span className="block text-xs uppercase tracking-[0.3em] text-[#9AAB9B] font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-['Clash_Display'] font-bold tracking-tighter leading-[1.0] text-wrap-balance mb-6 text-[#F9F9F6]">
              Empowering Businesses,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#F9F9F6]">
                Transport & Culture
              </span>
            </h1>
            <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#F9F9F6]/80 leading-relaxed max-w-2xl mx-auto">
              Seamlessly connect with millions of visitors exploring Ayodhya's timeless heritage.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 md:px-16 py-20 md:py-32 bg-[#000000] flex-grow">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.05 }}
                    className="flex flex-col space-y-6 group"
                  >
                    <div className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-black transition-colors duration-300">
                      <Icon size={20} strokeWidth={1} />
                    </div>

                    <h3 className="font-['Clash_Display'] text-2xl font-bold tracking-tight text-[#F9F9F6]">
                      {service.title}
                    </h3>

                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9F9F6]/75 leading-relaxed min-h-[70px]">
                      {service.description}
                    </p>

                    <div className="border-t-[0.5px] border-white/10 pt-4 space-y-2">
                      <h4 className="text-[10px] font-bold text-[#9AAB9B] uppercase tracking-widest">
                        Process
                      </h4>
                      <p className="text-xs text-[#F9F9F6]/60 leading-relaxed">
                        {service.process}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-500 font-['Plus_Jakarta_Sans']">
                      <CheckCircle2 size={14} strokeWidth={1.5} />
                      <span>{service.highlight}</span>
                    </div>

                    <div className="pt-4 mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="group/btn w-full bg-[#FF6B00] text-black font-['Plus_Jakarta_Sans'] font-semibold px-6 py-3.5 rounded-none uppercase text-[10px] tracking-widest transition-all duration-300"
                      >
                        <Link to={service.route} className="flex items-center justify-center gap-2">
                          {service.buttonText}
                          <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                      </motion.button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
